import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Template } from "@shared/schema";
import landingTemplate from '@assets/generated_images/Landing_page_template_preview_453f1ef4.png';
import portfolioTemplate from '@assets/generated_images/Portfolio_template_preview_9a446d6d.png';
import businessTemplate from '@assets/generated_images/Business_template_preview_245e627a.png';
import blogTemplate from '@assets/generated_images/Blog_template_preview_9e063125.png';
import ecommerceTemplate from '@assets/generated_images/E-commerce_template_preview_73f46d20.png';
import startupTemplate from '@assets/generated_images/Startup_template_preview_a6338167.png';

interface TemplateGalleryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectTemplate: (template: Template) => void;
}

const templates: Template[] = [
  {
    id: '1',
    name: 'Landing Page',
    category: 'Marketing',
    thumbnail: landingTemplate,
    elements: [],
  },
  {
    id: '2',
    name: 'Portfolio',
    category: 'Creative',
    thumbnail: portfolioTemplate,
    elements: [],
  },
  {
    id: '3',
    name: 'Business',
    category: 'Corporate',
    thumbnail: businessTemplate,
    elements: [],
  },
  {
    id: '4',
    name: 'Blog',
    category: 'Content',
    thumbnail: blogTemplate,
    elements: [],
  },
  {
    id: '5',
    name: 'E-commerce',
    category: 'Shopping',
    thumbnail: ecommerceTemplate,
    elements: [],
  },
  {
    id: '6',
    name: 'Startup',
    category: 'SaaS',
    thumbnail: startupTemplate,
    elements: [],
  },
];

export default function TemplateGallery({ open, onOpenChange, onSelectTemplate }: TemplateGalleryProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] pr-4">
          <div className="grid grid-cols-3 gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="group relative rounded-md overflow-hidden border border-border hover-elevate"
                data-testid={`template-card-${template.id}`}
              >
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-3 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-sm">{template.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <Button
                    className="w-full"
                    size="sm"
                    onClick={() => {
                      console.log('Using template:', template.name);
                      onSelectTemplate(template);
                    }}
                    data-testid={`button-use-template-${template.id}`}
                  >
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
