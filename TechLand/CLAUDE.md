# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev        # Start development server (port 8080)
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite with SWC
- **Styling:** Tailwind CSS with CSS variables for theming
- **Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router v6
- **State:** React Query for server state
- **Forms:** React Hook Form with Zod validation

## Project Architecture

### Path Aliases
Use `@/` to import from `src/` directory (configured in tsconfig.json and vite.config.ts).

### Directory Structure
- `src/pages/` - Route components (each file corresponds to a route in App.tsx)
- `src/components/` - Shared components used across pages
- `src/components/ui/` - shadcn/ui components (do not modify directly unless customizing)
- `src/components/blog/` - Blog-specific components
- `src/components/who-we-help/` - Industry/client section components
- `src/lib/utils.ts` - `cn()` utility for merging Tailwind classes
- `src/hooks/` - Custom React hooks (`use-mobile`, `use-toast`)
- `src/assets/` - Static images

### Routing
Routes are defined in `App.tsx`. Add new routes above the catch-all `*` route. The app uses `ScrollToTop` component to reset scroll position on navigation.

### Styling System
- Theme colors use CSS variables defined in `src/index.css`
- Dark mode supported via `class` strategy (add `.dark` class to root)
- Primary color: Teal (hsl 174)
- Custom CSS classes: `.gradient-text`, `.tech-glow`, `.animate-float`, `.animate-slide-up`

### Adding shadcn/ui Components
Use the shadcn CLI to add new components, which will be placed in `src/components/ui/`.
