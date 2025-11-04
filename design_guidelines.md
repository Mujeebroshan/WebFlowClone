# Design Guidelines: Visual Website Builder

## Design Approach

**Selected Approach:** Design System with Creative Tool References

Drawing inspiration from professional design tools (Figma, Webflow, Linear) to create a polished, productivity-focused builder interface. The design prioritizes clarity, efficiency, and professional aesthetics for users creating websites.

**Core Principle:** Clean, purposeful interface that puts the user's canvas front and center while providing accessible controls.

---

## Typography System

**Primary Font:** Inter (Google Fonts) - Modern, readable at small sizes
**Monospace Font:** JetBrains Mono (Google Fonts) - For code/technical elements

**Hierarchy:**
- Panel Headers: 600 weight, text-sm uppercase tracking-wide
- Section Titles: 500 weight, text-base
- Body Text: 400 weight, text-sm
- Labels: 500 weight, text-xs
- Canvas Element Labels: 400 weight, text-xs

---

## Layout System

**Spacing Units:** Use Tailwind units of 2, 3, 4, 6, 8 consistently
- Micro spacing (icons, badges): p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: p-6, p-8
- Major gaps: gap-4, gap-6

**Application Structure:**

**Three-Panel Layout:**
1. **Left Sidebar (260px fixed):** Component library, templates, layers panel
2. **Center Canvas (flexible):** Main design workspace with zoom controls
3. **Right Panel (280px fixed):** Property inspector, styling controls

**Top Header (60px fixed):** Project name, view mode toggles (desktop/tablet/mobile), export button, undo/redo

---

## Component Library

### Navigation & Panels

**Sidebar Navigation:**
- Collapsible sections with chevron icons
- Active state with subtle background treatment
- Icon + Label format (24x24px icons from Heroicons)
- Nested items indented by 4 units

**Tab Systems:**
- Underline style for active tabs
- Even spacing using gap-6
- Hover state with opacity change

**Toolbar:**
- Icon buttons in groups of related actions
- Dividers between logical groups (h-6 border-l)
- Tooltips on hover showing keyboard shortcuts

### Canvas Interface

**Design Canvas:**
- Centered viewport with checkerboard pattern background
- Device frame overlay showing current breakpoint
- Rulers along top and left edges
- Snap guides appearing during drag operations
- Selection handles on active elements (8px squares at corners/edges)

**Zoom Controls (bottom-right):**
- Zoom percentage display
- Plus/minus buttons
- Fit-to-screen button
- Positioned with fixed bottom-4 right-4

### Template Gallery

**Grid Layout:** 3 columns on larger screens
**Template Card:**
- Thumbnail preview image (16:10 aspect ratio)
- Template name below (text-sm, 500 weight)
- Category badge (text-xs, rounded-full, px-3, py-1)
- Hover state: Subtle lift with shadow
- "Use Template" button appearing on hover overlay

**Categories Filter:**
- Horizontal scrolling pill buttons
- All/Landing/Portfolio/Business/Blog/E-commerce options
- Active category with distinct background

### Property Inspector

**Organized Sections (collapsible accordions):**
1. **Layout:** Width, height, positioning, display type
2. **Typography:** Font family, size, weight, line-height, color
3. **Spacing:** Margin and padding controls (visual box model)
4. **Background:** Color, gradient, or image options
5. **Borders:** Width, style, radius controls
6. **Effects:** Shadow, opacity, transforms

**Input Controls:**
- Number inputs with up/down steppers
- Unit toggles (px/rem/%)
- Slider for opacity/transforms
- Combo boxes for font families
- Text inputs with clear buttons

### Component Panel

**Element Categories:**
- Layout (Container, Flex, Grid)
- Typography (Heading, Paragraph, Link)
- Media (Image, Video placeholder)
- Interactive (Button, Form, Input)
- Structural (Section, Div, Span)

**Draggable Items:**
- Icon representing element type
- Element name
- Drag handle indicator
- Ghost preview during drag

### Forms & Inputs

**Input Fields:**
- Label above input (text-xs, 500 weight, mb-2)
- Consistent height (h-9)
- Rounded corners (rounded-md)
- Focus ring treatment
- Placeholder text with reduced opacity

**Buttons:**
- Primary: Solid background, 500 weight, px-4, py-2, rounded-md
- Secondary: Border style, transparent background
- Icon-only: Square with p-2, rounded

**Dropdowns:**
- Chevron down icon on right
- Max height with scroll for long lists
- Search input at top for font/component selectors

### Breakpoint Viewer

**Toggle Bar (center of top header):**
- Three icon buttons: Desktop (monitor), Tablet (tablet), Mobile (phone)
- Active breakpoint highlighted
- Canvas resizes smoothly with transition
- Breakpoint pixel values shown on hover

### Export Modal

**Two-Column Layout:**
- Left: Export options (HTML only, HTML+CSS, Full package)
- Right: Preview of file structure
- Large "Download" button at bottom
- Copy code to clipboard option

---

## Icons

**Library:** Heroicons (via CDN)
**Usage:**
- 20x20px for buttons and inline elements
- 24x24px for sidebar navigation
- 16x16px for property labels and small UI

---

## Animations

**Minimal, Purposeful Motion:**
- Panel collapse/expand: 200ms ease-in-out
- Drag feedback: Opacity change + subtle shadow
- Hover states: 150ms transitions
- Modal entry: 250ms fade + slight scale

**NO complex animations:** Focus on instant feedback and smooth transitions only.

---

## Accessibility

- All interactive elements keyboard navigable
- Focus indicators on all controls (2px ring offset)
- ARIA labels for icon-only buttons
- Proper heading hierarchy in panels
- Contrast ratios meeting WCAG AA standards
- Screen reader announcements for drag operations

---

## Images

**Template Thumbnails:** Use placeholder screenshots representing different website types - clean, modern designs showcasing the template's layout and style (no actual content needed, abstract/simplified representations)

**Empty States:** Simple illustrations or icons for empty canvas, no templates selected, etc.

**NO hero images** - this is an application interface, not a marketing site.