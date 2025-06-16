import { Button } from "@/components/ui/button";
import { AnimatedFly } from "@/components/AnimatedFly";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="grid gap-6 text-center max-w-4xl mx-auto px-6 -mt-28">
        {/* Animated Fly */}
        <div className="relative mx-auto">
          <AnimatedFly />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Quietly building
          <br />
          <span className="text-[#FF6F61]">
            loud ideas
          </span>
        </h1>

        {/* Company Description */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A student-led startup building AI-powered tools that solve real problems — 
          with craft, care, and a little chaos.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#project">
            <Button 
              size="lg" 
              className="bg-[#FF6F61] hover:bg-[#FF5A4A] text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              See Our Work
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 text-lg font-medium rounded-xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              Follow the Buzz
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 inset-x-0 flex justify-center animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero; 