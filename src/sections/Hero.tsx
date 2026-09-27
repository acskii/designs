

export default function Hero() {
    return (
        <header className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 px-6 sm:px-10 lg:px-25">
            <div className="flex flex-col items-start justify-start gap-8.75 max-w-full lg:max-w-150">
                <h1 className="text-theme-black text-3xl sm:text-4xl lg:text-[60px] font-medium leading-tight">
                    Navigating the digital landscape for success
                </h1>
                <p className="text-theme-black text-base sm:text-lg lg:text-xl leading-7">
                    Our digital marketing agency helps businesses grow and succeed online
                    through a range of services including SEO, PPC, social media
                    marketing, and content creation.
                </p>
                <button
                    type="button"
                    className="flex flex-row items-start justify-start gap-2.5 pt-5 pb-5 px-8.75 bg-theme-dark rounded-[14px] cursor-pointer transition-all duration-300 hover:bg-theme-green hover:scale-[0.99]"
                >
                <p className="text-white text-lg sm:text-xl text-center leading-7 transition-colors duration-300 hover:text-theme-black">
                    Book a consultation
                </p>
                </button>
            </div>

            <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end">
                <img
                    src="static/hero_illustration.png"
                    alt="Hero illustration"
                    className="block w-full max-w-128.75 h-auto object-contain"
                />
            </div>
        </header>
    );
}