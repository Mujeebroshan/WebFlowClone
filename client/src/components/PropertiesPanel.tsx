import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CanvasElement } from "@shared/schema";

interface PropertiesPanelProps {
  selectedElement: CanvasElement | null;
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
}

export default function PropertiesPanel({ selectedElement, onUpdateElement }: PropertiesPanelProps) {
  if (!selectedElement) {
    return (
      <div className="w-80 border-l border-border bg-sidebar flex items-center justify-center">
        <p className="text-sm text-muted-foreground text-center px-4">
          Select an element to edit its properties
        </p>
      </div>
    );
  }

  return (
    <div className="w-80 border-l border-border bg-sidebar flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-sidebar-foreground">Properties</h2>
        <p className="text-xs text-muted-foreground mt-1 capitalize">{selectedElement.type}</p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          <Accordion type="multiple" defaultValue={["content", "layout", "typography", "spacing"]} className="w-full">
            <AccordionItem value="content">
              <AccordionTrigger className="text-sm font-medium">Content</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div>
                    <Label htmlFor="content" className="text-xs font-medium">Text</Label>
                    <Input
                      id="content"
                      value={selectedElement.content}
                      onChange={(e) => onUpdateElement({ content: e.target.value })}
                      placeholder="Enter content"
                      className="mt-1 h-9"
                      data-testid="input-content"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="layout">
              <AccordionTrigger className="text-sm font-medium">Layout</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="width" className="text-xs font-medium">Width</Label>
                      <Input
                        id="width"
                        value={selectedElement.styles.width || ''}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, width: e.target.value } 
                        })}
                        placeholder="auto"
                        className="mt-1 h-9"
                        data-testid="input-width"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-xs font-medium">Height</Label>
                      <Input
                        id="height"
                        value={selectedElement.styles.height || ''}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, height: e.target.value } 
                        })}
                        placeholder="auto"
                        className="mt-1 h-9"
                        data-testid="input-height"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="typography">
              <AccordionTrigger className="text-sm font-medium">Typography</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="fontSize" className="text-xs font-medium">Font Size</Label>
                      <Input
                        id="fontSize"
                        value={selectedElement.styles.fontSize || ''}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, fontSize: e.target.value } 
                        })}
                        placeholder="16px"
                        className="mt-1 h-9"
                        data-testid="input-fontSize"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fontWeight" className="text-xs font-medium">Weight</Label>
                      <Input
                        id="fontWeight"
                        value={selectedElement.styles.fontWeight || ''}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, fontWeight: e.target.value } 
                        })}
                        placeholder="400"
                        className="mt-1 h-9"
                        data-testid="input-fontWeight"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="color" className="text-xs font-medium">Text Color</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="color"
                        type="color"
                        value={selectedElement.styles.color || '#000000'}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, color: e.target.value } 
                        })}
                        className="w-12 h-9 p-1"
                        data-testid="input-color"
                      />
                      <Input
                        value={selectedElement.styles.color || ''}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, color: e.target.value } 
                        })}
                        placeholder="#000000"
                        className="flex-1 h-9"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="spacing">
              <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div>
                    <Label htmlFor="padding" className="text-xs font-medium">Padding</Label>
                    <Input
                      id="padding"
                      value={selectedElement.styles.padding || ''}
                      onChange={(e) => onUpdateElement({ 
                        styles: { ...selectedElement.styles, padding: e.target.value } 
                      })}
                      placeholder="0px"
                      className="mt-1 h-9"
                      data-testid="input-padding"
                    />
                  </div>
                  <div>
                    <Label htmlFor="margin" className="text-xs font-medium">Margin</Label>
                    <Input
                      id="margin"
                      value={selectedElement.styles.margin || ''}
                      onChange={(e) => onUpdateElement({ 
                        styles: { ...selectedElement.styles, margin: e.target.value } 
                      })}
                      placeholder="0px"
                      className="mt-1 h-9"
                      data-testid="input-margin"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="background">
              <AccordionTrigger className="text-sm font-medium">Background</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div>
                    <Label htmlFor="backgroundColor" className="text-xs font-medium">Background Color</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="backgroundColor"
                        type="color"
                        value={selectedElement.styles.backgroundColor || '#ffffff'}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, backgroundColor: e.target.value } 
                        })}
                        className="w-12 h-9 p-1"
                        data-testid="input-backgroundColor"
                      />
                      <Input
                        value={selectedElement.styles.backgroundColor || ''}
                        onChange={(e) => onUpdateElement({ 
                          styles: { ...selectedElement.styles, backgroundColor: e.target.value } 
                        })}
                        placeholder="#ffffff"
                        className="flex-1 h-9"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="borders">
              <AccordionTrigger className="text-sm font-medium">Borders</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div>
                    <Label htmlFor="border" className="text-xs font-medium">Border</Label>
                    <Input
                      id="border"
                      value={selectedElement.styles.border || ''}
                      onChange={(e) => onUpdateElement({ 
                        styles: { ...selectedElement.styles, border: e.target.value } 
                      })}
                      placeholder="1px solid #ccc"
                      className="mt-1 h-9"
                      data-testid="input-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="borderRadius" className="text-xs font-medium">Border Radius</Label>
                    <Input
                      id="borderRadius"
                      value={selectedElement.styles.borderRadius || ''}
                      onChange={(e) => onUpdateElement({ 
                        styles: { ...selectedElement.styles, borderRadius: e.target.value } 
                      })}
                      placeholder="0px"
                      className="mt-1 h-9"
                      data-testid="input-borderRadius"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
