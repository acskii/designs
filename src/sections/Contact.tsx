import { useState } from "react";
import RadioOption from "../components/RadioOption";
import Field from "../components/Field";
import SelectField from "../components/SelectField";

type FormMode = "say-hi" | "get-quote";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company: string;
  service: string;
  budget: string;
}

const COMPANY_EMAIL = "info@positivus.com";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
  company: "",
  service: "",
  budget: "",
};

function log(message: string) {
  console.log(`[contact] ${new Date().toISOString()} ${message}`);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [mode, setMode] = useState<FormMode>("say-hi");
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleModeChange = (next: FormMode) => {
    if (next === mode) return;
    setMode(next);
    setErrors({});
    log(`Switched mode to "${next}"`);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      nextErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) nextErrors.message = "Message is required";

    if (mode === "get-quote") {
      if (!formData.company.trim()) nextErrors.company = "Company is required";
      if (!formData.service.trim())
        nextErrors.service = "Please select a service";
      if (!formData.budget.trim())
        nextErrors.budget = "Please select a budget range";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    log(`Submit attempted (mode="${mode}", email="${formData.email}")`);

    if (!validate()) {
      log(`Validation failed: ${Object.keys(errors).join(", ") || "unknown"}`);
      return;
    }

    const subject =
      mode === "say-hi"
        ? `New message from ${formData.name}`
        : `Quote request from ${formData.company || formData.name}`;

    const bodyLines =
      mode === "say-hi"
        ? [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            "",
            `Message:`,
            formData.message,
          ]
        : [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Company: ${formData.company}`,
            `Service of interest: ${formData.service}`,
            `Budget range: ${formData.budget}`,
            "",
            `Details:`,
            formData.message,
          ];

    const mailto = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    log(`Opening mail client to ${COMPANY_EMAIL}`);
    window.location.href = mailto;

    setFormData(initialFormData);
  };

  return (
    <div className="w-full flex flex-row items-center justify-start">
      <div className="relative w-full lg:w-310 overflow-hidden flex flex-col lg:flex-row items-start justify-start gap-10 pt-10 lg:pt-15 pb-12 lg:pb-20 px-6 sm:px-10 lg:pl-25 bg-theme-gray rounded-[45px]">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col items-start justify-start gap-10 w-full lg:w-139 lg:max-w-139 z-10"
        >
          <div className="flex flex-row items-start justify-start gap-8.75">
            <RadioOption
              label="Say Hi"
              value="say-hi"
              checked={mode === "say-hi"}
              onChange={() => handleModeChange("say-hi")}
            />
            <RadioOption
              label="Get a quote"
              value="get-quote"
              checked={mode === "get-quote"}
              onChange={() => handleModeChange("get-quote")}
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-6.25 w-full">
            <Field
              label="Name"
              placeholder="Name"
              value={formData.name}
              error={errors.name}
              onChange={(v) => handleChange("name", v)}
            />
            <Field
              label="Email*"
              placeholder="Email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={(v) => handleChange("email", v)}
            />

            {mode === "get-quote" && (
              <>
                <Field
                  label="Company"
                  placeholder="Company name"
                  value={formData.company}
                  error={errors.company}
                  onChange={(v) => handleChange("company", v)}
                />
                <SelectField
                  label="Service of interest"
                  value={formData.service}
                  error={errors.service}
                  options={[
                    "Search engine optimization",
                    "Pay-per-click advertising",
                    "Social media marketing",
                    "Email marketing",
                    "Content creation",
                    "Analytics and tracking",
                  ]}
                  onChange={(v) => handleChange("service", v)}
                />
                <SelectField
                  label="Budget range"
                  value={formData.budget}
                  error={errors.budget}
                  options={[
                    "Less than $1,000",
                    "$1,000 - $5,000",
                    "$5,000 - $10,000",
                    "$10,000+",
                  ]}
                  onChange={(v) => handleChange("budget", v)}
                />
              </>
            )}

            <Field
              label={mode === "say-hi" ? "Message*" : "Project details*"}
              placeholder={
                mode === "say-hi"
                  ? "Message"
                  : "Tell us about your project, goals, and timeline"
              }
              value={formData.message}
              error={errors.message}
              multiline
              onChange={(v) => handleChange("message", v)}
            />
          </div>

          <button
            type="submit"
            className="w-full flex flex-row items-center justify-center gap-2.5 pt-5 pb-5 px-8.75 bg-theme-dark rounded-[14px] cursor-pointer transition-all duration-300 hover:bg-theme-green hover:scale-[0.99]"
          >
            <p className="text-white text-xl font-['Space_Grotesk'] text-center leading-7 transition-colors duration-300 hover:text-theme-black">
              {mode === "say-hi" ? "Send Message" : "Request Quote"}
            </p>
          </button>
        </form>

        {/* Illustration pinned to the card's right edge */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <img
            src="static/contact_illustration.png"
            alt="Contact illustration"
            className="w-162 h-162 object-contain object-right"
          />
        </div>
      </div>
    </div>
  );
}