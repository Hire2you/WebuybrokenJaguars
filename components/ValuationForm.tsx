"use client";

import { ChevronDown } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Button from "./Button";
import { VALUATION_CONDITIONS } from "@/lib/valuation";

const TRUST_POINTS = [
  "Free nationwide collection",
  "Payment same day",
  "No obligation",
];

const STEP_TITLES = {
  1: "Registration, mileage and postcode",
  2: "Make, model and condition",
  3: "Your contact details",
} as const;

const TOTAL_STEPS = 3;

const UK_POSTCODE =
  /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Step = 1 | 2 | 3;

type FormValues = {
  reg: string;
  mileage: string;
  postcode: string;
  make: string;
  model: string;
  condition: string;
  name: string;
  email: string;
  phone: string;
};

type FieldName = keyof FormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const INITIAL_VALUES: FormValues = {
  reg: "",
  mileage: "",
  postcode: "",
  make: "",
  model: "",
  condition: "",
  name: "",
  email: "",
  phone: "",
};

const TEXT_INPUT_CLASS =
  "h-14 w-full rounded-md border bg-white px-4 text-center font-sans text-lg font-semibold uppercase tracking-wide text-foreground outline-none placeholder:font-sans placeholder:text-sm placeholder:font-medium placeholder:tracking-normal placeholder:text-grey-secondary focus:ring-2 focus:ring-brand-green/30 sm:text-xl";

const CONTACT_INPUT_CLASS =
  "h-14 w-full rounded-md border bg-white px-4 text-center font-sans text-lg font-semibold tracking-normal text-foreground outline-none placeholder:font-sans placeholder:text-sm placeholder:font-medium placeholder:text-grey-secondary focus:ring-2 focus:ring-brand-green/30 sm:text-xl";

