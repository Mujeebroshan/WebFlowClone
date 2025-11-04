import { useState } from 'react';
import Canvas from '../Canvas';
import type { CanvasElement } from '@shared/schema';

export default function CanvasExample() {
  const [elements] = useState<CanvasElement[]>([
    {
      id: '1',
      type: 'heading',
      content: 'Welcome to Your Website',
      styles: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#1a1a1a',
      },
    },
    {
      id: '2',
      type: 'paragraph',
      content: 'This is a sample paragraph element. You can customize its styles in the properties panel.',
      styles: {
        fontSize: '16px',
        color: '#666',
      },
    },
    {
      id: '3',
      type: 'button',
      content: 'Get Started',
      styles: {
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '6px',
      },
    },
  ]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  return (
    <div className="h-screen">
      <Canvas
        elements={elements}
        selectedElement={selectedElement}
        onSelectElement={setSelectedElement}
        onDeleteElement={(id) => console.log('Delete element:', id)}
        zoom={100}
      />
    </div>
  );
}
