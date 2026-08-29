import { Resend } from "resend";
import { SITE_EMAIL } from "@/components/siteContact";
import {
  buildConfirmationEmailHtml,
  buildLeadEmailHtml,
} from "@/lib/email/valuation-email-templates";
import type { ValuationSubmission } from "@/lib/valuation";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  return new Resend(apiKey);
}

function getFromAddress() {
  return (
    process.env.RESEND_FROM_EMAIL ??
    "We Buy Broken Jaguars <valuations@webuybrokenjaguars.com>"
  );
}

function getToAddress() {
  return process.env.RESEND_TO_EMAIL ?? SITE_EMAIL;
}

export async function sendValuationEmails(values: ValuationSubmission) {
  const resend = getResendClient();
  const from = getFromAddress();
  const to = getToAddress();

  const leadResult = await resend.emails.send({
    from,
    to,
    replyTo: values.email,
    subject: `New valuation: ${values.reg} — ${values.make} ${values.model}`,
    html: buildLeadEmailHtml(values),
  });

  if (leadResult.error) {
    throw new Error(leadResult.error.message);
  }

  const confirmationResult = await resend.emails.send({
    from,
    to: values.email,
    replyTo: to,
    subject: "We received your Jaguar valuation request",
    html: buildConfirmationEmailHtml(values),
  });

  if (confirmationResult.error) {
    throw new Error(confirmationResult.error.message);
  }

  return {
    leadId: leadResult.data?.id,
    confirmationId: confirmationResult.data?.id,
  };
}
