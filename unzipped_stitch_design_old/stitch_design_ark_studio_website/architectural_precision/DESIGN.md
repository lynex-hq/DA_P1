---
name: Architectural Precision
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#47464a'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#77767b'
  outline-variant: '#c8c5ca'
  surface-tint: '#5f5e60'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1d'
  on-primary-container: '#858386'
  inverse-primary: '#c8c6c8'
  secondary: '#5e5f5c'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dc'
  on-secondary-container: '#626360'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e1b14'
  on-tertiary-container: '#89837a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e1e4'
  primary-fixed-dim: '#c8c6c8'
  on-primary-fixed: '#1b1b1d'
  on-primary-fixed-variant: '#474649'
  secondary-fixed: '#e3e2df'
  secondary-fixed-dim: '#c7c7c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#e9e2d6'
  tertiary-fixed-dim: '#ccc6bb'
  on-tertiary-fixed: '#1e1b14'
  on-tertiary-fixed-variant: '#4a463e'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.15em
  coordinate-index:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  stroke-thin: 0.5px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  blueprint-grid: 40px
---

## Brand & Style

The design system is rooted in the meticulous world of high-end interior architecture. It targets ultra-high-net-worth clients who appreciate the process of creation as much as the final result. The UI evokes the feeling of a "Live Interactive Blueprint"—a space where technical rigor meets luxury hospitality.

The design style is a hybrid of **Minimalism** and **Technical Brutalism**, softened by premium material textures. It utilizes ultra-thin drafting lines, coordinate-based navigation, and technical annotations to create an environment that feels both engineered and bespoke. The emotional response is one of absolute clarity, quiet confidence, and artisanal precision.

## Colors

This design system utilizes a structured 60-30-10 distribution to maintain architectural balance:

- **Primary Surfaces (60%):** Chalk Plaster White (#F5F4F0) provides a soft, breathable canvas, while Basalt Charcoal (#0E0E10) is used for high-contrast structural elements and deep-mode sections.
- **Support & Texture (30%):** Travertine Sand (#D6CFC4) creates subtle depth for containers, and Raw Brushed Bronze (#8C7B68) is used for secondary interactive elements and technical accents.
- **Detail & Value (10%):** Champagne Gold (#D4AF37) is reserved strictly for high-value highlights, active states, and signatures of luxury.

Color application should mimic physical materials; use large spans of neutral plaster tones punctuated by sharp charcoal lines and metallic accents.

## Typography

Typography functions as a hierarchy of intent. 

- **Libre Caslon Text** is used for headlines and editorial moments, bringing a sense of history and "old-world" luxury.
- **Hanken Grotesk** serves as the primary reading typeface, offering a clean, contemporary sans-serif experience that ensures clarity in project descriptions.
- **JetBrains Mono** is the technical layer. It is used for "Coordinate Indices" (e.g., 01 // VESTIBULE), measurements, and functional labels. 

All labels should be uppercase with generous letter spacing to evoke architectural notation. Headlines should feel "set" into the page, like a title block on a schematic.

## Layout & Spacing

The layout is governed by a **fixed-column grid** that resembles a technical drafting sheet. 

- **Desktop:** A 12-column grid with wide 64px outer margins. Use 0.5px vertical and horizontal rules to define the boundaries of the main content area.
- **The Blueprint Overlay:** A secondary 40px square grid background is used at low opacity (3-5%) to ground elements.
- **Technical Gutters:** Elements are separated by "white space zones" that align strictly to 4px increments.
- **Coordinate System:** Every major section must be anchored with a coordinate index in the top-left corner (e.g., SECTION_A // 04).

Transitions use the **Heavy Luxury Curve** `cubic-bezier(0.16, 1, 0.3, 1)` for all movements, ensuring that even technical reflows feel deliberate and expensive.

## Elevation & Depth

This design system rejects traditional shadows in favor of **Tonal Layering** and **Architectural Stacking**.

- **Surfaces:** Depth is achieved by placing Basalt Charcoal elements atop Travertine Sand or Chalk Plaster White.
- **Drafting Lines:** Use 0.5px strokes in Raw Brushed Bronze to "frame" content. These lines should extend slightly past their intersections (tick marks) to mimic hand-drawn technical sketches.
- **Glassmorphism:** Use sparingly for navigation overlays. A very high-density blur (40px) with a subtle #F5F4F0 tint simulates frosted glass or vellum paper overlays used in architectural drafting.
- **Interactions:** On hover, elements do not "lift" via shadows; instead, they are "highlighted" by changing the stroke weight of their frame from 0.5px to 1px or shifting the stroke color to Champagne Gold.

## Shapes

The shape language is strictly **Sharp (0px)**.

Every container, button, and image frame must maintain 90-degree corners to reflect the structural integrity of interior architecture. To avoid visual harshness, the sharp edges are mitigated by the use of ultra-thin 0.5px strokes and the soft, organic color palette of plaster and sand. In specific instances, such as progress rings or directional arrows, geometric circles may be used, but they should never be "rounded rectangles."

## Components

- **Buttons:** Rectangular with a 0.5px Raw Brushed Bronze border. Text is JetBrains Mono, all-caps. On hover, the background fills with Basalt Charcoal and the text flips to Chalk Plaster White using the luxury easing curve.
- **Coordinate Indices:** Small-scale monospaced identifiers (e.g., [ 02 ]) placed at the intersection of drafting lines.
- **Drafting Chips:** Small, sharp-edged labels with a subtle Travertine Sand fill and a technical tick mark on the left side.
- **Input Fields:** A single 0.5px horizontal line (bottom border only) with the label floating in JetBrains Mono above the line. The cursor is a non-blinking Champagne Gold block.
- **Project Cards:** Image-centric with no borders. Upon hover, 0.5px lines "draw" themselves around the image perimeter, and technical dimensions (e.g., 4500mm x 3200mm) appear in the corners.
- **Navigation:** A persistent sidebar or top bar defined by a 0.5px vertical/horizontal rule. Active states are indicated by a Champagne Gold dot or "01//" prefix.