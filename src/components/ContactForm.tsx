import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.subject.trim()) errors.subject = "Subject is required.";
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unexpected error. Please try again later."
      );
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle size={28} strokeWidth={1.8} className="text-green-400" />
        </div>
        <h3 className="text-primary font-bold text-xl mb-2">Message Sent!</h3>
        <p className="text-secondary text-sm max-w-xs">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-accent text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 bg-bg border rounded-xl text-primary placeholder-subtle text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent";
  const inputNormal = "border-border hover:border-border/80";
  const inputError = "border-red-500/60";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            disabled={state === "submitting"}
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            disabled={state === "submitting"}
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-secondary mb-1.5"
        >
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          value={form.subject}
          onChange={handleChange}
          disabled={state === "submitting"}
          className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-secondary mb-1.5"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          value={form.message}
          onChange={handleChange}
          disabled={state === "submitting"}
          className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Global error */}
      {state === "error" && (
        <div
          className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
          role="alert"
        >
          <AlertCircle size={16} strokeWidth={2} />
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-bg font-semibold text-sm rounded-xl hover:bg-accent-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <Loader size={16} strokeWidth={2} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} strokeWidth={2} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
