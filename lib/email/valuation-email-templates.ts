import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/components/siteContact";
import type { ValuationSubmission } from "@/lib/valuation";

const BRAND = {
  green: "#0a3d2a",
  greenDark: "#04211a",
  greenMid: "#0f5238",
  accent: "#1f7a52",
  accentLight: "#2a9d6a",
  jetBlack: "#0a0a0a",
  offWhite: "#f5f6f5",
  white: "#ffffff",
  ink: "#141414",
  foreground: "#12181a",
  slate: "#5b5b5b",
  greySecondary: "#66716f",
  greyBorder: "#dde3e1",
  line: "#e6e6e6",
  plateYellow: "#ffd200",
  plateBlue: "#003399",
} as const;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://webuybrokenjaguars.co.uk";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function phoneTelHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("44")) return `tel:+${digits}`;
  if (digits.startsWith("0")) return `tel:+44${digits.slice(1)}`;
  return `tel:+${digits}`;
}

function formatSubmittedAt() {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(new Date());
}

function sectionLabel(title: string) {
  return `
    <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;line-height:1.4;color:${BRAND.green};text-transform:uppercase;letter-spacing:0.22em;">
      ${escapeHtml(title)}
    </p>
  `;
}

function detailRow(label: string, value: string, href?: string) {
  const safeValue = escapeHtml(value);
  const valueHtml = href
    ? `<a href="${href}" style="color:${BRAND.green};text-decoration:none;font-weight:700;">${safeValue}</a>`
    : `<span style="color:${BRAND.ink};font-weight:700;">${safeValue}</span>`;

  return `
    <tr>
      <td style="padding:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:${BRAND.greySecondary};vertical-align:top;width:38%;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;vertical-align:top;">
        ${valueHtml}
      </td>
    </tr>
  `;
}

function emailShell(title: string, body: string) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.offWhite};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(title)}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${BRAND.offWhite};border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:28px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;border-collapse:collapse;">
            ${body}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

