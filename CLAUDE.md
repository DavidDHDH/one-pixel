# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Create production build
- **Start production**: `npm start` - Start production server
- **Linting**: `npm run lint` - Run ESLint
- **Type checking**: `npm run tsc` - Run TypeScript compiler without emitting files

## Architecture Overview

This is a **Next.js 14 App Router** portfolio website for One Pixel, a web development agency based in Saint-Barthélemy. The site showcases web development projects and services.

### Key Architecture Patterns

**Component-Based Structure**: Components are organized by feature/page sections:
- `components/` - Organized into logical groups (hero-section, projects, testimonials, etc.)
- Each major section has its own folder with related components
- `ui/` subfolder contains reusable UI components (shadcn/ui based)

**Data Management**: 
- Project data centralized in `datas/projects.tsx` with comprehensive TypeScript types
- Projects support dynamic routing via slug-based pages at `/projects/[slug]`
- Testimonials stored in `datas/testimonials.tsx`

**Styling**: 
- **TailwindCSS** with custom theme extensions in `tailwind.config.ts`
- Custom color palette focused on "sand" tones for luxury branding
- Custom animations for marquee, shiny text effects

**Project Pages Architecture**:
- Dynamic project pages use comprehensive data structure from `datas/projects.tsx`
- Each project can have: features, tech stack, carousel images, bento grid items, process timeline, results
- Support for different project types (main projects vs secondary projects)

### Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Animations**: Framer Motion, custom CSS animations
- **Icons**: Tabler Icons, Heroicons, Lucide React
- **3D/Visual**: React Three Fiber, shader gradients for visual effects
- **Analytics**: Vercel Analytics
- **Other**: Calendly integration, Lottie animations

### File Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - Feature-organized React components  
- `datas/` - Centralized data files (projects, testimonials)
- `lib/` - Utility functions and constants
- `public/` - Static assets organized by type (images, animations, etc.)

### SEO & Content
- Comprehensive SEO metadata handling in project pages
- Structured data (JSON-LD) for organization info
- Multi-language support considerations (French primary)
- Image optimization with Next.js Image component

The site emphasizes luxury web development services for Caribbean/French Antilles market with focus on Saint-Barthélemy clientele.