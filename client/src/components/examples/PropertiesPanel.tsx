import { useState } from 'react';
import PropertiesPanel from '../PropertiesPanel';
import type { CanvasElement } from '@shared/schema';

export default function PropertiesPanelExample() {
  const [element, setElement] = useState<CanvasElement>({
    id: '1',
    type: 'heading',
    content: 'Sample Heading',
    styles: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1a1a1a',
      padding: '16px',
    },
  });

  return (
    <div className="h-screen">
      <PropertiesPanel
        selectedElement={element}
        onUpdateElement={(updates) => {
          setElement((prev) => ({ ...prev, ...updates }));
          console.log('Updated element:', updates);
        }}
      />
    </div>
  );
}
