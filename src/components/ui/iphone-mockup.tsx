import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/animation-configs";

const screenshots = [
  { src: "/assets/dashboard.png", alt: "Dashboard View" },
  { src: "/assets/week.png", alt: "Weekly Schedule" },
  { src: "/assets/insights.png", alt: "Insights and Analytics" }
];

const INITIAL_DELAY = 2000; // 2 seconds initial delay
const SLIDE_INTERVAL = 4000; // 4 seconds between slides

interface IPhoneMockupProps {
  className?: string;
}

// Optimized slide variants for better performance
const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(2px)",
  },
};

export const IPhoneMockup = ({ className }: IPhoneMockupProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      screenshots.forEach((screenshot) => {
        const img = new Image();
        img.src = screenshot.src;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    // Initial delay before starting the slideshow
    const initialTimer = setTimeout(() => {
      setIsSlideshowActive(true);
    }, INITIAL_DELAY);

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  useEffect(() => {
    if (!isSlideshowActive) return;

    const slideshowTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [isSlideshowActive]);

  // Memoize current screenshot to prevent unnecessary re-renders
  const currentScreenshot = useMemo(() => screenshots[currentSlide], [currentSlide]);

  return (
    <div className={cn("relative mx-auto w-[300px] h-[600px]", className)}>
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl will-change-transform">
        {/* Screen Area */}
        <div className="absolute inset-[3px] bg-background rounded-[2.8rem] overflow-hidden">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-full z-20" />
          
          {/* Screen Content - Full Screen */}
          <div className="w-full h-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  ...transitions.smooth,
                  duration: 0.5,
                }}
                className="w-full h-full object-cover will-change-transform"
                loading="eager"
                decoding="async"
              />
            </AnimatePresence>

            {/* Optimized Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
              {screenshots.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-200 will-change-transform",
                    currentSlide === index 
                      ? 'bg-white w-6 shadow-lg' 
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={transitions.fast}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full" />
      </div>
    </div>
  );
}; 