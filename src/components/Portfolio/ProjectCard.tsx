import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  isFeatured?: boolean;
  detailedDescription?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

const ProjectCard = ({
  title,
  description,
  images,
  techStack,
  isFeatured = false,
  detailedDescription,
  links,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={`project-card-hover cursor-pointer rounded-xl border border-border bg-card p-6 ${
          isFeatured ? "md:col-span-2 lg:col-span-3 ring-2 ring-primary/30" : ""
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-muted">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium">
              +{techStack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="relative bg-card border border-border rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-4xl font-bold mb-4 text-card-foreground">{title}</h2>
            <p className="text-xl text-muted-foreground mb-6">{description}</p>

            {detailedDescription && (
              <div className="mb-6 text-muted-foreground whitespace-pre-line">
                {detailedDescription}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {images.map((image, idx) => (
                <div key={idx} className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {links && (
              <div className="flex gap-4">
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {links.demo && (
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
