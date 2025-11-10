const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Hi, I'm Mattias Arwidson
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12 font-light">
          Building intuitive apps with a teacher's eye for user experience
        </p>
        <button
          onClick={scrollToProjects}
          className="group relative px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
        >
          <span className="relative z-10">View My Applications</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
