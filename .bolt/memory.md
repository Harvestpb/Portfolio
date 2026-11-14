# Project memory

## Product intent & audience

- Personal portfolio website with multiple sections, including an About Me section.
- Intended for production use; audience likely includes potential clients, employers, or collaborators.

## Brand personality & voice

- Production-worthy, polished presentation inferred from portfolio context.
- Global design-quality preferences are defined in `.bolt/prompt`; not restated here.

## Visual design & UX direction

- About Me section includes a portrait image as a key visual element.
- Images are stored in the project's image folder; referenced by filename in the About section.
- Portfolio layout includes distinct sections (e.g., About Me) that can be edited independently.

## Decisions, constraints & rationale

- Framework: Vite + React (JSX), Tailwind CSS, Lucide React icons; no additional UI/icon packages unless explicitly requested.
- Import alias `@/` maps to `src/`.
- About section portrait image expected at filename `1733035251754.jpg`; the file must be added to the project's image folder to display.
- Project builds successfully via Vite after the About image reference update.

## Open questions & assumptions

- Exact image folder location (e.g., `public/`, `src/assets/`) is not confirmed; assumed to be the existing project image folder.
- Full portfolio section inventory and structure beyond About Me is unknown.
- Whether the `1733035251754.jpg` file has been/ will be added remains unresolved.