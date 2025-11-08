import ProjectCard from "./ProjectCard";
import basecampLogo from "@/assets/basecamp_logo.png";

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
      title: "Basecamp",
      description: "Multi-User Room Reservation & Session Management System",
      images: [basecampLogo, basecampLogo, basecampLogo, basecampLogo],
      techStack: ["Kotlin", "Firebase", "Android", "Room Database", "MVVM", "Material Design"],
      detailedDescription: `Basecamp was the next step after Swippers, moving from single-user logic to multi-user and enterprise-level architecture. It's an Android application that handles company-wide room reservations, session management, and multiple categories using Kotlin, Firebase, and Room Database.

The project was developed in a team, where I handled data flow, authentication, and Room–Firestore integration. Our reference client was XIOR, and the app scaled into a global booking system adaptable for any company.

Key Learnings:
• Room & Firestore Integration: Combined offline and online data persistence for a seamless experience
• Authentication Handling: Implemented user sessions, profiles, and security with Firebase Auth
• Team Collaboration: Built features collaboratively using shared Git workflows and modularized Kotlin code
• Enterprise Logic: Structured apps for larger organizations with categories, roles, and data flows
• Scalable Design: Focused on patterns allowing any company to adapt the platform easily

Foundation for Future Projects:
The architectural and database patterns used here evolved directly into NexuHub Campus. This is where I established MVVM structure, modularized logic, and professional collaboration patterns that now define my development standards.`,
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
