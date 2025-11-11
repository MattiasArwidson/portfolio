import ProjectCard from "./ProjectCard";
import basecampLogo from "@/assets/basecamp_logo.png";
import basecampScreen1 from "@/assets/basecamp_screenshot_forum_sub-tab.png";
import basecampScreen2 from "@/assets/basecamp_screenshot_forum_messages_user.png";
import basecampScreen3 from "@/assets/basecamp_screenshot_forum_sub-tab.png";
import wakeTricksIcon from "@/assets/wake_tricks_icon.png";
import wakeTricksScreen1 from "@/assets/wake_tricks_screenshot_1.png";
import wakeTricksScreen2 from "@/assets/wake_tricks_screenshot_2.png";
import wakeTricksScreen3 from "@/assets/wake_tricks_screenshot_3.png";
import wakeTricksScreen4 from "@/assets/wake_tricks_screenshot_4.png";
import wakeTricksScreen5 from "@/assets/wake_tricks_screenshot_5.png";
import wakeTricksScreen6 from "@/assets/wake_tricks_screenshot_6.png";
import wakeTricksScreen7 from "@/assets/wake_tricks_screenshot_7.png";
import nexuhubLogo from "@/assets/nexuhub_development_logo_light.png";
import nexuhubScreen1 from "@/assets/nexuhub_development_screenshot_as_classprofile.png";
import nexuhubScreen2 from "@/assets/nexuhub_development_screenshot_as_classrequestsettings.png";
import nexuhubScreen3 from "@/assets/nexuhub_development_screenshot_as_editclass.png";
import nexuhubScreen4 from "@/assets/nexuhub_development_screenshot_as_editschool.png";
import nexuhubScreen5 from "@/assets/nexuhub_development_screenshot_as_globalpromotionsettings.png";
import nexuhubScreen6 from "@/assets/nexuhub_development_screenshot_as_manageclassusers.png";
import nexuhubScreen7 from "@/assets/nexuhub_development_screenshot_as_manageschooladmins.png";
import nexuhubScreen8 from "@/assets/nexuhub_development_screenshot_as_newsfeed.png";
import nexuhubScreen9 from "@/assets/nexuhub_development_screenshot_as_schooladminrequestsettings.png";
import nexuhubScreen10 from "@/assets/nexuhub_development_screenshot_as_schoolselect.png";
import nexuhubScreen11 from "@/assets/nexuhub_development_screenshot_as_wiki.png";
import nexuhubFigma1 from "@/assets/nexuhub_development_screenshot_figma_bottombar_multicolor.png";
import nexuhubFigma2 from "@/assets/nexuhub_development_screenshot_figma_post_multicolor.png";
import nexuhubFigma3 from "@/assets/nexuhub_development_screenshot_figma_schoolicons.png";

