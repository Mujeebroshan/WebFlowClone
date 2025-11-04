import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, FileText } from "lucide-react";
import TemplateGallery from "@/components/TemplateGallery";
import type { Template } from "@shared/schema";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showTemplates, setShowTemplates] = useState(false);

  const handleSelectTemplate = (template: Template) => {
    console.log('Selected template:', template.name);
    setShowTemplates(false);
    setLocation('/builder');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">FlowBuilder</h1>
          <p className="text-lg text-muted-foreground">
            Create stunning websites with our visual drag-and-drop builder
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover-elevate cursor-pointer" onClick={() => setLocation('/builder')} data-testid="card-blank-canvas">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Layout className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Start from Scratch</h2>
                <p className="text-sm text-muted-foreground">
                  Begin with a blank canvas and build your website from the ground up
                </p>
              </div>
              <Button className="w-full" data-testid="button-start-scratch">
                Create Blank Project
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate cursor-pointer" onClick={() => setShowTemplates(true)} data-testid="card-template">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-md bg-accent/50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Choose Template</h2>
                <p className="text-sm text-muted-foreground">
                  Start with a professionally designed template and customize it to your needs
                </p>
              </div>
              <Button className="w-full" variant="secondary" data-testid="button-choose-template">
                Browse Templates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <TemplateGallery
        open={showTemplates}
        onOpenChange={setShowTemplates}
        onSelectTemplate={handleSelectTemplate}
      />
    </div>
  );
}
