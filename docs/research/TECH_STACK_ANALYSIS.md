# Tech Stack Analysis

## Target Site: Lynxter.com

- **Framework:** Nuxt.js (detected through `_nuxt` directory markers)
- **UI Library:** Vuetify (detected through `v-theme` and `v-surface` class patterns)
- **Styling:** Custom CSS + Vuetify components
- **Icons:** Material Design Icons (`mdi-` classes detected)
- **Fonts:** Outfit, Roboto, GTAmerica

## Clone Project (Choice)

- **Framework:** Next.js 16 (App Router, React 19)
- **UI Library:** shadcn/ui (Radix primitives)
- **Styling:** Tailwind CSS v4 (using oklch design tokens mapped from RGB/HEX extraction)
- **Icons:** Lucide React (default) / Extracted SVGs where needed
- **Animations:** CSS transitions + Tailwind utilities (replacing Vuetify's built-in transitions)

## Mapping Details

- **Vuetify Themes:** Mapped to `:root` variables in `globals.css` with Tailwind v4 `@theme` integration.
- **Vuetify Components:** Re-implemented using shadcn/ui primitives for maximum flexibility (e.g., `v-btn` → `Button`, `v-card` → `Card`).
- **Icons:** Extracting raw SVGs to `src/components/icons.tsx` to maintain 1:1 visual fidelity with Lynxter's bespoke icons.
