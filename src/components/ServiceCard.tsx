import { LuArrowUpRight } from "react-icons/lu";

type CardBg = "light" | "lime" | "dark";
type TitleBg = "green" | "white";

interface ServiceCardProps {
  bg: CardBg;
  titleLines: string[];
  illustrationSrc: string;
  illustrationAlt?: string;
  illustrationClassName?: string;
  titleBg?: TitleBg;
  showTitleBackground?: boolean;
}

const bgStyles: Record<CardBg, string> = {
  light: "bg-theme-gray",
  lime: "bg-theme-green",
  dark: "bg-theme-dark",
};

const titleBgStyles: Record<TitleBg, string> = {
  green: "bg-theme-green",
  white: "bg-white",
};

export default function ServiceCard({
  bg,
  titleLines,
  illustrationSrc,
  illustrationAlt = "Illustration placeholder",
  titleBg = "green",
  showTitleBackground = true,
}: ServiceCardProps) {
  const isDark = bg === "dark";

  return (
    <div
      className={`w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-19.25 p-6 sm:p-10 lg:p-12.5 ${bgStyles[bg]} border border-solid border-theme-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] overflow-hidden`}
    >
      <div className="flex flex-col items-start justify-start gap-10 sm:gap-23.25">
        <div className="flex flex-col items-start justify-start">
          {titleLines.map((line, i) => (
            <div
              key={i}
              className={`text-nowrap flex flex-col items-start justify-start gap-2.5 px-1.75 rounded-[7px] ${
                showTitleBackground ? titleBgStyles[titleBg] : ""
              }`}
            >
              <span className="text-black font-semibold text-[22px] sm:text-[26px] lg:text-[30px]">
                {line}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-start gap-3.75">
          <div className={`rounded-full ${isDark ? "bg-white" : "bg-theme-black"}`}>
            <LuArrowUpRight
              size={30}
              className={isDark ? "text-black" : "text-theme-green"}
            />
          </div>
          <span
            className={`text-xl ${
              isDark ? "text-white" : "text-theme-black"
            }`}
          >
            Learn more
          </span>
        </div>
      </div>
      <div className="shrink-0 self-center sm:self-auto">
        <img
          src={illustrationSrc}
          alt={illustrationAlt}
          className="w-32 sm:w-40 lg:w-auto h-auto"
        />
      </div>
    </div>
  );
}