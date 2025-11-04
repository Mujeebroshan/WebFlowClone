import { Type, Square, Image, MousePointer2, Link as LinkIcon, Box, Heading1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { ElementType } from "@shared/schema";

interface ComponentItem {
  type: ElementType;
  label: string;
  icon: React.ReactNode;
}

const components: ComponentItem[] = [
  { type: 'container', label: 'Container', icon: <Box className="w-4 h-4" /> },
  { type: 'section', label: 'Section', icon: <Square className="w-4 h-4" /> },
  { type: 'heading', label: 'Heading', icon: <Heading1 className="w-4 h-4" /> },
  { type: 'paragraph', label: 'Paragraph', icon: <Type className="w-4 h-4" /> },
  { type: 'button', label: 'Button', icon: <MousePointer2 className="w-4 h-4" /> },
  { type: 'image', label: 'Image', icon: <Image className="w-4 h-4" /> },
  { type: 'link', label: 'Link', icon: <LinkIcon className="w-4 h-4" /> },
  { type: 'div', label: 'Div', icon: <Square className="w-4 h-4" /> },
];

interface ComponentPanelProps {
  onAddElement: (type: ElementType) => void;
}

export default function ComponentPanel({ onAddElement }: ComponentPanelProps) {
  return (
    <div className="w-64 border-r border-border bg-sidebar flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-sidebar-foreground">Components</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground px-2 pb-2">LAYOUT</p>
            {components.slice(0, 2).map((component) => (
              <Button
                key={component.type}
                variant="ghost"
                className="w-full justify-start gap-2 h-9"
                onClick={() => {
                  console.log(`Adding ${component.type} to canvas`);
                  onAddElement(component.type);
                }}
                data-testid={`button-add-${component.type}`}
              >
                {component.icon}
                <span className="text-sm">{component.label}</span>
              </Button>
            ))}
          </div>
          
          <Separator className="my-3" />
          
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground px-2 pb-2">TYPOGRAPHY</p>
            {components.slice(2, 4).map((component) => (
              <Button
                key={component.type}
                variant="ghost"
                className="w-full justify-start gap-2 h-9"
                onClick={() => {
                  console.log(`Adding ${component.type} to canvas`);
                  onAddElement(component.type);
                }}
                data-testid={`button-add-${component.type}`}
              >
                {component.icon}
                <span className="text-sm">{component.label}</span>
              </Button>
            ))}
          </div>
          
          <Separator className="my-3" />
          
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground px-2 pb-2">INTERACTIVE</p>
            {components.slice(4, 7).map((component) => (
              <Button
                key={component.type}
                variant="ghost"
                className="w-full justify-start gap-2 h-9"
                onClick={() => {
                  console.log(`Adding ${component.type} to canvas`);
                  onAddElement(component.type);
                }}
                data-testid={`button-add-${component.type}`}
              >
                {component.icon}
                <span className="text-sm">{component.label}</span>
              </Button>
            ))}
          </div>
          
          <Separator className="my-3" />
          
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground px-2 pb-2">STRUCTURAL</p>
            {components.slice(7).map((component) => (
              <Button
                key={component.type}
                variant="ghost"
                className="w-full justify-start gap-2 h-9"
                onClick={() => {
                  console.log(`Adding ${component.type} to canvas`);
                  onAddElement(component.type);
                }}
                data-testid={`button-add-${component.type}`}
              >
                {component.icon}
                <span className="text-sm">{component.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
