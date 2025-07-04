import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AppleLogo } from "@/components/ui/AppleLogo";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  
  const images = [
    "/images/demo1.png",
    "/images/demo2.png", 
    "/images/demo3.png"
  ];



  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(index));
            resolve();
          };
          img.src = src;
        });
      });
      
      await Promise.all(promises);
      setIsLoading(false);
    };
    
    preloadImages();
  }, []);

  // Simple auto-advance carousel that starts after images load
  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isLoading, images.length]);

  return (
    <section 
      ref={sectionRef}
      id="project" 
      className="py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.div 
            className="flex justify-center items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img 
              src="/images/pulse.png" 
              alt="PulsePlan Logo" 
              className="w-12 h-12"
            />
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              <span className="bg-white text-transparent bg-clip-text">
                PulsePlan
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Your personal academic co-pilot that intelligently builds and adapts your schedule using real-time data from your assignments, calendars, and personal study habits.
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <a href="#" className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-slate-200 transition-all duration-500 ease-out transform hover:scale-105 group">
              <AppleLogo className="w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5 transition-transform duration-500 ease-out group-hover:scale-110" />
              <span className="text-xs sm:text-sm md:text-base transition-all duration-500 ease-out">Download on the App Store</span>
            </a>
            <a href="https://pulseplan.app" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-medium rounded-lg transition-all duration-500 ease-out transform hover:scale-105 group">
              <span className="transition-all duration-500 ease-out">Learn More</span>
              <ArrowUpRight className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Feature Cards */}
            <div className="grid gap-6">
              {/* Intelligent Scheduling Card */}
              <motion.div 
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Academic Scheduling</h3>
                <p className="text-slate-300">
                  Integrates your Canvas assignments, personal tasks, and calendar events to automatically generate your daily and weekly schedule, factoring in deadlines, priorities, workload estimates, and available time.
                </p>
              </motion.div>

              {/* Dynamic Replanning Card */}
              <motion.div 
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Dynamic Replanning & Adjustments</h3>
                <p className="text-slate-300">
                  Your schedule continuously updates as new assignments arrive, tasks are completed or missed, and real-life changes happen. PulsePlan automatically reshuffles your plan to keep you on track.
                </p>
              </motion.div>

              {/* Multi-Source Sync Card */}
              <motion.div 
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Multi-Source Data Sync</h3>
                <p className="text-slate-300">
                  Connects directly with Canvas, Google Calendar, Outlook, Apple Calendar, Gmail, Notion, and more, keeping your academic, personal, and extracurricular commitments perfectly in sync.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right side - Optimized Animated App Mockup */}
          <motion.div 
            className="flex-1 w-full max-w-md mx-auto lg:mx-0 relative h-[650px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              scale: [0.8, 1.05, 1],
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          >
            {isLoading && (
              <div className="absolute inset-0 bg-slate-800/30 rounded-2xl flex items-center justify-center">
                <div className="text-slate-400 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-600 border-t-slate-400 rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </div>
              </div>
            )}

            {loadedImages.has(currentImageIndex) && (
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${images[currentImageIndex]}-${currentImageIndex}`}
                  src={images[currentImageIndex]}
                  alt={`PulsePlan demo ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.98 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeInOut" as const
                  }}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
              </AnimatePresence>
            )}


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 