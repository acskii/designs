interface RadioOptionProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

export default function RadioOption({ label, value, checked, onChange }: RadioOptionProps) {
  return (
    <label className="flex flex-row items-center gap-2.5 cursor-pointer select-none">
      <span
        className={`w-6 h-6 rounded-full border-2 border-theme-black flex items-center justify-center transition-colors ${
          checked ? "bg-theme-green" : "bg-white"
        }`}
      >
        {checked && <span className="w-2.5 h-2.5 rounded-full bg-theme-black" />}
      </span>
      <input
        type="radio"
        name="contact-mode"
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-theme-black text-lg">{label}</span>
    </label>
  );
}