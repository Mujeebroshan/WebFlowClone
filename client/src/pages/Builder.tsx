import { useState } from "react";
import ComponentPanel from "@/components/ComponentPanel";
import Canvas from "@/components/Canvas";
import PropertiesPanel from "@/components/PropertiesPanel";
import Toolbar from "@/components/Toolbar";
import type { CanvasElement, ElementType } from "@shared/schema";

export default function Builder() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [breakpoint, setBreakpoint] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [zoom, setZoom] = useState(100);
  const [projectName, setProjectName] = useState('Untitled Project');

  const selectedElement = elements.find(el => el.id === selectedElementId) || null;

  const handleAddElement = (type: ElementType) => {
    const newElement: CanvasElement = {
      id: `element-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      styles: getDefaultStyles(type),
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const handleUpdateElement = (updates: Partial<CanvasElement>) => {
    if (!selectedElementId) return;
    setElements(elements.map(el => 
      el.id === selectedElementId 
        ? { ...el, ...updates, styles: { ...el.styles, ...updates.styles } }
        : el
    ));
  };

  const handleDeleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElementId === id) {
      setSelectedElementId(null);
    }
  };

  const handleExport = () => {
    const html = generateHTML(elements);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectName.replace(/\s+/g, '-').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('Exported HTML');
  };

  return (
    <div className="flex flex-col h-screen">
      <Toolbar
        breakpoint={breakpoint}
        onBreakpointChange={setBreakpoint}
        zoom={zoom}
        onZoomChange={setZoom}
        onExport={handleExport}
        onUndo={() => console.log('Undo')}
        onRedo={() => console.log('Redo')}
        projectName={projectName}
        onProjectNameChange={setProjectName}
      />
      <div className="flex flex-1 overflow-hidden">
        <ComponentPanel onAddElement={handleAddElement} />
        <Canvas
          elements={elements}
          selectedElement={selectedElementId}
          onSelectElement={setSelectedElementId}
          onDeleteElement={handleDeleteElement}
          zoom={zoom}
        />
        <PropertiesPanel
          selectedElement={selectedElement}
          onUpdateElement={handleUpdateElement}
        />
      </div>
    </div>
  );
}

function getDefaultContent(type: ElementType): string {
  switch (type) {
    case 'heading':
      return 'Your Heading';
    case 'paragraph':
      return 'Your paragraph text goes here. Edit this text in the properties panel.';
    case 'button':
      return 'Button';
    case 'link':
      return 'Link';
    case 'container':
      return 'Container';
    case 'section':
      return 'Section';
    case 'div':
      return 'Div';
    case 'image':
      return '';
    default:
      return 'Element';
  }
}

function getDefaultStyles(type: ElementType) {
  switch (type) {
    case 'heading':
      return {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#1a1a1a',
        margin: '0 0 16px 0',
      };
    case 'paragraph':
      return {
        fontSize: '16px',
        color: '#666',
        margin: '0 0 16px 0',
      };
    case 'button':
      return {
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '6px',
        border: 'none',
      };
    case 'link':
      return {
        color: '#3b82f6',
        textDecoration: 'underline',
      };
    case 'container':
    case 'section':
    case 'div':
      return {
        padding: '24px',
        border: '1px dashed #ccc',
        minHeight: '100px',
      };
    case 'image':
      return {
        width: '300px',
        height: '200px',
        backgroundColor: '#e5e7eb',
      };
    default:
      return {};
  }
}

function generateHTML(elements: CanvasElement[]): string {
  const elementToHTML = (el: CanvasElement): string => {
    const styleStr = Object.entries(el.styles)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
      .join('; ');

    switch (el.type) {
      case 'heading':
        return `<h1 style="${styleStr}">${el.content}</h1>`;
      case 'paragraph':
        return `<p style="${styleStr}">${el.content}</p>`;
      case 'button':
        return `<button style="${styleStr}">${el.content}</button>`;
      case 'link':
        return `<a href="#" style="${styleStr}">${el.content}</a>`;
      case 'image':
        return `<div style="${styleStr}">Image Placeholder</div>`;
      case 'container':
      case 'section':
      case 'div':
        return `<div style="${styleStr}">${el.content}${el.children?.map(elementToHTML).join('') || ''}</div>`;
      default:
        return `<div style="${styleStr}">${el.content}</div>`;
    }
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Website</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  </style>
</head>
<body>
  ${elements.map(elementToHTML).join('\n  ')}
</body>
</html>`;
}
