"use client";

import { useEnquiryForm } from "@/hooks/use-enquiry-form";
import PillButton from "@/components/ui/pill-button";

const ENQUIRY_TYPES = [
  { value: "purchase", label: "Vehicle Purchase" },
  { value: "repair", label: "Repair" },
  { value: "refurbishment", label: "Refurbishment" },
  { value: "armouring", label: "Armouring" },
  { value: "other", label: "Other" },
];

const INPUT_CLASS =
  "w-full bg-transparent border-b type-body text-[var(--text-white)] py-3 outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent-dark-bg)]";
const BORDER_STYLE = { borderBottom: "1px solid var(--border)" };
const FOCUS_BORDER = "1px solid var(--accent-dark-bg)";

export default function EnquiryForm() {
  const { form, onSubmit, isSubmitted, isSubmitting, submitError } =
    useEnquiryForm();
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = form;
  const selectedType = watch("enquiryType");

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-start justify-center py-16">
        <p className="type-title-2 text-[var(--text-white)] mb-3">
          Enquiry received.
        </p>
        <p className="type-body text-[var(--text-secondary)]">
          Our team will respond within two working days. All enquiries are
          handled with full confidentiality.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
      {/* Name + Organisation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <input
            {...register("fullName")}
            placeholder="Full Name *"
            className={INPUT_CLASS}
            style={BORDER_STYLE}
            id="form-full-name"
          />
          {errors.fullName && (
            <p className="type-caption text-red-400 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("organisation")}
            placeholder="Organisation *"
            className={INPUT_CLASS}
            style={BORDER_STYLE}
            id="form-organisation"
          />
          {errors.organisation && (
            <p className="type-caption text-red-400 mt-1">
              {errors.organisation.message}
            </p>
          )}
        </div>
      </div>

      {/* Role + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          {...register("role")}
          placeholder="Role / Title"
          className={INPUT_CLASS}
          style={BORDER_STYLE}
          id="form-role"
        />
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address *"
            className={INPUT_CLASS}
            style={BORDER_STYLE}
            id="form-email"
          />
          {errors.email && (
            <p className="type-caption text-red-400 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          className={INPUT_CLASS}
          style={BORDER_STYLE}
          id="form-phone"
        />
        <div>
          <input
            {...register("country")}
            placeholder="Country *"
            className={INPUT_CLASS}
            style={BORDER_STYLE}
            id="form-country"
          />
          {errors.country && (
            <p className="type-caption text-red-400 mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      {/* Enquiry type */}
      <div>
        <p className="type-caption text-[var(--text-tertiary)] mb-3">
          Enquiry Type
        </p>
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() =>
                setValue("enquiryType", t.value as typeof selectedType)
              }
              className="type-caption rounded-[980px] px-4 py-2 transition-all duration-200"
              style={{
                background:
                  selectedType === t.value
                    ? "var(--accent)"
                    : "rgba(255,255,255,0.08)",
                color:
                  selectedType === t.value ? "#fff" : "var(--text-secondary)",
              }}
              id={`form-type-${t.value}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register("message")}
          placeholder="Message / Requirements *"
          rows={4}
          className={`${INPUT_CLASS} resize-none`}
          style={BORDER_STYLE}
          id="form-message"
        />
        {errors.message && (
          <p className="type-caption text-red-400 mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* File upload */}
      <div>
        <p className="type-caption text-[var(--text-tertiary)] mb-2">
          Attachment (optional)
        </p>
        <input
          {...register("attachment")}
          type="file"
          accept=".pdf,.doc,.docx"
          className="type-caption text-[var(--text-secondary)] file:mr-4 file:rounded-[980px] file:border-0 file:bg-white/10 file:text-white file:px-4 file:py-2 file:type-caption cursor-pointer"
          id="form-attachment"
        />
        <p className="type-caption text-[var(--text-tertiary)] mt-1">
          Attach RFP, specs, or tender document
        </p>
      </div>

      {submitError && (
        <p className="type-caption text-red-400">{submitError}</p>
      )}

      <PillButton
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        fullWidth
        id="form-submit"
      >
        {isSubmitting ? "Submitting…" : "Submit Enquiry"}
      </PillButton>

      <p className="type-caption text-[var(--text-tertiary)] leading-relaxed">
        All enquiries are handled with full confidentiality. This site complies
        with applicable data protection and export control regulations.
        Procurement of armoured vehicles is subject to applicable end-user
        requirements.
      </p>
    </form>
  );
}
