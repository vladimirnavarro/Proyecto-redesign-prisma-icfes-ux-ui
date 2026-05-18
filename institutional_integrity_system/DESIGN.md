---
name: Institutional Integrity System
colors:
  surface: '#FFFFFF'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#2a609d'
  on-secondary: '#ffffff'
  secondary-container: '#8bbbfe'
  on-secondary-container: '#054a86'
  tertiary: '#745b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#d0a600'
  on-tertiary-container: '#4f3d00'
  error: '#C62828'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#ffe08b'
  tertiary-fixed-dim: '#f1c100'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  focus-blue: '#0066CC'
  control-gray: '#555555'
  text-body: '#333333'
  text-dark: '#202020'
  success: '#2E7D32'
  border-default: '#CCCCCC'
typography:
  headline-h1:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-h2:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-h3:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  headline-h4:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
  input-text:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 20px
  microcopy:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
  button-text:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The design system is engineered for the high-stakes environment of national educational assessment. It balances the authoritative presence of a government institution with the modern accessibility required for diverse student and administrator populations.

The chosen style is **Corporate / Modern** with a focus on high legibility and clear information hierarchy. It adheres to GOV.CO standards, utilizing structured layouts, rhythmic vertical spacing, and a clear distinction between informational content and interactive controls. The aesthetic is clean, professional, and trustworthy, prioritizing function and clarity over decorative flair.

## Colors

The palette is anchored by deep, institutional blues to convey stability and authority. 

- **Primary & Secondary:** Used for high-level branding, headers, and institutional bars. These colors provide the structural "weight" of the UI.
- **Focus & Interaction:** A vibrant blue is reserved strictly for interactive affordances like links and focus rings, ensuring users always know where they are.
- **Call to Action (CTA):** The use of gold is highly disciplined; it is used only for the most critical path on a page to prevent cognitive overload.
- **Semantic Colors:** Success and Error tokens are calibrated to meet WCAG 2.1 AA contrast requirements against white backgrounds.

## Typography

This design system utilizes a dual-font approach to maximize both impact and readability. 

**Montserrat** is used for headings and buttons to provide a strong, geometric, and modern institutional feel. **Open Sans** is employed for all body text, inputs, and labels due to its exceptional legibility at standard sizes, crucial for long forms and instructional content.

Vertical rhythm is maintained through standardized line heights that allow for comfortable reading on both desktop and mobile devices. Always ensure that text-based interactive elements maintain at least a 4.5:1 contrast ratio against their background.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centering content within a 1200px container to ensure optimal line lengths for readability. 

- **Desktop (1024px+):** 12-column grid with 24px gutters.
- **Tablet (768px - 1023px):** 8-column grid with 20px gutters. Content margins shrink to 24px.
- **Mobile (<768px):** 4-column grid with 16px gutters and 16px side margins.

Spacing between elements follows a strict vertical stack. Form groups use `stack-md`, while major sections or cards use `stack-lg` to provide breathing room and clear visual separation.

## Elevation & Depth

To maintain a clean, institutional look, the design system avoids heavy shadows and skeuomorphism. Depth is conveyed primarily through **Tonal Layers** and subtle ambient shadows.

- **Background:** The app background uses a light gray (`#F8F9FA`) to allow white surface cards to pop.
- **Surfaces:** Cards and containers use a white background with a very soft, diffused shadow (`0 2px 8px rgba(0,0,0,0.08)`) to indicate interactivity and hierarchy without cluttering the interface.
- **Interactions:** Focused states use a 2px solid border in Focus Blue (`#0066CC`) rather than elevation changes, ensuring accessibility for users with visual impairments.

## Shapes

The shape language is consistently **Rounded**. A 0.5rem (8px) base radius is used for buttons and inputs to soften the institutional feel and make the portal appear more approachable. Larger containers like cards use a 12px radius (`rounded-lg`) to emphasize their role as structural anchors. 

Progress indicators and certain tags may utilize the `rounded-xl` (1.5rem) setting for a distinct, softer appearance.

## Components

### Buttons
- **Primary (CTA):** Gold background (`#FFCC00`) with Primary Blue text. Bold Montserrat. Used only for the main action (e.g., "Submit Application").
- **Secondary:** Primary Blue background with White text. Used for supporting actions.
- **Outline/Ghost:** Transparent background with 1px Primary Blue border. Used for tertiary actions or "Back" buttons.

### Form Inputs
- **Default:** 1px border (`#CCCCCC`), 8px radius. 
- **Focus:** 2px border in Focus Blue (`#0066CC`). The transition should be smooth (200ms).
- **Labels:** Open Sans SemiBold, positioned above the input.

### Cards
- White background, 12px radius, and subtle shadow. Used to group related form fields or display summary data.

### Stepper (Wizard)
- A horizontal progress bar located at the top of multi-step processes. Completed steps use Success Green, active steps use Focus Blue, and pending steps use Control Gray.

### Feedback
- **Alerts:** Full-width or card-based with high-contrast icons. Use Success Green for confirmations and Error Red for validation failures.