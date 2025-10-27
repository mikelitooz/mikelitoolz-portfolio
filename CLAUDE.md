# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for a fullstack developer and AI automation builder. The site showcases development services, project portfolio, and automation capabilities. It uses the App Router architecture with TypeScript and Tailwind CSS v4.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack on http://localhost:3000

### Building for Production
```bash
npm run build
```
Creates an optimized production build using Turbopack

### Starting Production Server
```bash
npm start
```
Starts the production server (requires a build first)

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js TypeScript configuration

## Architecture

### Application Structure
- **App Router**: Uses Next.js 15 App Router (`src/app/`)
- **Client Components**: Most components are client-side (`"use client"`) for interactivity
- **Page Structure**: Two main routes:
  - `/` - Homepage with services, projects, about, and contact sections
  - `/automation` - Dedicated page for AI automation services

### Component Organization
Components are organized in `src/components/` as reusable UI modules:
- `navbar.tsx` - Fixed navigation with scroll detection and active route highlighting
- `hero-section.tsx` - Reusable hero with title, subtitle, and dual CTAs
- `project-card.tsx` - Card component for displaying projects/case studies
- `section-title.tsx` - Consistent section headers
- `step-card.tsx` - Step-by-step process visualization

### Styling System
- **Framework**: Tailwind CSS v4 with PostCSS
- **Theme**: Custom design system using CSS variables in `globals.css`
- **Color Scheme**: Dark theme with warm earth tones (background: `#0e0904`, accent: `#d4a574`)
- **Design Tokens**: All colors defined as CSS custom properties for consistency
- **Utilities**: `cn()` helper in `src/lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional styling

### Path Aliases
- `@/*` maps to `src/*` for clean imports

### TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- Next.js plugin integration for type checking

## Key Technical Details

### Fonts
Uses Google Fonts (Geist and Geist Mono) loaded via `next/font/google` in the root layout

### Navigation Behavior
- Fixed navbar with backdrop blur on scroll
- Active route highlighting using `usePathname()`
- Smooth transitions and hover states

### Image Assets
Project images are stored in `/public` with descriptive names:
- Portfolio projects: `saas-dashboard.jpg`, `ai-content-generator.jpg`, etc.
- Automation case studies: `customer-support-ai.jpg`, `lead-automation.jpg`, etc.
- Placeholder assets available for prototyping

### Client-Side Interactivity
- Scroll detection for navbar styling
- Smooth anchor navigation for in-page sections (`#projects`, `#contact`)
- Route-based active states

## Content Structure

The site follows a founder-focused messaging strategy:
- Services section highlights MVP development, automation, and UI/UX
- Projects showcase practical implementations with tech stacks
- Automation page details process (Understand → Design → Deploy)
- Case studies demonstrate real-world applications

## Build Configuration

### Next.js Config
Minimal configuration in `next.config.ts` - defaults are used

### ESLint
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`

### Turbopack
Both dev and build commands use `--turbopack` flag for faster compilation
