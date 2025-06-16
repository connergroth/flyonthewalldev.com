import { Button } from "@/components/ui/button";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";

const ProjectShowcase = () => {
  return (
    <section id="project" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">PulsePlan</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Your personal academic co-pilot that intelligently builds and adapts your schedule using real-time data from your assignments, calendars, and personal study habits.
          </p>
          <button className="bg-[#FF6F61] hover:bg-[#FF5A4A] text-white px-8 py-4 text-lg rounded-xl font-medium transition-all duration-300 hover:scale-105">
            Coming Soon
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Feature Cards */}
            <div className="grid gap-6">
              {/* Intelligent Scheduling Card */}
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Academic Scheduling</h3>
                <p className="text-slate-300">
                  Integrates your Canvas assignments, personal tasks, and calendar events to automatically generate your daily and weekly schedule, factoring in deadlines, priorities, workload estimates, and available time.
                </p>
              </div>

              {/* Dynamic Replanning Card */}
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Dynamic Replanning & Adjustments</h3>
                <p className="text-slate-300">
                  Your schedule continuously updates as new assignments arrive, tasks are completed or missed, and real-life changes happen. PulsePlan automatically reshuffles your plan to keep you on track.
                </p>
              </div>

              {/* Multi-Source Sync Card */}
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Multi-Source Data Sync</h3>
                <p className="text-slate-300">
                  Connects directly with Canvas, Google Calendar, Outlook, Apple Calendar, Gmail, Notion, and more, keeping your academic, personal, and extracurricular commitments perfectly in sync.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Mockup */}
          <div className="relative">
            <IPhoneMockup className="w-full max-w-[300px] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 