---
name: Architectural Prestige
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#919094'
  outline-variant: '#46464a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#313031'
  primary-container: '#0b0b0c'
  on-primary-container: '#7b797a'
  inverse-primary: '#5f5e5f'
  secondary: '#e0c297'
  on-secondary: '#3f2d0e'
  secondary-container: '#584322'
  on-secondary-container: '#ceb187'
  tertiary: '#ccc6bb'
  on-tertiary: '#333029'
  tertiary-container: '#0d0b06'
  on-tertiary-container: '#7e7970'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1c1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#fddeb1'
  secondary-fixed-dim: '#e0c297'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#584322'
  tertiary-fixed: '#e9e2d6'
  tertiary-fixed-dim: '#ccc6bb'
  on-tertiary-fixed: '#1e1b14'
  on-tertiary-fixed-variant: '#4a463e'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  technical-label:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.1em
  coordinate-sm:
    fontFamily: Geist Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system is built upon the concept of "Structural Silence." It targets high-net-worth individuals and elite architectural firms, evoking an emotional response of awe, precision, and permanence. The aesthetic is a fusion of **High-End Minimalism** and **Architectural Brutalism**, refined through a luxury lens. 

The visual language draws inspiration from physical architectural blueprints and raw, premium building materials. It utilizes visible drafting lines—ultra-thin, gold-tinted strokes—to suggest engineering rigor and intentionality. The interface should feel less like a software application and more like a curated folio of masterworks. Space is treated as a premium commodity, with generous margins and a strict adherence to a grid that mirrors the mathematical precision of a skyscraper's frame.

## Colors

The palette is anchored in depth and material honesty. 
- **Deep Matte Basalt (#0B0B0C):** The foundational void. Used for all primary backgrounds to create a sense of infinite space and prestige.
- **Champagne Gold (#C2A67D):** The line of intent. Used for primary calls to action, active states, and structural drafting lines. It represents the "architect's pen."
- **Natural Travertine (#D6CFC4):** The informational layer. Used for metadata, technical specifications, and body text. This replaces white entirely to reduce visual fatigue and maintain a warm, limestone-like quality.

Avoid gradients or high-vibrancy hues. All color interactions must maintain a high-contrast, yet sophisticated, tonal relationship.

## Typography

Typography functions as both a medium for information and a graphic element. 
- **Display & Headlines:** Bodoni Moda provides a high-contrast, editorial elegance. It should be tracked slightly tighter in large formats to emphasize its verticality.
- **Body & Interface:** Geist (Sans) offers a neutral, modern counterpoint to the serif headings, ensuring legibility at smaller scales.
- **Technical Markers:** Geist Mono is used exclusively for "technical data"—dimensions, coordinates, scale markers, and timestamps. These should often be accompanied by thin gold lines to reinforce the architectural drawing aesthetic.

## Layout & Spacing

The layout is governed by a **12-column Fixed Grid** on desktop, with an emphasis on asymmetry.
- **The Drafting Axis:** Use visible vertical and horizontal lines (0.5px width in Champagne Gold at 15% opacity) to separate major layout sections. 
- **The "Blueprint" Margin:** Desktop views should maintain a generous 64px outer margin, creating a frame around the content.
- **Responsive Behavior:** On mobile, the grid collapses to 4 columns. Large display type should scale aggressively to maintain a single-column impact. Spacing should follow a strict 8px incremental scale, but with a preference for "Air" (64px+) between distinct conceptual sections.

## Elevation & Depth

This design system rejects traditional shadows. Depth is instead communicated through **Tonal Layering** and **Line Weight**.

- **Level 0 (Base):** Deep Matte Basalt (#0B0B0C).
- **Level 1 (Surfaces):** A slightly lighter charcoal (#141416) with a 1px border in low-opacity Gold.
- **Level 2 (Overlays):** Used for modals or tooltips. These utilize a Backdrop Blur (20px) with a 70% opacity Basalt fill.
- **Intersections:** Where two planes meet, use a solid 1px Champagne Gold line to define the edge. This replaces the concept of a shadow with a "structural joint."

## Shapes

The shape language is strictly **Sharp (0px)**. Curvature is viewed as an organic deviation; the architectural intent here is geometric and structural. 

All buttons, input fields, and image containers must have hard 90-degree corners. If an element requires "softness," achieve this through typography or spacing, never through corner radius. This reinforces the precision-led, blueprint-inspired aesthetic.

## Components

- **Primary Buttons:** Ghost-style with a 1px Champagne Gold border and Geist Mono text. Upon hover, the button fills with Gold and the text switches to Basalt.
- **Technical Inputs:** Underlined only (no full box) with a 1px Travertine line. Labels are positioned above the line in Geist Mono at 10px.
- **Cards:** Defined by 0.5px Gold borders. Images within cards should have a subtle desaturation to blend with the Basalt background.
- **Drafting Markers:** Small "+" symbols in Gold at the intersections of grid lines or corners of containers to act as "anchor points."
- **Progress Indicators:** Simple, thin horizontal lines. No rounded ends. The "filled" portion is Champagne Gold, the "empty" portion is Basalt with a 5% opacity Gold stroke.
- **Lists:** Items separated by horizontal Gold drafting lines that extend to the edges of the container.