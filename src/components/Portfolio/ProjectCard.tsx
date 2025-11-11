import { useState, useEffect, useCallback } from "react";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import MarkdownContent from "./MarkdownContent";

// 🧱 Updated: now supports optional captions
interface ProjectCardProps {
  title: string;
  description: string;
  images: (string | { src: string; caption?: string })[];
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
  const [currentImage, setCurrentImage] = useState(0);

  const [showInfoPanel, setShowInfoPanel] = useState(false);

  const getImageData = (img: string | { src: string; caption?: string }) =>
    typeof img === "string" ? { src: img, caption: "" } : img;

  // --- Navigation logic ---
  const handlePrev = useCallback(
    () => setCurrentImage((prev) => Math.max(prev - 1, 0)),
    []
  );
  const handleNext = useCallback(
    () => setCurrentImage((prev) => Math.min(prev + 1, images.length - 1)),
    [images.length]
  );

  // --- Keyboard navigation ---
  useEffect(() => {
    if (!isExpanded) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsExpanded(false);
      if (e.key.toLowerCase() === "i") setShowInfoPanel((prev) => !prev);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isExpanded, handlePrev, handleNext]);

  useEffect(() => {
    if (!isExpanded) setShowInfoPanel(false);
  }, [isExpanded]);

  return (
    <>
      {/* --- Collapsed Card --- */}
      <div
        className={`project-card-hover cursor-pointer rounded-xl border border-border bg-card p-6 ${
          isFeatured ? "md:col-span-2 lg:col-span-3 ring-2 ring-primary/30" : ""
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-muted group">
          <img
            src={
              typeof images[0] === "string"
                ? (images[0] as string)
                : (images[0] as { src: string }).src
            }
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
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

      {/* --- Expanded Modal --- */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="relative bg-card border border-border rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8">
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="sticky top-0 float-right p-2 rounded-lg bg-secondary hover:bg-muted transition-colors z-10 mb-4"
            >
              <X className="w-6 h-6" />
            </button>

            {/* --- Image Carousel --- */}
            {images.length > 0 && (
              <div className="relative mb-8">
                <div
                  className="relative flex justify-center items-center bg-muted rounded-lg overflow-hidden"
                  style={{ height: "65vh" }}
                >
                  {images[currentImage] && (() => {
                    const { src, caption } = getImageData(images[currentImage]);
                    return (
                      <>
                        <img
                          src={src}
                          alt={`${title} screenshot ${currentImage + 1}`}
                          className="max-h-full max-w-full object-contain transition-all duration-300"
                          aria-describedby={
                            caption ? "image-info-panel" : undefined
                          }
                        />

                        {/* --- Info Button --- */}
                        {caption && (
                          <button
                            type="button"
                            onClick={() => setShowInfoPanel((s) => !s)}
                            aria-pressed={showInfoPanel}
                            aria-controls="image-info-panel"
                            aria-label={
                              showInfoPanel
                                ? "Hide image information"
                                : "Show image information"
                            }
                            className="absolute bottom-4 right-4 z-20 rounded-full p-3 bg-black/40 hover:bg-black/60 backdrop-blur-sm shadow-lg focus:outline-none"
                          >
                            <span className="text-white text-lg font-bold">
                              i
                            </span>
                          </button>
                        )}

                        {/* --- Info Panel --- */}
                        {caption && (
                          <div
                            id="image-info-panel"
                            role="region"
                            aria-live="polite"
                            className={`absolute left-0 bottom-0 w-full z-10 text-white px-4 py-3 transition-transform duration-300 ease-out ${
                              showInfoPanel
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                            }`}
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
                            }}
                          >
                            <div className="max-h-[45vh] overflow-auto text-sm">
                              {caption}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}

                  {/* Left arrow */}
                  {currentImage > 0 && (
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/95 rounded-full p-2 shadow-md transition"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}

                  {/* Right arrow */}
                  {currentImage < images.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/95 rounded-full p-2 shadow-md transition"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {images.map((thumb, idx) => {
                      const { src } = getImageData(thumb);
                      return (
                        <img
                          key={idx}
                          src={src || "/placeholder.svg"}
                          alt={`Preview ${idx + 1}`}
                          onClick={() => setCurrentImage(idx)}
                          className={`h-16 w-auto rounded-md cursor-pointer transition-all duration-300 ${
                            currentImage === idx
                              ? "ring-2 ring-primary"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* --- Text Content --- */}
            <h2 className="text-4xl font-bold mb-4 text-card-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">{description}</p>

            {detailedDescription && (
              <div className="mb-8">
                <MarkdownContent content={detailedDescription} />
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Tech Stack
              </h3>
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
