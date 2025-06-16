import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      
      <main className="relative">
        <Hero />
        <ProjectShowcase />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;