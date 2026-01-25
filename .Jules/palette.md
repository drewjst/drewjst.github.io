# Palette's Journal

## 2025-02-18 - Accessibility in Custom Components
**Learning:** Custom interactive elements (like styled `<a>` tags) often lack default browser focus indicators that standard buttons/links have if `outline` is reset, or if the design system doesn't enforce a global focus ring.
**Action:** Always verify `focus` states on custom components and add explicit `focus:ring` utilities when using Tailwind.
