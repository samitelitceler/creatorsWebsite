import { cn } from "./utils";

// Typography class combinations
export const typography = {
  // Headings
  h1: "heading-1",
  h2: "heading-2", 
  h3: "heading-3",
  h4: "heading-4",
  
  // Subheadings
  subheading: "subheading",
  
  // Body text
  bodyLarge: "body-large",
  bodyMedium: "body-medium", 
  bodySmall: "body-small",
  
  // Captions and small text
  caption: "caption",
} as const;

// Typography function that combines classes
export function getTypographyClass(
  variant: keyof typeof typography,
  additionalClasses?: string
) {
  return cn(typography[variant], additionalClasses);
}

// Font family utilities
export const fontFamilies = {
  heading: "font-[var(--font-heading)]",
  body: "font-[var(--font-body)]",
} as const;

// Font size utilities (matching our CSS variables)
export const fontSizes = {
  xs: "text-xs",      // 12px
  sm: "text-sm",      // 14px
  base: "text-base",  // 16px
  lg: "text-lg",      // 18px
  xl: "text-xl",      // 20px
  "2xl": "text-2xl",  // 24px
  "3xl": "text-3xl",  // 30px
  "4xl": "text-4xl",  // 36px
  "5xl": "text-5xl",  // 48px
  "6xl": "text-6xl",  // 60px
} as const;

// Line height utilities
export const lineHeights = {
  tight: "leading-tight",     // 1.25
  normal: "leading-normal",   // 1.5
  relaxed: "leading-relaxed", // 1.75
} as const;

// Font weight utilities
export const fontWeights = {
  normal: "font-normal",   // 400
  medium: "font-medium",   // 500
  semibold: "font-semibold", // 600
  bold: "font-bold",       // 700
} as const; 