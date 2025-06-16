const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Meet the Team</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Conner</h3>
            <p className="text-[#FF6F61] font-medium mb-4">Full-Stack Developer</p>
            <p className="text-slate-300 leading-relaxed">
              Computer Science student @ CU Boulder, Synthetic Biology Software Research Assistant, and SWE Team Lead.
            </p>
          </div>

          <div className="group bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Isaias</h3>
            <p className="text-[#FF6F61] font-medium mb-4">Full-Stack Developer</p>
            <p className="text-slate-300 leading-relaxed">
              Computer Science student @ CU Boulder and Machine Learning Research Assistant.
            </p>
          </div>

          <div className="group bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Jake</h3>
            <p className="text-[#FF6F61] font-medium mb-4">Legal + Product Strategy</p>
            <p className="text-slate-300 leading-relaxed">
              Pre-Law student @ Liberty, Legal Intern.
            </p>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Team; 