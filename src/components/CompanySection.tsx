import React, { memo } from 'react';
import ModernTechGrid from '@/components/ModernTechGrid';
import { motion } from "framer-motion";
import { animations } from '@/lib/animation-configs';

// Simple variants for non-card elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CompanySection: React.FC = memo(() => {
  return (
    <div className="relative">
      {/* Modern Tech Grid Background */}
      <ModernTechGrid />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 md:py-32 px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              We build AI productivity tools
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are a small, student-led startup passionate about leveraging artificial intelligence 
              to solve real-world problems. Our focus is on creating intuitive, powerful tools that 
              enhance productivity and streamline complex workflows.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We believe in building with craft, care, and a healthy dose of creative chaos.
            </p>
          </motion.div>

          {/* Values indicators */}
          <motion.div className="pt-12" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
                <span>AI System Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow"></div>
                <span>Agentic Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-glow"></div>
                <span>Real-World Impact</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

CompanySection.displayName = 'CompanySection';

export default CompanySection;
