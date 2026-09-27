import { useEffect, useRef, useState } from "react";

interface LogoCarouselProps {
  logos: string[];
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Duplicate the array so we can loop seamlessly
  const loopedLogos = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId: number;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!isPaused && track) {
        track.scrollLeft += speed;

        // When we've scrolled past the first full set, reset to 0
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <div
      className="w-full px-6 sm:px-10 lg:px-25 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="w-full flex flex-row items-center gap-12 sm:gap-20 lg:gap-25 overflow-x-hidden scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedLogos.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`Company logo ${(i % logos.length) + 1}`}
            className="shrink-0 h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}