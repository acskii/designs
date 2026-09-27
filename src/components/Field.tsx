interface FieldProps {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  multiline?: boolean;
  onChange: (value: string) => void;
}

export default function Field({
  label,
  placeholder,
  value,
  error,
  type = "text",
  multiline = false,
  onChange,
}: FieldProps) {
  const baseInputClasses =
    "w-full bg-white border border-solid border-theme-black rounded-[14px] px-[30px] text-lg text-theme-black placeholder:text-[#898989] focus:outline-none focus:border-theme-green transition-colors";

  return (
    <div className="flex flex-col items-start justify-start gap-1.25 w-full">
      <span className="text-theme-black text-base leading-7">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={6}
          className={`${baseInputClasses} py-4.5 resize-none min-h-47.5`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseInputClasses} py-4.5`}
        />
      )}
      {error && (
        <span className="text-red-600 text-sm">{error}</span>
      )}
    </div>
  );
}