import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    return (
        <nav className="w-full flex flex-row items-center justify-between gap-4 py-5">
            <img
              className="w-45 h-auto shrink-0"
              src="static/logo.png"
            />

            <section className="hidden lg:flex justify-center items-center gap-10">
                <a
                    href="#"
                    className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                >
                    About us
                </a>
                <a
                    href="#"
                    className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                >
                    Use Cases
                </a>
                <a
                    href="#"
                    className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                >
                    Pricing
                </a>
                <a
                    href="#"
                    className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                >
                    Blog
                </a>
                <button
                    type="button"
                    className="text-[20px] px-8.75 py-5 border border-solid border-theme-dark rounded-[14px] text-theme-black eading-7 cursor-pointer hover:bg-theme-dark hover:text-white transition-colors"
                >
                    Request a quote
                </button>
            </section>

            <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
            >
                <span
                className={`block w-6 h-0.5 bg-theme-black transition-transform ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
                />
                <span
                className={`block w-6 h-0.5 bg-theme-black transition-opacity ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                />
                <span
                className={`block w-6 h-0.5 bg-theme-black transition-transform ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
                />
            </button>

            {/* Mobile drawer */}
            {isMenuOpen && (
                <div className="w-[35%] absolute top-40 right-0 z-20 lg:hidden bg-white border border-theme-dark">
                    <div className="flex flex-col items-center gap-5 px-6 py-6">
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                        >
                            About us
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                        >
                            Use Cases
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-theme-black text-[20px] leading-7 hover:text-theme-green transition-colors"
                        >
                            Blog
                        </a>
                        <button
                            type="button"
                            className="w-full text-[20px] px-8.75 py-5 border border-solid border-theme-dark rounded-[14px] text-theme-black eading-7 cursor-pointer hover:bg-theme-dark hover:text-white transition-colors"
                        >
                            Request a quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}