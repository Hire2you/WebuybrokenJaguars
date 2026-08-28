"use client";

import { useId, type FormEvent } from "react";

const TRUST_POINTS = [
  "Free nationwide collection",
  "Payment same day",
  "No obligation",
];

export default function HeroForm() {
  const id = useId();
  const regId = `${id}-reg`;
  const mileageId = `${id}-mileage`;
  const postcodeId = `${id}-postcode`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Next step of the valuation flow is not built yet. This is the hero foundation only.
    event.preventDefault();
  }

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border-2 border-brand-green bg-white p-5 shadow-[0_20px_45px_-25px_rgba(10,61,42,0.45)] sm:p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={regId} className="sr-only">
              Vehicle registration
            </label>
            <div className="flex h-14 items-stretch overflow-hidden rounded-md border-2 border-black bg-plate-yellow focus-within:ring-2 focus-within:ring-brand-green focus-within:ring-offset-2">
              <div className="flex w-7 shrink-0 items-center justify-center bg-[#003399] text-[10px] font-bold leading-none text-white sm:w-8">
                GB
              </div>
              <input
                id={regId}
                name="reg"
                type="text"
                inputMode="text"
                autoCapitalize="characters"
                autoComplete="off"
                placeholder="ENTER REG"
                required
                className="min-w-0 flex-1 bg-transparent px-2 text-center font-sans text-lg font-semibold uppercase tracking-[0.15em] text-black outline-none placeholder:text-black/60 sm:text-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={mileageId} className="sr-only">
              Mileage
            </label>
            <input
              id={mileageId}
              name="mileage"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="MILEAGE"
              required
              className="h-14 w-full rounded-md border border-grey-border bg-white px-4 text-center font-sans text-lg font-semibold uppercase tracking-wide text-foreground outline-none placeholder:font-sans placeholder:text-sm placeholder:font-medium placeholder:tracking-normal placeholder:text-grey-secondary focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 sm:text-xl"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={postcodeId} className="sr-only">
              Postcode
            </label>
            <input
              id={postcodeId}
              name="postcode"
              type="text"
              autoCapitalize="characters"
              autoComplete="postal-code"
              placeholder="POSTCODE"
              required
              className="h-14 w-full rounded-md border border-grey-border bg-white px-4 text-center font-sans text-lg font-semibold uppercase tracking-wide text-foreground outline-none placeholder:font-sans placeholder:text-sm placeholder:font-medium placeholder:tracking-normal placeholder:text-grey-secondary focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 sm:text-xl"
            />
          </div>
        </div>

        <button
          type="submit"
          className="motion-btn-primary group mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-md bg-brand-green font-sans text-lg font-semibold uppercase tracking-[0.1em] text-white hover:bg-brand-green-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-dark"
        >
          Next
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="motion-btn-arrow"
          >
            <path
              d="M4 12h16m0 0-6-6m6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-grey-secondary">
        {TRUST_POINTS.map((point, index) => (
          <li key={point} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">·</span>}
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
