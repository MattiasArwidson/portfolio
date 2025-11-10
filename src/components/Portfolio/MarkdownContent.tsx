import { Separator } from "@/components/ui/separator";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join(' ');
        elements.push(
          <p key={`p-${key++}`} className="mb-4 text-muted-foreground leading-relaxed">
            {parseBoldText(paragraphText)}
          </p>
        );
        currentParagraph = [];
      }
    };

    const parseBoldText = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-semibold text-card-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      // H2 headers (##)
      if (line.startsWith('## ')) {
        flushParagraph();
        const headerText = line.replace('## ', '');
        if (index > 0) {
          elements.push(<Separator key={`sep-${key++}`} className="my-6" />);
        }
        elements.push(
          <h3 key={`h3-${key++}`} className="text-2xl font-bold mb-4 text-card-foreground mt-2">
            {headerText}
          </h3>
        );
      }
      // H1 headers (#) 
      else if (line.startsWith('# ')) {
        flushParagraph();
        const headerText = line.replace('# ', '');
        elements.push(
          <h2 key={`h2-${key++}`} className="text-3xl font-bold mb-6 text-card-foreground">
            {headerText}
          </h2>
        );
      }
      // Empty lines
      else if (line.trim() === '') {
        flushParagraph();
      }
      // Regular text
      else {
        currentParagraph.push(line);
      }
    });

    flushParagraph();
    return elements;
  };

  return <div className="space-y-2">{renderContent()}</div>;
};

export default MarkdownContent;