const Projects = () => {
  const projects = [
    {
      title: "NexuHub Campus",
      description: "Educational Platform & Multi-Role Data Management System",
      images: [
  nexuhubLogo,
  nexuhubScreen1,
  nexuhubScreen2,
  nexuhubScreen3,
  nexuhubScreen4,
  nexuhubScreen5,
  nexuhubScreen6,
  nexuhubScreen7,
  nexuhubScreen8,
  nexuhubScreen9,
  nexuhubScreen10,
  nexuhubScreen11,
  nexuhubFigma1,
  nexuhubFigma2,
  nexuhubFigma3,
],
      techStack: [
"Kotlin",
"Jetpack Compose",
"Firebase Firestore",
"Firebase Auth",
"Firebase Storage",
"MVVM Architecture",
"Material Design 3",
"Hilt Dependency Injection",
"Navigation 3",
"Kotlin Coroutines",
],
isFeatured: true,
detailedDescription: `NexuHub Campus is a digital education platform that unifies learning materials, schedules, profiles, and user-generated content into one cohesive system.

Developed in Kotlin with Jetpack Compose and Firebase as the backend, the platform supports multiple user roles, real-time updates, and secure access through Firestore, Firebase Auth, and Firebase Storage.

This is an ongoing project developed alongside the Android Development course at Malmö Yrkeshögskola during Spring 2025. The app represents a culmination of concepts and patterns learned throughout the course, combining solutions and systems built across multiple course projects into a unified platform.

**Development Team:** Mattias Arwidson, Joel Westerberg, Johan Asklund

## My Contributions

**Navigation Architecture:** I designed and implemented the complete navigation system using Navigation 3 with type-safe @Serializable routes. The solution uses a hybrid approach: Navigation 3 for complex flows (authentication, settings) and manual state management for main tabs to preserve user position across app restarts. After encountering state-loss issues with traditional Fragment navigation, I migrated to Compose Navigation 3, which improved UX significantly with proper back-stack handling and persistent tab states.

**State Management System:** I built the StateRepository pattern that serves as the central hub for app-state (Loading/Auth/Verify/Main). This architecture ensures only one component monitors Firebase Auth changes, eliminating race conditions that occurred when multiple ViewModels tracked auth state simultaneously. The UserRepository handles user profile data with StateFlow, maintaining clean separation between authentication state and user data using the MVVM pattern.

**Role-Based Permission System:** I implemented a 6-tier role system (Guest → Student → Class Representative → Teacher → School Admin → Super Admin) with 20+ permission-check helper functions in UserProfile.kt for granular access control. The system uses context-aware permissions based on SchoolID/ClassID, with Firestore Security Rules providing server-side validation that mirrors client-side logic. Dynamic UI rendering ensures users only see features they have access to.

**Component Library:** I extracted 15+ reusable UI components following Material Design 3 guidelines, including ProfileCard, DetailCard, BulletListCard, and ProfilePreviewCard. Each component includes comprehensive previews with ThemeProvider and RoleProvider for testing different states. The centralized theme system manages colors, spacing, and typography, allowing design changes to propagate throughout the app from a single source.

**Schedule & Lesson Management:** I built the complete lesson management system including the Lesson data model (supporting dates, topics, links, and media), LessonRepository for CRUD operations, and the full UI flow for viewing, creating, and editing lessons. The system features real-time Firestore listeners for live updates, smart current-lesson detection, and navigation with prev/next buttons that disable appropriately at list boundaries.

**User Request & Promotion System:** I created the request-to-join system where users can request Student/Teacher access to classes or School Admin access to schools. The system implements multi-level defaults (Super Admin → School Admin → Class) and handles pending states with proper UI feedback. Request visibility is controlled by PromotionSettings with validation checks for both user roles and settings before allowing requests.

**Firebase Security Implementation:** I wrote Firestore Security Rules with context-based validation using helper functions (isAuthenticated, hasClassAccess). The authentication flow includes email verification with error handling, and data isolation ensures each school/class maintains separated "biomes" for data integrity.

**Repository Layer:** I implemented 6 repositories (Auth, User, State, School, Class, Lesson) following the Repository Pattern with StateFlow for reactive data flow from repositories to UI. The system uses Hilt for dependency injection and includes robust error handling with user-friendly messages.

## Key Technical Decisions

**Navigation Strategy:** When initial implementation caused state-loss between tab switches, I evaluated three approaches: traditional Navigation Component with fragments, Navigation 3 with type-safe routes, and manual state management with sealed classes. I chose a hybrid solution using Navigation 3 for complex flows and manual state for main tabs, which preserved user position while maintaining type-safe navigation benefits.

**State Management Refactoring:** Multiple components tracking Firebase Auth state simultaneously caused synchronization issues and race conditions. I refactored to a Single Source of Truth pattern where only StateRepository monitors auth changes, with other components observing its StateFlow. This eliminated state sync bugs and simplified the codebase significantly.

**Security Architecture:** The multi-school environment required strict data isolation. Rather than client-side checks only or server-side Firebase Functions, I implemented Firestore Security Rules with SchoolID/ClassID context validation. Helper functions provide server-side validation while UserProfile helper functions handle client-side UI logic, creating a secure, scalable solution without additional backend infrastructure.

**Component Extraction:** UI code duplication across screens made design changes time-consuming. I built a reusable component library in ui.components with comprehensive previews and centralized styling through the theme system. Design changes now propagate from a single source throughout the app.

**Lesson System Caching:** For lesson display and updates, I implemented a hybrid caching strategy: load once and cache in ViewModel, use real-time Firestore listeners when viewing individual lessons (for teacher edits), manual refresh for lesson lists, and clear cache when leaving ClassRoom. This provides fast UX for students while enabling real-time updates when teachers edit during lessons.

## Core Systems

**Multi-Role Management:** Dynamic UI rendering based on user role (Guest, Student, Class Representative, Teacher, School Admin, Super Admin). Each role sees only relevant features and data, with permissions checked both client-side for UX and server-side for security.

**Security Architecture:** Context-aware Firestore Security Rules validate SchoolID/ClassID access. Role-based access control operates at both client and server levels. Email verification is required before platform access. Each school/class maintains isolated "biomes" for data integrity.

**Real-Time Collaboration:** Teachers can update lessons live while students view them using Firestore listeners. The request system allows students and teachers to request class access, with proper pending state management.

**Scalable Database Design:** Modular structure supporting multiple schools and classes with isolated data contexts, ensuring privacy in educational environments.

## Architecture & Technologies

**MVVM Pattern:** Repositories manage data as single sources of truth, ViewModels handle business logic and UI state, and Composables provide pure UI with callback-based interaction. StateFlow enables reactive data flow from repositories to UI.

**Firebase Integration:** Firestore provides real-time database with security rules, Firebase Auth handles email/password authentication with verification flow, Firebase Storage manages media with access control, and Firestore cache supports offline functionality.

**Modern Android Stack:** Jetpack Compose for declarative UI with Material Design 3, Kotlin Coroutines for asynchronous operations, Hilt for dependency injection and modular architecture, Navigation 3 for type-safe navigation with Serializable routes, and StateFlow/Flows for reactive data streams.

**Component System:** 15+ reusable components (ProfileCard, DetailCard, BulletListCard) with centralized theme system controlling colors, spacing, and typography. Comprehensive preview system tests all UI states following Material Design 3 guidelines.

## Key Learnings

**Architecture Patterns:** Learned to design scalable MVVM architecture with clear separation of concerns. Understood when to apply different state management approaches and how to maintain single source of truth in complex applications.

**Navigation Design:** Realized different app sections require different strategies - complex flows work well with Navigation 3, while simpler tab navigation benefits from manual state management.

**Component Thinking:** Developed ability to identify reusable patterns in UI. Learned when component extraction adds value versus when local components are more appropriate.

**Security Implementation:** Gained experience implementing enterprise-grade security with Firestore rules, role-based access control, and context-aware permissions, thinking about security from the start rather than as an afterthought.

**Real-Time Systems:** Mastered asynchronous data synchronization with Firestore listeners, handling edge cases like offline support, conflict resolution, and efficient data updates.

**Team Collaboration:** Worked in a team environment with code reviews, architecture discussions, and shared decision-making. Learned to communicate technical decisions and document architecture patterns.

**State-Driven UI:** Developed understanding of building UI that reacts to state changes, learning to avoid common pitfalls like state duplication and race conditions.

## Project Evolution

NexuHub Campus represents the culmination of concepts refined across multiple projects during the Android Development course at Malmö Yrkeshögskola. Solutions to problems encountered in earlier course projects were integrated into this platform, with architecture patterns around state management, component extraction, and security becoming fundamental to the development approach.

The app is an ongoing project, not finished or published, serving as a practical application of course learnings combined with enterprise-level architectural decisions.

**Project Scale:**
- ~15,000+ lines of Kotlin code
- 40+ Composable components
- 6 distinct user permission levels
- 8 main Firebase collections with subcollections
- 6 data repositories
- 20+ screens and navigation flows

**Team Collaboration:**
The development team consists of three developers, with shared responsibilities including Firebase database design, code reviews, architecture decisions, UI/UX refinements, and testing. Development follows Git-based workflows with feature branches, using Notion for project planning and GitHub for version control.
`,
},
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
      techStack: ["Swift", "SwiftUI", "Firebase Realtime Database", "Firestore", "Firebase Auth", "Firebase Storage", "SwiftData", "iOS"],
      detailedDescription: `Developed in SwiftUI with Firebase as the backend infrastructure, WakeTricks is a comprehensive wakeboarding trick tracker and learning platform designed to solve a critical problem in wakeboarding instruction: coaches cannot demonstrate tricks while teaching. The app serves as both a personal progression tracker for riders and an instant reference tool for coaches, providing structured trick explanations and video demonstrations accessible at the waterfront.

Built as a concept test during a 13-week iOS development course, WakeTricks demonstrates foundational mobile architecture and database design principles that will expand into a full-featured social platform for the wakeboarding community.

## Key Features

**Guest-Friendly Architecture**: The app operates without authentication requirements, allowing immediate access to the complete Trick Lexicon. Sign-in unlocks personalization features including custom trick lists, favorites, and progress tracking.

**Intelligent Filtering System**: Three difficulty levels (Beginner, Intermediate, Advanced) and three trick categories (Surface, Kicker, Rail) enable precise search functionality for both learning progression and coaching reference.

**Wikipedia-Style Navigation**: Clickable glossary terms embedded throughout trick descriptions create an interconnected knowledge base, allowing beginners to understand wakeboarding linguistics without prior knowledge.

**Gamified Progress Tracking**: Three independent progress visualization systems with badge rewards create clear milestone achievements across difficulty levels, motivating continued skill development.

**Integrated Video Learning**: Embedded YouTube demonstrations provide visual reference for trick execution, eliminating the need for coaches to demonstrate physically.

## Core Systems

**Trick Lexicon Database**: Designed with logical ID conventions and normalized data architecture to minimize redundancy. Trick names derive dynamically from glossary components, creating a maintainable single source of truth. The prerequisite system establishes dependency connections between tricks, generating a skill tree that guides users from foundational techniques to advanced combinations.

**Dual-State UI Management**: Context-aware interface rendering adapts between guest and authenticated states, displaying appropriate functionality while preventing stale data persistence across user sessions.

**Hybrid Firebase Architecture**: Strategic separation of concerns across Firebase services—Realtime Database stores the trick lexicon in JSON format enabling AI-assisted bulk data creation, Firestore Database manages user profiles for superior query performance, and Firebase Storage handles dynamic asset delivery allowing post-deployment visual updates.

## Technical Architecture

The modular database design implements a prerequisite dependency system where complex tricks reference their component skills. This creates an intuitive progression path, showing riders which foundational tricks they need to master before attempting advanced maneuvers, while also revealing advanced tricks that build upon skills they already possess.

SwiftData provides efficient local persistence, reducing network dependency for core functionality. Firebase Auth handles user authentication with minimal friction, while the separation of Realtime Database and Firestore Database optimizes for their respective strengths—bulk JSON manipulation versus structured querying.

## Key Learnings

**State Management Complexity**: Implementing dual authentication states across multiple navigation tabs required careful consideration of data flow and UI synchronization. Preventing cached user data from displaying to subsequent users demanded explicit state clearing mechanisms.

**Data Architecture Design**: Constructing a logical ID system and prerequisite dependency graph required balancing data normalization with query performance. Deriving trick names from glossary components reduced redundancy while maintaining flexibility.

**Mock Data Strategy**: Creating comprehensive mock data sets enabled UI development independent of backend availability and provided realistic preview environments during development.

**Code Organization**: First exposure to separating concerns across view models, data models, and service layers established patterns for maintainable architecture.

**Strategic Technology Selection**: Choosing between Firebase services based on their specific strengths (JSON bulk operations vs. structured queries) demonstrated practical database architecture decisions.

## Foundation for Future Development

WakeTricks represents a foundational iOS project where core mobile development concepts were implemented from scratch. The prerequisite system, dual-state authentication, and modular database architecture established patterns that inform subsequent development work. The planned expansion includes social features for friend competition, community video sharing, timestamp-based progress tracking, and comprehensive media upload functionality—transforming the current learning tool into a full social platform for the wakeboarding community.`,
    },
    {
      title: "Basecamp",
      description: "Multi-User Room Reservation & Session Management System",
      images: [basecampLogo, basecampScreen1, basecampScreen2, basecampScreen3],
      techStack: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Firestore Database", "Firebase Realtime Database", "Room Database", "StateFlow", "Navigation Compose"],
      detailedDescription: `Developed in Kotlin with Jetpack Compose and Firebase backend infrastructure, BaseCamp is an apartment rental management platform enabling users to book accommodations with customizable additions like gym memberships and kitchen access. As one of five developers during a 13-week Android Programming course, I was responsible for the navigation architecture, state management systems, social features, and GitHub workflow management.

## My Contributions

**Root Navigation Architecture**: Designed and implemented the three-state application flow managing authentication, company selection, and main app access. The Root component orchestrates conditional rendering based on user authentication status and company context, ensuring users progress through the correct onboarding sequence before accessing core features.

**Global State Management**: Created the UserSession singleton to maintain centralized user data across the application. This system manages profile data, company context, and session lifecycle, preventing stale data persistence when users sign out—a critical requirement for multi-user device scenarios.

**Tab Navigation System**: Built the primary four-tab navigation structure (Home, Booking, Social, Profile) with persistent state management through the AppState singleton. This architecture maintains user position across tab switches, preserving context even during deep navigation flows.

**Social Tab Infrastructure**: Developed the complete social feature set including a nested sub-tab system for QnA, Forum, and Messaging. The QnA system implements role-based functionality where admins can publish, hide, create, and edit content while regular users access published questions with expandable answers.

**Role-Based Messaging System**: Designed the messaging navigation architecture with conditional rendering based on user privileges. SuperUsers access a console for managing chat requests and active conversations, while regular users interact with a simplified interface for initiating support chats and viewing conversation history.

**Development Workflow Management**: Established the team's GitHub workflow, organized dependency management in Gradle files with clear documentation, and configured the gitIgnore to resolve environment inconsistencies across team members' local setups.

## Technical Architecture

The navigation system employs a hierarchical structure where Root manages application-level state, TabNavigation handles primary sections, and nested NavHosts control feature-specific flows. The UserSession object uses StateFlow to provide reactive data access throughout the application, ensuring UI updates automatically reflect session changes.

Firebase services are strategically distributed—Authentication for user management, Firestore for structured data queries, and Realtime Database for specific real-time requirements. Room Database provides local caching to reduce network dependency and improve performance.

The messaging system demonstrates role-based UI composition, where the same navigation entry point renders completely different interfaces based on user privileges. This pattern extends throughout the social features, enabling flexible permission management without code duplication.

## Key Learnings

**Multi-State Navigation Complexity**: Implementing the three-stage authentication and company selection flow required careful state management to prevent navigation loops and ensure data loaded in the correct sequence. The LaunchedEffect implementations in Root orchestrate asynchronous initialization while maintaining UI responsiveness.

**Session State Synchronization**: Preventing stale user data across sign-in sessions demanded explicit state clearing mechanisms. Understanding StateFlow lifecycle and ensuring proper cleanup patterns became essential for data integrity.

**Merge Conflict Resolution**: As the team's GitHub lead, resolving complex merge conflicts required understanding code at a high level to preserve each developer's work. With team members new to version control, I developed strategies for identifying intent behind conflicting changes and implementing solutions that maintained functionality across branches.

**Dependency Organization**: Structuring the Gradle configuration with clear comments and logical grouping enabled team members to add dependencies confidently. This organization reduced configuration errors and maintained consistent versioning across Firebase services using the BOM pattern.

**Nested Navigation Architecture**: Building navigation hierarchies with multiple levels (main tabs → social sub-tabs → feature screens) required understanding Navigation Compose's backstack management and state preservation patterns.

## Foundation for Future Development

BaseCamp represents practical experience in collaborative Android development where architectural decisions directly impacted team productivity. The navigation patterns, state management systems, and role-based UI composition established here demonstrate scalable approaches to building multi-user applications with complex permission models. The emphasis on team-oriented code organization and version control management reflects the realities of collaborative software development.`,
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Applicaitons </h2>
        <p className="text-xl text-muted-foreground mb-12">
          A small portfolio of applications I've developed, showcasing my skills in mobile app development, UI/UX design, and backend integration.
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
