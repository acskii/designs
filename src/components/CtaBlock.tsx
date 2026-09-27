interface CtaBlockProps {
  heading: string;
  description: string;
  buttonLabel: string;
  imgSrc: string;
  imgAlt?: string;
  onButtonClick: () => void;
}

export default function CtaBlock({ heading, description, buttonLabel, imgSrc, imgAlt = "CTA illustration", onButtonClick }: CtaBlockProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full min-h-86.75 flex gap-8 lg:gap-68.75 px-6 sm:px-15 py-10 lg:py-0 bg-theme-gray rounded-[45px] overflow-hidden">
        <div className="w-full flex flex-col justify-center gap-6.5 max-w-full lg:max-w-125 z-10">
          <p className="text-theme-black text-2xl sm:text-[30px] font-medium">
            {heading}
          </p>
          <p className="text-theme-black text-base sm:text-lg">
            {description}
          </p>
          <button
            type="button"
            onClick={onButtonClick}
            className="pt-5 pb-5 px-8.75 bg-theme-dark rounded-[14px] text-center cursor-pointer transition-all duration-300 hover:bg-theme-green hover:scale-[0.98]"
          >
            <p className="text-white text-lg sm:text-xl transition-colors duration-300 hover:text-theme-black">
              {buttonLabel}
            </p>
          </button>
        </div>

        <img
          src={imgSrc}
          alt={imgAlt}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}