function emailHeader() {
  return `
    <tr>
      <td style="background-color:${BRAND.jetBlack};border-radius:16px 16px 0 0;padding:22px 28px;border:2px solid ${BRAND.green};border-bottom:none;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td>
              <img
                src="${SITE_URL}/logo.webp"
                alt="We Buy Broken Jaguars"
                width="220"
                height="88"
                style="display:block;width:220px;max-width:100%;height:auto;border:0;"
              />
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function emailHero(title: string, subtitle: string) {
  return `
    <tr>
      <td style="background:linear-gradient(135deg, ${BRAND.green} 0%, ${BRAND.greenDark} 100%);padding:24px 28px;border-left:2px solid ${BRAND.green};border-right:2px solid ${BRAND.green};">
        <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;line-height:1.4;color:rgba(255,255,255,0.72);text-transform:uppercase;letter-spacing:0.22em;">
          Valuation form
        </p>
        <h1 style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:700;line-height:1.1;color:${BRAND.white};text-transform:uppercase;letter-spacing:-0.02em;">
          ${escapeHtml(title)}
        </h1>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.84);">
          ${escapeHtml(subtitle)}
        </p>
      </td>
    </tr>
  `;
}

function emailFooter(note: string) {
  return `
    <tr>
      <td style="background-color:${BRAND.greenDark};border-radius:0 0 16px 16px;padding:20px 28px;border:2px solid ${BRAND.green};border-top:none;">
        <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:rgba(255,255,255,0.72);">
          ${escapeHtml(note)}
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:rgba(255,255,255,0.55);">
          We Buy Broken Jaguars · ${escapeHtml(SITE_URL.replace(/^https?:\/\//, ""))}
        </p>
      </td>
    </tr>
  `;
}

function registrationPlate(reg: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border:2px solid #000000;border-radius:8px;background-color:${BRAND.plateYellow};">
      <tr>
        <td style="background-color:${BRAND.plateBlue};padding:0 8px;width:34px;text-align:center;vertical-align:middle;">
          <span style="display:block;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;line-height:1;color:${BRAND.white};">
            GB
          </span>
        </td>
        <td style="padding:12px 18px;text-align:center;">
          <span style="display:block;font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:700;line-height:1;color:#000000;letter-spacing:0.15em;text-transform:uppercase;">
            ${escapeHtml(reg)}
          </span>
        </td>
      </tr>
    </table>
  `;
}

function conditionBadge(condition: string) {
  return `
    <span style="display:inline-block;padding:6px 12px;border-radius:999px;background-color:rgba(10,61,42,0.08);border:1px solid rgba(10,61,42,0.16);font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;line-height:1.4;color:${BRAND.green};">
      ${escapeHtml(condition)}
    </span>
  `;
}

function actionButton(label: string, href: string, variant: "primary" | "secondary") {
  const primaryStyle = `background-color:${BRAND.green};color:${BRAND.white};border:2px solid ${BRAND.green};`;
  const secondaryStyle = `background-color:${BRAND.white};color:${BRAND.green};border:2px solid ${BRAND.green};`;

  return `
    <a
      href="${href}"
      style="display:inline-block;padding:14px 22px;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;line-height:1;text-decoration:none;text-transform:uppercase;letter-spacing:0.1em;${variant === "primary" ? primaryStyle : secondaryStyle}"
    >
      ${escapeHtml(label)}
    </a>
  `;
}

export function buildLeadEmailHtml(values: ValuationSubmission) {
  const submittedAt = formatSubmittedAt();
  const telHref = phoneTelHref(values.phone);
  const mailtoHref = `mailto:${encodeURIComponent(values.email)}?subject=${encodeURIComponent(`Re: Your Jaguar valuation (${values.reg})`)}`;

  const body = `
    ${emailHeader()}
    ${emailHero(
      "New valuation request",
      `Submitted ${submittedAt} via webuybrokenjaguars.co.uk`,
    )}
    <tr>
      <td style="background-color:${BRAND.white};padding:28px;border-left:2px solid ${BRAND.green};border-right:2px solid ${BRAND.green};">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td align="center" style="padding-bottom:22px;">
              ${registrationPlate(values.reg)}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:26px;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;line-height:1.2;color:${BRAND.green};text-transform:uppercase;letter-spacing:-0.02em;">
                ${escapeHtml(values.make)} ${escapeHtml(values.model)}
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${BRAND.greySecondary};">
                ${escapeHtml(values.mileage)} miles · ${escapeHtml(values.postcode)}
              </p>
            </td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:18px 20px;border-radius:12px;background-color:${BRAND.offWhite};border:1px solid ${BRAND.greyBorder};">
              ${sectionLabel("Vehicle condition")}
              ${conditionBadge(values.condition)}
            </td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td width="50%" valign="top" style="padding-right:10px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border:1px solid ${BRAND.greyBorder};border-radius:12px;background-color:${BRAND.white};">
                <tr>
                  <td style="padding:18px 20px;">
                    ${sectionLabel("Vehicle details")}
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      ${detailRow("Registration", values.reg)}
                      ${detailRow("Mileage", `${values.mileage} miles`)}
                      ${detailRow("Postcode", values.postcode)}
                      ${detailRow("Make", values.make)}
                      ${detailRow("Model", values.model)}
                      ${detailRow("Condition", values.condition)}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td width="50%" valign="top" style="padding-left:10px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border:1px solid ${BRAND.greyBorder};border-radius:12px;background-color:${BRAND.white};">
                <tr>
                  <td style="padding:18px 20px;">
                    ${sectionLabel("Contact details")}
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      ${detailRow("Name", values.name)}
                      ${detailRow("Email", values.email, `mailto:${values.email}`)}
                      ${detailRow("Phone", values.phone, telHref)}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:26px;">
          <tr>
            <td align="center" style="padding:0 6px 10px 0;">
              ${actionButton("Reply to customer", mailtoHref, "primary")}
            </td>
            <td align="center" style="padding:0 0 10px 6px;">
              ${actionButton("Call customer", telHref, "secondary")}
            </td>
          </tr>
        </table>

        <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${BRAND.greySecondary};text-align:center;">
          Reply directly to this email to reach ${escapeHtml(values.name)} at ${escapeHtml(values.email)}.
        </p>
      </td>
    </tr>
    ${emailFooter("This notification was generated from the website valuation form.")}
  `;

  return emailShell(`New valuation: ${values.reg}`, body);
}

export function buildConfirmationEmailHtml(values: ValuationSubmission) {
  const body = `
    ${emailHeader()}
    ${emailHero(
      "We have your details",
      "Thanks for requesting a valuation with We Buy Broken Jaguars.",
    )}
    <tr>
      <td style="background-color:${BRAND.white};padding:28px;border-left:2px solid ${BRAND.green};border-right:2px solid ${BRAND.green};">
        <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:${BRAND.ink};">
          Hi ${escapeHtml(values.name)},
        </p>
        <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:${BRAND.slate};">
          We have received your valuation request for your
          <strong style="color:${BRAND.green};">${escapeHtml(values.make)} ${escapeHtml(values.model)}</strong>.
        </p>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 24px;">
          <tr>
            <td align="center" style="padding-bottom:18px;">
              ${registrationPlate(values.reg)}
            </td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border:1px solid ${BRAND.greyBorder};border-radius:12px;background-color:${BRAND.offWhite};">
          <tr>
            <td style="padding:18px 20px;">
              ${sectionLabel("Your submission")}
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                ${detailRow("Registration", values.reg)}
                ${detailRow("Mileage", `${values.mileage} miles`)}
                ${detailRow("Postcode", values.postcode)}
                ${detailRow("Condition", values.condition)}
              </table>
            </td>
          </tr>
        </table>

        <p style="margin:24px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:${BRAND.slate};">
          Our team will review your details and be in touch shortly with a no-obligation offer.
          Free nationwide collection and same-day payment when you accept.
        </p>

        <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${BRAND.greySecondary};">
          Questions? Call us on
          <a href="${SITE_PHONE_TEL}" style="color:${BRAND.green};text-decoration:none;font-weight:700;">
            ${escapeHtml(SITE_PHONE_DISPLAY)}
          </a>
          or email
          <a href="mailto:${SITE_EMAIL}" style="color:${BRAND.green};text-decoration:none;font-weight:700;">
            ${escapeHtml(SITE_EMAIL)}
          </a>.
        </p>
      </td>
    </tr>
    ${emailFooter("No obligation. Free collection. Payment same day.")}
  `;

  return emailShell("We received your Jaguar valuation request", body);
}
