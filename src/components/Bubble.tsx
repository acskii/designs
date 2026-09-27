interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

interface BubbleProps {
  testimonial: Testimonial;
  isActive: boolean;
}

export default function Bubble({ testimonial, isActive }: BubbleProps) {
  return (
    <div
      className={`shrink-0 w-full sm:w-125 lg:w-151.5 flex flex-col items-start justify-start gap-5 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-60"
      }`}
    >
      <div className="relative w-full min-h-55 sm:min-h-64 rounded-[30px] border border-solid border-theme-green p-6 sm:p-10 lg:p-13">
        <p className="text-white text-sm sm:text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -bottom-3.5 left-12 w-7 h-7 rotate-45 bg-theme-dark border-b border-r border-solid border-theme-green" />
      </div>
      <div className="pl-6 sm:pl-10 lg:pl-13">
        <p className="text-theme-green text-base sm:text-xl font-medium">
          {testimonial.name}
        </p>
        <p className="text-white text-sm sm:text-lg">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}