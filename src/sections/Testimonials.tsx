import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import Bubble from "../components/Bubble";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

interface TestamonialsProps {
    testimonials: Testimonial[];
}

export default function Testamonials({ testimonials } : TestamonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const goTo = (index: number) => {
    const next = (index + total) % total;
    setActiveIndex(next);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  // Autoplay carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Scroll the active bubble into view
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[activeIndex] as HTMLElement | undefined;
    if (target) {
      track.scrollTo({
        left: target.offsetLeft - 16,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full lg:w-310 h-auto lg:h-156.25 relative bg-theme-dark rounded-[45px] overflow-hidden py-10 lg:py-0">
        <div
          className="flex flex-col items-center justify-center gap-20 w-full h-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Bubbles track */}
          <div
            ref={trackRef}
            className="w-full flex flex-row items-start justify-start gap-8 lg:gap-12 overflow-x-auto scroll-smooth pt-16 lg:pt-20 px-6 lg:px-20 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <Bubble
                key={t.id}
                testimonial={t}
                isActive={i === activeIndex}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="w-full max-w-141 flex flex-row items-center justify-between px-6 lg:px-0 gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="text-white/60 hover:text-theme-green transition-colors cursor-pointer"
            >
              <LuArrowLeft size={24} />
            </button>

            <div className="flex flex-row items-center justify-center gap-3 flex-1">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === activeIndex}
                  className={`w-3.5 h-3.5 transition-colors cursor-pointer ${
                    i === activeIndex ? "bg-theme-green" : "bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="text-white hover:text-theme-green transition-colors cursor-pointer"
            >
              <LuArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}