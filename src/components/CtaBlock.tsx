interface CtaBlockProps {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
  onButtonClick?: () => void;
}

export default function CtaBlock({
  heading = "Let's make things happen",
  description = "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  buttonLabel = "Get your free proposal",
  illustrationSrc = "https://picsum.photos/id/359/394",
  illustrationAlt = "CTA illustration",
  onButtonClick,
}: CtaBlockProps) {
  return (
    <div className="w-full flex flex-row items-center justify-start">
      <div className="relative w-full lg:w-310 min-h-86.75 flex flex-row items-center justify-start gap-8 lg:gap-68.75 px-6 sm:px-15 py-10 lg:py-0 bg-theme-gray rounded-[45px] overflow-hidden">
        <div className="flex flex-col items-start justify-start gap-6.5 max-w-full lg:max-w-125 z-10">
          <p className="text-theme-black text-2xl sm:text-[30px] font-medium">
            {heading}
          </p>
          <p className="text-theme-black text-base sm:text-lg">
            {description}
          </p>
          <button
            type="button"
            onClick={onButtonClick}
            className="flex flex-row items-start justify-start gap-2.5 pt-5 pb-5 px-8.75 bg-theme-dark rounded-[14px] cursor-pointer transition-all duration-300 hover:bg-theme-green hover:scale-[0.98]"
          >
            <p className="text-white text-lg sm:text-xl text-center leading-7 transition-colors duration-300 hover:text-theme-black">
              {buttonLabel}
            </p>
          </button>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-center">
          <img
            src={illustrationSrc}
            alt={illustrationAlt}
            className="block w-98.5 h-98.5"
          />
        </div>
      </div>
    </div>
  );
}