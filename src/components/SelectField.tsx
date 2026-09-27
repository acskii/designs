interface SelectFieldProps {
  label: string;
  value: string;
  error?: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function SelectField({ label, value, error, options, onChange }: SelectFieldProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1.25 w-full">
      <span className="text-theme-black text-base leading-7">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-white border border-solid border-theme-black rounded-[14px] appearance-none px-7.5 py-4.5 text-lg focus:outline-none focus:border-theme-green transition-colors cursor-pointer ${
          value ? "text-theme-black" : "text-[#898989]"
        }`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-theme-black">
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-red-600 text-sm">{error}</span>
      )}
    </div>
  );
}