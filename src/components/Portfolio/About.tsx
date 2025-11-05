const About = () => {
  const skills = [
    "Kotlin", "Jetpack Compose", "Firebase", "React", "TypeScript",
    "Node.js", "PostgreSQL", "REST APIs", "Git", "Agile"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a developer passionate about creating clean, functional applications that solve real problems.
            My journey started with simple learning projects and has evolved to building complex systems like
            NexuHub Campus, a comprehensive social platform for educational institutions.
          </p>
          
          <p>
            I specialize in mobile and web development, with a focus on intuitive user experiences and
            robust backend architecture. Every project I build teaches me something new about crafting
            better software.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border hover:border-primary transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
