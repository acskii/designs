import SocialIcon from "../components/SocialIcon";
import { LuExternalLink } from "react-icons/lu";

export default function Footer({}) {
  return (
    <div className="w-full lg:pl-25 lg:pr-25">
      <div className="w-full flex flex-col items-start justify-start gap-12.5 pt-13.75 pb-12.5 px-10 lg:px-15 bg-theme-dark rounded-tl-[45px] rounded-tr-[45px] rounded-bl-none rounded-br-none">
        <div className="w-full flex flex-col items-start justify-start gap-16.5">
          {/* Top row */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-10">
            <img
              className="invert w-45 h-auto shrink-0"
              src="static/logo.png"
            />

            <nav className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
              <a
                    href="#"
                    className="text-white text-nowrap text-[18px] hover:text-theme-green transition-colors"
                >
                    About us
                </a>
                <a
                    href="#"
                    className="text-white text-nowrap text-[18px] hover:text-theme-green transition-colors"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="text-white text-nowrap text-[18px] hover:text-theme-green transition-colors"
                >
                    Use Cases
                </a>
                <a
                    href="#"
                    className="text-white text-nowrap text-[18px] hover:text-theme-green transition-colors"
                >
                    Pricing
                </a>
                <a
                    href="#"
                    className="text-white text-nowrap text-[18px] hover:text-theme-green transition-colors"
                >
                    Blog
                </a>
            </nav>

            <div className="flex gap-5">
              <SocialIcon social="LinkedIn" />
              <SocialIcon social="Facebook" />
              <SocialIcon social="Twitter" />
            </div>
          </div>

          {/* Middle row*/}
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10">
            <div className="flex flex-col items-start justify-start gap-6.75">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-2.5 px-1.75 bg-theme-green rounded-[7px]">
                  <span className="text-theme-black text-xl text-left font-medium">
                    Contact us:
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-white text-lg font-['Space_Grotesk'] text-left">
                  Email: {"info@positivus.com"}
                </span>
                <span className="text-white text-lg font-['Space_Grotesk'] text-left">
                  Phone: {"555-567-8901"}
                </span>
                <span className="text-white text-lg font-['Space_Grotesk'] text-left whitespace-pre-line">
                  {"Address: 1234 Main St\nMoonstone City, Stardust State 12345"}
                </span>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 pt-8 sm:pt-14.5 pb-8 sm:pb-14.5 px-6 sm:px-10 bg-[#292A32] rounded-[14px]">
              <div className="flex items-start justify-start gap-2.5 pt-5 pb-5.5 px-8.75 border border-solid border-white rounded-[14px]">
                <input
                  type="email"
                  placeholder={"Email"}
                  className="w-full bg-transparent text-white text-sm md:text-lg placeholder:text-white focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="flex items-start justify-center gap-2.5 pt-5 pb-5 px-8.75 bg-theme-green rounded-[14px] cursor-pointer"
              >
                <p className="text-black text-md md:text-xl md:text-nowrap">
                  {"Subscribe to news"}
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col items-start justify-start gap-12.5">
          <div className="w-full h-0 border-b border-solid border-white" />
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-10">
            <span className="text-white text-lg">
              © 2026 Andrew Sameh
            </span>
            <a
              href="https://www.github.com/acskii/design"
              className="flex items-center justify-center gap-2 text-white text-lg hover:text-theme-green transition-colors"
            >
              GitHub
              <LuExternalLink size={20} />
            </a>

            <a
              href="https://portfolio-livid-mu-57.vercel.app/"
              className="flex items-center justify-center gap-2 text-white text-lg hover:text-theme-green transition-colors"
            >
              Portfolio
              <LuExternalLink size={20} />
            </a>

            <a
              href="https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design"
              className="flex items-center justify-center gap-2 text-white text-lg hover:text-theme-green transition-colors"
            >
              Template
              <LuExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}