const About = () => {
  const skills = [
    "Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "React Native",
    "Firebase", "GitHub", "C++", "HTML", "Figma",
    "UI/UX Design", "Trello", "Notion", "AI Integration"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a UI/UX designer and programmer who combines technical skills with a decade of pedagogical experience. 
            After years of teaching extreme sports and designing learning experiences, I've returned to my passion for 
            programming with fresh perspective on how users think and learn.
          </p>
          
          <p>
            Currently studying iPhone and Android development at Malmö YH, I specialize in creating intuitive, 
            user-centered applications. My background in communication and teaching gives me a unique advantage in 
            UX design—I understand how to guide users naturally through complex interfaces. During my internship, 
            I led project management and productivity while being responsible for UX, navigation, database and code structure.
          </p>

          <p>
            I'm curious, self-motivated, and eager to learn every aspect of the development process. My goal is simple: 
            build applications that feel effortless to use.
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
