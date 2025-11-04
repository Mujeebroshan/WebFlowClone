import { Monitor, Tablet, Smartphone, Download, Undo, Redo, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type Breakpoint = 'desktop' | 'tablet' | 'mobile';

interface ToolbarProps {
  breakpoint: Breakpoint;
  onBreakpointChange: (breakpoint: Breakpoint) => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  onExport: () => void;
  onUndo: () => void;
  onRedo: () => void;
  projectName: string;
  onProjectNameChange: (name: string) => void;
}

export default function Toolbar({
  breakpoint,
  onBreakpointChange,
  zoom,
  onZoomChange,
  onExport,
  onUndo,
  onRedo,
  projectName,
  onProjectNameChange,
}: ToolbarProps) {
  return (
    <div className="h-14 border-b border-border bg-background flex items-center justify-between px-4 gap-4">
      <div className="flex items-center gap-3">
        <Input
          value={projectName}
          onChange={(e) => onProjectNameChange(e.target.value)}
          className="w-48 h-9"
          placeholder="Untitled Project"
          data-testid="input-project-name"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={onUndo}
          data-testid="button-undo"
        >
          <Undo className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onRedo}
          data-testid="button-redo"
        >
          <Redo className="w-4 h-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <div className="flex items-center gap-1 bg-muted rounded-md p-1">
          <Button
            size="icon"
            variant={breakpoint === 'desktop' ? 'secondary' : 'ghost'}
            onClick={() => onBreakpointChange('desktop')}
            className="h-7 w-7"
            data-testid="button-breakpoint-desktop"
          >
            <Monitor className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant={breakpoint === 'tablet' ? 'secondary' : 'ghost'}
            onClick={() => onBreakpointChange('tablet')}
            className="h-7 w-7"
            data-testid="button-breakpoint-tablet"
          >
            <Tablet className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant={breakpoint === 'mobile' ? 'secondary' : 'ghost'}
            onClick={() => onBreakpointChange('mobile')}
            className="h-7 w-7"
            data-testid="button-breakpoint-mobile"
          >
            <Smartphone className="w-4 h-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <div className="flex items-center gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onZoomChange(Math.max(25, zoom - 25))}
            data-testid="button-zoom-out"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium w-12 text-center" data-testid="text-zoom-level">{zoom}%</span>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onZoomChange(Math.min(200, zoom + 25))}
            data-testid="button-zoom-in"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <Button onClick={onExport} data-testid="button-export">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}
