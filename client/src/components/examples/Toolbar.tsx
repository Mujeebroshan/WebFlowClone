import { useState } from 'react';
import Toolbar from '../Toolbar';

export default function ToolbarExample() {
  const [breakpoint, setBreakpoint] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [zoom, setZoom] = useState(100);
  const [projectName, setProjectName] = useState('My Website');

  return (
    <Toolbar
      breakpoint={breakpoint}
      onBreakpointChange={setBreakpoint}
      zoom={zoom}
      onZoomChange={setZoom}
      onExport={() => console.log('Exporting project')}
      onUndo={() => console.log('Undo')}
      onRedo={() => console.log('Redo')}
      projectName={projectName}
      onProjectNameChange={setProjectName}
    />
  );
}
