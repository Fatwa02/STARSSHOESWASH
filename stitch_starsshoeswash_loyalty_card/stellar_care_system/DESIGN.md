---
name: Stellar Care System
colors:
  surface: '#faf8ff'
  surface-dim: '#d4d9ed'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e2e8fc'
  surface-container-highest: '#dde2f6'
  on-surface: '#151b29'
  on-surface-variant: '#454650'
  inverse-surface: '#2a303f'
  inverse-on-surface: '#edf0ff'
  outline: '#767681'
  outline-variant: '#c6c5d1'
  surface-tint: '#4e5b96'
  primary: '#03144f'
  on-primary: '#ffffff'
  primary-container: '#1d2b64'
  on-primary-container: '#8794d4'
  inverse-primary: '#b8c3ff'
  secondary: '#bc0001'
  on-secondary: '#ffffff'
  secondary-container: '#e22619'
  on-secondary-container: '#fffbff'
  tertiary: '#181b1e'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d3033'
  on-tertiary-container: '#95989b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#04154f'
  on-primary-fixed-variant: '#36437d'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#930000'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#faf8ff'
  on-background: '#151b29'
  surface-variant: '#dde2f6'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style

The brand identity is built on three pillars: **Precision, Reliability, and Vitality.** As a service-oriented product focusing on footwear maintenance, the UI must communicate a high degree of professionalism and trustworthiness. The target audience values their belongings and expects a service that is both meticulous and easy to engage with.

The design system adopts a **Modern Corporate** aesthetic with **Tactile** influences. It utilizes generous whitespace, crisp geometric lines, and a structured grid to establish authority. To prevent the interface from feeling sterile, we incorporate subtle "stamp-like" elements and circular motifs derived from the loyalty card's physical heritage, creating a bridge between the physical service and the digital experience. The emotional response should be one of reassurance—knowing that one's possessions are in expert hands.

## Colors

The palette is anchored by **Deep Navy (#1D2B64)**, representing stability and professional excellence. This is contrasted by **Vibrant Red (#F93827)**, a high-energy accent used sparingly for conversion points, "Free" offers, and status indicators.

- **Primary (Deep Navy):** Used for headers, primary buttons, and core branding elements.
- **Secondary (Vibrant Red):** Reserved for loyalty rewards, discounts, and critical calls to action.
- **Surface/Neutral:** A clean white base supplemented by cool grays for borders and secondary backgrounds to maintain a "freshly cleaned" look.

## Typography

This design system uses a dual-font strategy to balance impact with legibility. **Hanken Grotesk** is used for headlines and labels; its sharp, contemporary geometry provides a "designed" feel that mirrors the precision of the service. **Work Sans** is utilized for body text, chosen for its exceptional readability and neutral, professional tone.

For the loyalty experience, headlines should utilize heavy weights (Bold/ExtraBold) to mimic the impactful "Loyalty Card" block printing seen in the reference material.

## Layout & Spacing

The system follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A 4px baseline shift ensures vertical rhythm across all components.

- **Mobile:** 16px side margins with 12px gutters.
- **Desktop:** 24px side margins with 20px gutters.
- **Loyalty Grid:** A specialized 5-column or 2-row layout is used specifically for the stamp card interface, ensuring the circular "stamp" zones are always perfectly centered and easily tappable.

## Elevation & Depth

To maintain a clean and professional look, the design system avoids heavy drop shadows. Instead, it uses **Tonal Layering** and **Fine Outlines**.

- **Level 0 (Background):** White or light gray (#F0F2F5).
- **Level 1 (Cards/Containers):** Pure white with a 1px solid border in a soft navy tint (10% opacity of primary color).
- **Level 2 (Interactive/Active):** A very soft, diffused shadow (0px 4px 12px rgba(29, 43, 100, 0.08)) is applied only to floating elements or active cards to suggest interactability.
- **Loyalty Progress:** Use inner shadows on empty stamp slots to create a "punched-out" or "placeholder" feel, contrasting with the flat, vibrant red of a completed stamp.

## Shapes

The shape language is primarily **Soft (0.25rem)**. This slight rounding provides a modern touch without sacrificing the professional, "industrial" feel of the brand.

**Exception:** Circular elements are a core brand motif. Stamp slots, reward indicators, and profile avatars must always be perfectly circular (100% border-radius) to create a visual link to the physical loyalty stamp experience.

## Components

### Buttons
- **Primary:** Deep Navy background, white text, 4px border radius. High-weight Hanken Grotesk.
- **Secondary/Reward:** Vibrant Red background. Used exclusively for "Claim Reward" or "Free" actions.

### Loyalty Stamps
- **Empty State:** A circular stroke (1px) in Deep Navy with a light gray interior.
- **Filled State:** A solid Vibrant Red circle containing a white icon or "5%" text, angled at 15 degrees to mimic a hand-pressed stamp.

### Cards
- Standard containers use the Level 1 elevation (1px border). 
- Headers within cards should use the Deep Navy background with white text for maximum contrast, mirroring the "LOYALTY CARD" banner from the brand reference.

### Inputs
- Clean, 1px bordered boxes. When focused, the border thickens to 2px in Deep Navy. Labels are positioned above the input in `label-lg` style.

### Progress Indicators
- Use a horizontal bar in Deep Navy for general progress, but for loyalty milestones, use the circular stamp grid to visualize the journey toward a "Free Wash."