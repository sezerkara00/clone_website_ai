# Tech Stack Analysis

## Target Site: innovatiq.com

- **Framework:** TYPO3 (detected via directory structure/headers often used in German industrial sites, but we'll use Next.js)
- **Styling:** Custom CSS / Bootstrap (common for these types of sites)
- **Icons:** Custom SVGs / Font Awesome (replacing with Lucide/Extracted SVGs)
- **Fonts:** Roboto, sans-serif
- **Animations:** Standard CSS transitions

## Clone Project (Choice)

- **Framework:** Next.js 16 (App Router, React 19)
- **UI Library:** shadcn/ui (Radix primitives)
- **Styling:** Tailwind CSS v4 (using oklch design tokens mapped from HEX extraction)
- **Icons:** Lucide React (default) / Extracted SVGs where needed
- **Animations:** CSS transitions + Tailwind utilities

## Mapping Details

- **Innovatiq Colors:** Mapped to `:root` variables in `globals.css` with Tailwind v4 `@theme` integration.
- **Components:** Re-implemented using shadcn/ui primitives.
- **Icons:** Extracting raw SVGs to `src/components/icons.tsx` to maintain 1:1 visual fidelity.
