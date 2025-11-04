import { useState } from 'react';
import TemplateGallery from '../TemplateGallery';
import { Button } from '@/components/ui/button';

export default function TemplateGalleryExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Template Gallery</Button>
      <TemplateGallery
        open={open}
        onOpenChange={setOpen}
        onSelectTemplate={(template) => {
          console.log('Selected template:', template);
          setOpen(false);
        }}
      />
    </div>
  );
}
