import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Early Learning App 1",
      description: "My first programming project - a simple calculator application",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      techStack: ["HTML", "CSS", "JavaScript"],
      detailedDescription: "This was my introduction to programming. Built a basic calculator that performs arithmetic operations. Learned fundamental concepts like variables, functions, and DOM manipulation.",
    },
    {
      title: "Early Learning App 2",
      description: "Interactive todo list with local storage",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      techStack: ["React", "TypeScript", "Local Storage"],
      detailedDescription: "Explored React fundamentals by building a todo list app. Implemented CRUD operations and learned about component lifecycle and state management.",
    },
    {
      title: "Early Learning App 3",
      description: "Weather app using public APIs",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      techStack: ["React", "REST API", "Tailwind CSS"],
      detailedDescription: "First project working with external APIs. Fetches weather data and displays forecasts. Learned about async operations, error handling, and responsive design.",
    },
    {
      title: "Intermediate App",
      description: "Full-stack blog platform with authentication",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      detailedDescription: "Built a complete blog platform with user authentication, post creation, comments, and likes. Implemented RESTful API design, authentication middleware, and database relationships. This project solidified my understanding of full-stack development.",
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "NexuHub Campus",
      description: "Advanced social media platform for students and educational institutions",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      techStack: [
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "Cloud Firestore",
        "Firebase Auth",
        "Material Design 3",
        "Coroutines",
        "Flow",
      ],
      isFeatured: true,
      detailedDescription: `NexuHub Campus is a comprehensive social networking platform designed specifically for educational institutions. 

Key Features:
• Real-time messaging and group chats for students and staff
• Event management system with calendar integration
• Academic resource sharing and collaboration tools
• News feed with department-specific content filtering
• Role-based access control (Students, Teachers, Administrators)
• Push notifications for important updates
• Offline-first architecture with sync capabilities

Technical Highlights:
• Clean architecture with MVVM pattern
• Dependency injection using Hilt
• Custom UI components following Material Design 3 guidelines
• Efficient image loading and caching
• Real-time updates using Firebase listeners
• Comprehensive error handling and user feedback
• Security rules for data protection

This project represents my most complex work to date, handling real-time data, complex user interactions, and scalable architecture patterns.`,
      links: {
        github: "#",
        demo: "#",
      },
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h2>
        <p className="text-xl text-muted-foreground mb-12">
          A journey from beginner to advanced development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
