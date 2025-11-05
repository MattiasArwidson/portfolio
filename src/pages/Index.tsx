import Sidebar from "@/components/Portfolio/Sidebar";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Projects from "@/components/Portfolio/Projects";
import Contact from "@/components/Portfolio/Contact";
import CursorGlow from "@/components/Portfolio/CursorGlow";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <Sidebar />
      
      <main className="lg:ml-64">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