function borderClass(invalid: boolean) {
  return invalid
    ? "border-red-700 focus:border-red-700"
    : "border-grey-border focus:border-brand-green";
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function isUkPhone(value: string) {
  const digits = digitsOnly(value);
  if (digits.startsWith("44")) {
    return digits.length >= 11 && digits.length <= 13;
  }
  return digits.length >= 10 && digits.length <= 11;
}

function validateStep(step: Step, values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (step === 1) {
    const reg = values.reg.replace(/\s+/g, "");
    if (reg.length < 2) {
      errors.reg = "Enter the vehicle registration.";
    }
    if (!/^\d+$/.test(values.mileage)) {
      errors.mileage = "Enter the mileage as a number.";
    } else if (Number(values.mileage) > 999999) {
      errors.mileage = "Check the mileage and try again.";
    }
    if (!UK_POSTCODE.test(values.postcode.trim())) {
      errors.postcode = "Enter a valid UK postcode.";
    }
  }

  if (step === 2) {
    if (values.make.trim().length < 2) {
      errors.make = "Enter the make.";
    }
    if (values.model.trim().length < 1) {
      errors.model = "Enter the model.";
    }
    if (!values.condition) {
      errors.condition = "Select the condition.";
    }
  }

  if (step === 3) {
    if (values.name.trim().length < 2) {
      errors.name = "Enter your name.";
    }
    if (!EMAIL.test(values.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
    if (!isUkPhone(values.phone)) {
      errors.phone = "Enter a valid UK phone number.";
    }
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1 text-center text-xs text-red-800">
      {message}
    </p>
  );
}

function StepIndicator({ step }: { step: Step }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-secondary">
        Step {step} of {TOTAL_STEPS}
      </p>
      <div className="flex gap-1.5" aria-hidden="true">
        {([1, 2, 3] as const).map((item) => (
          <span
            key={item}
            className={`h-1 w-7 rounded-full sm:w-8 ${
              item <= step ? "bg-brand-green" : "bg-grey-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

type FieldProps = {
  ids: Record<FieldName, string>;
  values: FormValues;
  errors: FieldErrors;
  onChange: (name: FieldName, value: string) => void;
};

function StepOneFields({ ids, values, errors, onChange }: FieldProps) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.reg} className="sr-only">
          Vehicle registration
        </label>
        <div
          className={`flex h-14 items-stretch overflow-hidden rounded-md border-2 bg-plate-yellow focus-within:ring-2 focus-within:ring-brand-green focus-within:ring-offset-2 ${
            errors.reg ? "border-red-700" : "border-black"
          }`}
        >
          <div className="flex w-7 shrink-0 items-center justify-center bg-[#003399] text-[10px] font-bold leading-none text-white sm:w-8">
            GB
          </div>
          <input
            id={ids.reg}
            name="reg"
            type="text"
            inputMode="text"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            placeholder="ENTER REG"
            required
            aria-invalid={Boolean(errors.reg)}
            aria-describedby={errors.reg ? `${ids.reg}-error` : undefined}
            value={values.reg}
            onChange={(event) =>
              onChange("reg", event.target.value.toUpperCase())
            }
            className="min-w-0 flex-1 bg-transparent px-2 text-center font-sans text-lg font-semibold uppercase tracking-[0.15em] text-black outline-none placeholder:text-black/60 sm:text-xl"
          />
        </div>
        <FieldError id={`${ids.reg}-error`} message={errors.reg} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.mileage} className="sr-only">
          Mileage
        </label>
        <input
          id={ids.mileage}
          name="mileage"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="MILEAGE"
          required
          aria-invalid={Boolean(errors.mileage)}
          aria-describedby={
            errors.mileage ? `${ids.mileage}-error` : undefined
          }
          value={values.mileage}
          onChange={(event) =>
            onChange("mileage", digitsOnly(event.target.value))
          }
          className={`${TEXT_INPUT_CLASS} ${borderClass(Boolean(errors.mileage))}`}
        />
        <FieldError id={`${ids.mileage}-error`} message={errors.mileage} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.postcode} className="sr-only">
          Postcode
        </label>
        <input
          id={ids.postcode}
          name="postcode"
          type="text"
          autoCapitalize="characters"
          autoComplete="postal-code"
          spellCheck={false}
          placeholder="POSTCODE"
          required
          aria-invalid={Boolean(errors.postcode)}
          aria-describedby={
            errors.postcode ? `${ids.postcode}-error` : undefined
          }
          value={values.postcode}
          onChange={(event) =>
            onChange("postcode", event.target.value.toUpperCase())
          }
          className={`${TEXT_INPUT_CLASS} ${borderClass(Boolean(errors.postcode))}`}
        />
        <FieldError id={`${ids.postcode}-error`} message={errors.postcode} />
      </div>
    </>
  );
}

function ConditionSelect({
  id,
  value,
  error,
  onChange,
}: {
  id: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onClick={() => setOpen((current) => !current)}
        className={`h-14 w-full border-2 border-black bg-white px-4 text-center font-sans outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 ${
          error ? "border-red-700" : ""
        } ${
          value
            ? "text-lg font-semibold uppercase tracking-wide text-foreground sm:text-xl"
            : "text-sm font-semibold uppercase tracking-wide text-grey-secondary"
        }`}
      >
        <span className="flex items-center justify-between gap-2">
          <span className="flex-1 text-center">{value || "CONDITION"}</span>
          <ChevronDown
            size={18}
            strokeWidth={2.25}
            aria-hidden
            className={`shrink-0 text-black transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute z-30 mt-1 w-full overflow-hidden border-2 border-black bg-white shadow-[0_12px_28px_-8px_rgba(0,0,0,0.35)]"
        >
          {VALUATION_CONDITIONS.map((condition) => {
            const selected = value === condition;
            return (
              <li
                key={condition}
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(condition);
                  setOpen(false);
                }}
                className={`cursor-pointer px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide transition-colors sm:text-base ${
                  selected
                    ? "bg-[#0056b3] text-white"
                    : "text-black hover:bg-[#0056b3] hover:text-white"
                }`}
              >
                {condition}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function StepTwoFields({ ids, values, errors, onChange }: FieldProps) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.make} className="sr-only">
          Make
        </label>
        <input
          id={ids.make}
          name="make"
          type="text"
          autoComplete="off"
          placeholder="MAKE"
          required
          aria-invalid={Boolean(errors.make)}
          aria-describedby={errors.make ? `${ids.make}-error` : undefined}
          value={values.make}
          onChange={(event) => onChange("make", event.target.value)}
          className={`${TEXT_INPUT_CLASS} ${borderClass(Boolean(errors.make))}`}
        />
        <FieldError id={`${ids.make}-error`} message={errors.make} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.model} className="sr-only">
          Model
        </label>
        <input
          id={ids.model}
          name="model"
          type="text"
          autoComplete="off"
          placeholder="MODEL"
          required
          aria-invalid={Boolean(errors.model)}
          aria-describedby={errors.model ? `${ids.model}-error` : undefined}
          value={values.model}
          onChange={(event) => onChange("model", event.target.value)}
          className={`${TEXT_INPUT_CLASS} ${borderClass(Boolean(errors.model))}`}
        />
        <FieldError id={`${ids.model}-error`} message={errors.model} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.condition} className="sr-only">
          Condition
        </label>
        <ConditionSelect
          id={ids.condition}
          value={values.condition}
          error={errors.condition}
          onChange={(condition) => onChange("condition", condition)}
        />
        <FieldError
          id={`${ids.condition}-error`}
          message={errors.condition}
        />
      </div>
    </>
  );
}

function StepThreeFields({ ids, values, errors, onChange }: FieldProps) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.name} className="sr-only">
          Name
        </label>
        <input
          id={ids.name}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="NAME"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${ids.name}-error` : undefined}
          value={values.name}
          onChange={(event) => onChange("name", event.target.value)}
          className={`${CONTACT_INPUT_CLASS} ${borderClass(Boolean(errors.name))}`}
        />
        <FieldError id={`${ids.name}-error`} message={errors.name} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.email} className="sr-only">
          Email
        </label>
        <input
          id={ids.email}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="EMAIL"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${ids.email}-error` : undefined}
          value={values.email}
          onChange={(event) => onChange("email", event.target.value)}
          className={`${CONTACT_INPUT_CLASS} ${borderClass(Boolean(errors.email))}`}
        />
        <FieldError id={`${ids.email}-error`} message={errors.email} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={ids.phone} className="sr-only">
          Phone number
        </label>
        <input
          id={ids.phone}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="PHONE NUMBER"
          required
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${ids.phone}-error` : undefined}
          value={values.phone}
          onChange={(event) => onChange("phone", event.target.value)}
          className={`${CONTACT_INPUT_CLASS} ${borderClass(Boolean(errors.phone))}`}
        />
        <FieldError id={`${ids.phone}-error`} message={errors.phone} />
      </div>
    </>
  );
}

function TrustPoints() {
  return (
    <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-grey-secondary">
      {TRUST_POINTS.map((point, index) => (
        <li key={point} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">·</span>}
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function ValuationForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const skipInitialFocus = useRef(true);

  const [step, setStep] = useState<Step>(1);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const ids: Record<FieldName, string> = {
    reg: `${id}-reg`,
    mileage: `${id}-mileage`,
    postcode: `${id}-postcode`,
    make: `${id}-make`,
    model: `${id}-model`,
    condition: `${id}-condition`,
    name: `${id}-name`,
    email: `${id}-email`,
    phone: `${id}-phone`,
  };

  const headingId = `${id}-heading`;

  useEffect(() => {
    if (skipInitialFocus.current) {
      skipInitialFocus.current = false;
      return;
    }

    const firstField = formRef.current?.querySelector<HTMLElement>(
      "input:not([disabled]), select:not([disabled])",
    );
    firstField?.focus();
  }, [step]);

  function handleChange(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function focusFirstError(nextErrors: FieldErrors) {
    const firstInvalid = (
      Object.keys(nextErrors) as FieldName[]
    ).find((name) => nextErrors[name]);
    if (!firstInvalid) return;
    document.getElementById(ids[firstInvalid])?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateStep(step, values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    if (step < TOTAL_STEPS) {
      setStep((current) => (current + 1) as Step);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setSubmitError(
          data.error ?? "Unable to send your valuation. Please try again.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to send your valuation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleBack() {
    if (step === 1) return;
    setErrors({});
    setStep((current) => (current - 1) as Step);
  }

  function handleReset() {
    skipInitialFocus.current = true;
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setStep(1);
    setValues(INITIAL_VALUES);
    setErrors({});
  }

  const fieldProps: FieldProps = { ids, values, errors, onChange: handleChange };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border-2 border-brand-green bg-white p-5 shadow-[0_20px_45px_-25px_rgba(10,61,42,0.45)] sm:p-8">
      {submitted ? (
        <div className="py-4 text-center sm:py-6">
          <p className="font-sans text-xl font-bold uppercase tracking-tight text-brand-green sm:text-2xl">
            We have your details
          </p>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-grey-secondary">
            Thanks. We will be in touch shortly with a no-obligation offer for
            your Jaguar.
          </p>
          <Button
            type="button"
            variant="primary"
            size="lg"
            fullWidth
            className="mt-6 flex"
            onClick={handleReset}
          >
            Get another valuation
          </Button>
          <TrustPoints />
        </div>
      ) : (
        <>
          <StepIndicator step={step} />
          <h2 id={headingId} className="sr-only">
            Step {step} of {TOTAL_STEPS}: {STEP_TITLES[step]}
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-labelledby={headingId}
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {step === 1 ? <StepOneFields {...fieldProps} /> : null}
              {step === 2 ? <StepTwoFields {...fieldProps} /> : null}
              {step === 3 ? <StepThreeFields {...fieldProps} /> : null}
            </div>

            {submitError ? (
              <p
                role="alert"
                className="mt-4 text-center text-sm text-red-800"
              >
                {submitError}
              </p>
            ) : null}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              showArrow
              disabled={isSubmitting}
              className="mt-4 flex"
            >
              {isSubmitting
                ? "Sending..."
                : step === 3
                  ? "Get my valuation"
                  : "Next"}
            </Button>

            {step > 1 ? (
              <div className="mt-3 flex justify-center">
                <Button type="button" variant="link" onClick={handleBack}>
                  Back
                </Button>
              </div>
            ) : null}
          </form>
          <TrustPoints />
        </>
      )}
    </div>
  );
}
