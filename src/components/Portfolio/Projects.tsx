import ProjectCard from "./ProjectCard";
import basecampLogo from "@/assets/basecamp_logo.png";
import wakeTricksIcon from "@/assets/wake_tricks_icon.png";
import wakeTricksScreen1 from "@/assets/wake_tricks_screenshot_1.png";
import wakeTricksScreen2 from "@/assets/wake_tricks_screenshot_2.png";
import wakeTricksScreen3 from "@/assets/wake_tricks_screenshot_3.png";
import wakeTricksScreen4 from "@/assets/wake_tricks_screenshot_4.png";
import wakeTricksScreen5 from "@/assets/wake_tricks_screenshot_5.png";
import wakeTricksScreen6 from "@/assets/wake_tricks_screenshot_6.png";
import wakeTricksScreen7 from "@/assets/wake_tricks_screenshot_7.png";
import placeholderIcon from "@/assets/placeholder_app_icon.png";

const Projects = () => {
  const projects = [
    {
      title: "Wake Tricks",
      description: "Cable park wakeboard tricks lexicon app for iOS",
      images: [
        wakeTricksIcon,
        wakeTricksScreen1,
        wakeTricksScreen2,
        wakeTricksScreen3,
        wakeTricksScreen4,
        wakeTricksScreen5,
        wakeTricksScreen6,
        wakeTricksScreen7,
      ],
      techStack: ["Swift", "SwiftUI", "iOS", "Core Data"],
      detailedDescription: "Your cable park wakeboard tricks lexicon app. Complete lexicon of all Cablepark Wakeboard tricks. Add tricks to track progress and create wish lists for training goals.",
    },
    {
      title: "Learning Project",
      description: "Early development project",
      images: [placeholderIcon, placeholderIcon, placeholderIcon],
      techStack: ["React", "TypeScript"],
      detailedDescription: "Early learning project exploring fundamental programming concepts and application development.",
    },
    {
      title: "Basecamp",
      description: "Multi-User Room Reservation & Session Management System",
      images: [basecampLogo, basecampLogo, basecampLogo, basecampLogo],
      techStack: ["Kotlin", "Firebase", "Android", "Room Database", "MVVM", "Material Design"],
      detailedDescription: `This project was created by a team of 5 developers. It's an Android application that handles company-wide room reservations, session management, and multiple categories using Kotlin, Firebase, and Room Database.

I handled data flow, authentication, and Room–Firestore integration. Our reference client was XIOR, and the app scaled into a global booking system adaptable for any company.

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
      description: "Educational Platform & Multi-Role Data Management System",
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
        "Firebase Firestore",
        "Firebase Auth",
        "Firebase Storage",
        "MVVM Architecture",
        "Material Design",
      ],
      isFeatured: true,
      detailedDescription: `NexuHub Campus is a digital education platform designed to unify learning material, schedules, profiles, and user-generated content—such as news, wiki posts, and communication—into one cohesive system.

Developed in Kotlin with Jetpack Compose as the frontend framework and Firebase as the backend, the platform supports multiple user roles, real-time updates, and secure access through Firestore, Firebase Auth, and Firebase Storage.

The app is built to serve as an adaptable foundation for schools, universities, and training organizations. It provides a structured environment where students and teachers can interact dynamically, share knowledge, and stay synchronized through real-time data and modular design.

Key Features:
• Multi-Role System: Dynamic UI rendering based on user role (Guest, Student, Class Rep, Teacher, Admin, Super Admin)
• Secure Authentication: Email verification and role-based permission control via Firestore Security Rules
• Real-Time Communication: Integrated chat and collaboration powered by Firestore's live listeners
• Modular Database Design: Scalable data structure for multi-school and multi-class environments with isolated "biomes"
• Media Management: Dedicated storage handled via Firebase Storage for efficiency and security

Core Systems:
• News Feed: Combined internal school updates with external tech/education insights using asynchronous Firestore listeners
• Wiki Feed: Collaborative knowledge base with tag-based categorization, version control, and real-time synchronization
• Navigation System: Rebuilt using Jetpack Compose Navigation 3 for state-driven navigation and improved UX

Security Architecture:
Each school and class context is isolated to prevent unauthorized access. Role-based visibility, context-aware profiles tied to SchoolID and ClassID, and UI that dynamically adapts to user privileges ensure data privacy in educational environments.

Key Learnings:
• Advanced Architecture: Designed modular MVVM structure supporting scalability and clean data separation
• Security by Design: Implemented context-based access with strict Firestore rules and adaptive UI control
• Real-Time Synchronization: Efficient use of asynchronous Firestore listeners for continuous updates
• State-Driven Navigation: Adopted Compose Navigation 3 for improved UX and flow management
• Collaborative Development: Built complex systems within a coordinated team

Foundation for Future Development:
NexuHub Campus represents a milestone project where enterprise-grade concepts met educational application design. Many of the architectural patterns and data-handling principles refined here evolved from Basecamp and have since become my standard for modern Android development.`,
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
