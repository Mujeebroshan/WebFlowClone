import { useState } from "react";
import type { CanvasElement } from "@shared/schema";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CanvasProps {
  elements: CanvasElement[];
  selectedElement: string | null;
  onSelectElement: (id: string) => void;
  onDeleteElement: (id: string) => void;
  zoom: number;
}

function CanvasElementRenderer({ 
  element, 
  isSelected, 
  onSelect, 
  onDelete 
}: { 
  element: CanvasElement; 
  isSelected: boolean; 
  onSelect: () => void;
  onDelete: () => void;
}) {
  const baseStyles = {
    ...element.styles,
    cursor: 'pointer',
    position: 'relative' as const,
  };

  const getElementContent = () => {
    switch (element.type) {
      case 'heading':
        return <h1 style={baseStyles}>{element.content || 'Heading'}</h1>;
      case 'paragraph':
        return <p style={baseStyles}>{element.content || 'Paragraph text'}</p>;
      case 'button':
        return (
          <button 
            style={{ 
              ...baseStyles, 
              padding: element.styles.padding || '8px 16px',
              border: element.styles.border || '1px solid #ccc',
              borderRadius: element.styles.borderRadius || '4px',
            }}
          >
            {element.content || 'Button'}
          </button>
        );
      case 'image':
        return (
          <div 
            style={{ 
              ...baseStyles, 
              width: element.styles.width || '200px',
              height: element.styles.height || '150px',
              backgroundColor: element.styles.backgroundColor || '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Image
          </div>
        );
      case 'link':
        return <a style={baseStyles} href="#">{element.content || 'Link'}</a>;
      case 'container':
      case 'section':
      case 'div':
        return (
          <div 
            style={{ 
              ...baseStyles,
              padding: element.styles.padding || '16px',
              border: element.styles.border || '1px dashed #ccc',
              minHeight: element.styles.height || '100px',
            }}
          >
            {element.content || `${element.type.charAt(0).toUpperCase() + element.type.slice(1)}`}
            {element.children?.map(child => (
              <CanvasElementRenderer
                key={child.id}
                element={child}
                isSelected={false}
                onSelect={() => {}}
                onDelete={() => {}}
              />
            ))}
          </div>
        );
      default:
        return <div style={baseStyles}>{element.content}</div>;
    }
  };

  return (
    <div 
      className={`relative group ${isSelected ? 'ring-2 ring-primary ring-offset-2' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      data-testid={`canvas-element-${element.id}`}
    >
      {getElementContent()}
      {isSelected && (
        <div className="absolute -top-8 right-0 flex gap-1">
          <Button
            size="icon"
            variant="destructive"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            data-testid={`button-delete-${element.id}`}
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default function Canvas({ elements, selectedElement, onSelectElement, onDeleteElement, zoom }: CanvasProps) {
  return (
    <div className="flex-1 bg-muted p-8 overflow-auto">
      <div 
        className="bg-background mx-auto shadow-lg" 
        style={{ 
          width: '1200px',
          minHeight: '800px',
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'top center',
        }}
        onClick={() => onSelectElement('')}
        data-testid="canvas-area"
      >
        <div className="p-8 space-y-4">
          {elements.length === 0 ? (
            <div className="flex items-center justify-center h-96 text-muted-foreground">
              <p>Click elements from the left panel to add them to the canvas</p>
            </div>
          ) : (
            elements.map((element) => (
              <CanvasElementRenderer
                key={element.id}
                element={element}
                isSelected={selectedElement === element.id}
                onSelect={() => onSelectElement(element.id)}
                onDelete={() => onDeleteElement(element.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
