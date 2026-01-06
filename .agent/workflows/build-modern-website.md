---
description: Build a Awwwards-tier Website with Next.js, Tailwind, and GSAP.
---

# Build Modern Website Workflow

This workflow orchestrates the creation of an Awwwards-tier website using the "Vibe Coding" methodology.

## Step 1: Initialize Project (Vibe Stack)

**Context Check**: Before running, confirm if the current directory is already a Next.js project.

1.  **Check for `package.json`**: Read the file.

    - **IF** it contains `"next"`: **SKIP** the scaffold command (Step 1.2) and proceed directly to installing dependencies (Step 1.4).
    - **IF** it does not exist: Proceed to Step 1.2.

2.  Run the following command to scaffold the app (replace `[project-name]` with the desired name, default to `vibe-web` if not specified):
    ```bash
    npx -y create-next-app@latest [project-name] --typescript --no-tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-git-init
    ```
3.  Navigate into the project directory (if a new one was created):
    ```bash
    cd [project-name]
    ```
4.  Install the "Physics & Motion" and Tailwind v4 dependencies:
    ```bash
    npm install gsap @studio-freight/lenis clsx tailwind-merge framer-motion react-icons tailwindcss@next @tailwindcss/postcss postcss
    ```

## Step 2: Inject Design DNA (Colors & Fluid Typography)

We must replace the default styling with our "Luxury" system using Tailwind v4.

1.  **Configure Tailwind v4 (`app/globals.css`)**:

    - Replace the entire content of `app/globals.css` with the **Midnight Opulence** theme and **Fluid Typography**:

      ```css
      @import "tailwindcss";

      @theme {
        /* Midnight Opulence Palette */
        --color-luxury-black: #0c0c0c;
        --color-luxury-gold: #efc07b;
        --color-luxury-charcoal: #1a1a2e;

        /* Fluid Typography Variables */
        --font-h1: clamp(3rem, 5vw + 1rem, 7.5rem);
        --font-body: clamp(1rem, 0.25vw + 1rem, 1.125rem);
      }

      /* Base Styles */
      @layer base {
        html,
        body {
          background-color: var(--color-luxury-black);
          color: white;
        }
      }

      /* Utilities */
      @utility bg-noise {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        pointer-events: none;
        z-index: 50;
        filter: contrast(120%) brightness(100%);
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      }
      ```

## Step 3: Enforce "Antigravity Rules" (.cursorrules)

Create a `.cursorrules` file in the project root to enforce quality on future generations.

- **Content**:

  ```markdown
  High-End Digital Presence: Vibe Coding Blueprint
  You are the Lead Creative Technologist and Architect. Your goal is to build a digital experience that surpasses Awwwards-winning studio standards ($100k+ tier). You will operate using the Vibe Coding workflow: priority is on emotion, rhythm, and motion physics over generic modular components.

  1. Core Design Philosophy
     Transit-Scale Typography: Treat text as the primary visual anchor. Use the "train" aesthetic: industrial honesty, absolute legibility, and dramatic scale contrast.

  Minimalist Luxury: Use "Quietude"—silence as design. White space is an active separator that creates prestige.

  Intentional Imbalance: Use asymmetrical layouts to signal human craftsmanship. Break the grid with overlapping elements and unexpected navigation.

  2. Fluid Typography & Responsive Scaling
     To maintain a "premium" feel across all devices, you must avoid static font sizes and abrupt media query jumps. Use a fluid system where type scales harmoniously with the viewport.

  The Fluid Scaling Formula
  Implement typography using the CSS clamp() function. This ensures text never becomes unreadably small on mobile or oversized on ultrawide displays.

  Syntax: font-size: clamp(minSize, preferredValue, maxSize)

  Preferred Value Calculation: Use a mix of viewport units (vw) and a static intercept to allow zooming without breaking the layout.

  Standard Growth Rule: A rate of 0.25vw provides a 0.25px increase for every 100px increase in viewport width.

  Device-Specific Constraints
  Element Mobile (<768px) Desktop (>1440px) Logic / Ratio
  Hero H1 48px - 64px 120px - 250px Perfect Fourth (1.333)
  Body Copy 16px - 19px 18px - 24px Optimal readability
  Line Height 1.6 to 1.8 1.5 to 1.7 Looser on mobile
  Letter Spacing +1% to +2% −2% to −5% Looser on small sizes
  Max Width 100% 75 characters The "Measure" rule
  Hierarchy Ratios
  Maintain mathematical harmony between sizes using the Major Third (1.25) scale for a balanced look or the Golden Ratio (1.618) for dramatic editorial contrast.

  Example (1.25 Ratio): If Body is 16px, then H4=25px,H3=31px,H2=39px,H1=49px.

  3. Advanced Motion Orchestration
     Motion is a functional narrative tool that guides attention and provides tactile feedback.

  Scroll Physics and "Liquid" Movement
  Liquid Scrolling: Implement Lenis or GSAP ScrollSmoother to normalize user inputs. Use a lerp value of 0.1 for a soft, gliding feel.

  Cinematic Scrolling: Content should unfold layer-by-layer, turning the static page into an engaging film.

  Micro-Interactions and Tactical Feedback
  Magnetic Elements: Primary CTAs must have a "magnetic pull" effect where the element subtly follows the cursor position.

  Staggered Reveals: Animate text using a character-by-character stagger (Ref: The Creative Website Manual image). Use a stagger value of 0.02s to 0.05s seconds.

  Interaction Type Recommended Easing Cubic Bezier / GSAP Value
  Bespoke Entrance Power4.out 0.19, 1, 0.22, 1
  Luxury Reveal Expo.out 0.7, 0, 0.3, 1
  Tactile Bounce Back.out(1.7) 0.175, 0.885, 0.32, 1.275 4. Visual Layer: Texture and Chromatics
  The Saturated Luxury Palette: Use Midnight Opulence (#1A1A2E / #EFC07B) or Obsidian Elegance (#0C0C0C / #BEA98E). Limit to three tones.

  Tactile Depth (SVG Noise): Apply a global grain overlay (opacity 0.05–0.15) to remove the flat "AI look".

  XML
  <svg style="position:fixed;top:0;left:0;width:100%;height:100%;opacity:0.05;pointer-events:none;z-index:9999;">
  <filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/></filter>
  <rect width='100%' height='100%' filter='url(#noise)'/>
  </svg> 5. Development Directives (Antigravity Rules)
  Constraint 1: NEVER use justified text. Use text-align: left with ragged-right edges.

  Constraint 2: Touch targets must be a minimum of 44px for comfortable mobile tapping.

  Constraint 3: Use clamp() for all padding and margins to ensure consistent spacing transitions.

  Constraint 4: Maintain "MX" (Machine Experience). Ensure Semantic HTML5 (<article>, <section>) is flawless for AI consumption.

  6. Task Plan (Vertical Slice Execution)
     Slice 0: Physics & Fluidity. Establish Lenis/GSAP foundations and set the root clamp() font system.

  Slice 1: Hero Narrative. Implement the massive transit-scale headline with fluid scaling and staggered entrance motion.

  Slice 2: Texture & Light. Layer SVG noise and dark-mode gradients across the background.

  Slice 3: Interactive Rhythm. Add magnetic pull to all primary CTAs and verify touch targets are ≥44px.

  Slice 4: Scrollytelling Blocks. Build the Bento or Asymmetrical sections with ScrollTrigger reveals.
  ```

## Step 4: Scaffold Core Components

Create the foundational components.

1.  **`components/SmoothScroll.tsx`**: A client component wrapping children in ReactLenis.
2.  **`components/ui/MagneticButton.tsx`**: A button that follows mouse position (desktop only).
    - _Constraint_: Use `matchMedia('(hover: hover)')` to disable effect on touch.

## Step 5: Assembly

1.  Wrap `app/layout.tsx` children with the `SmoothScroll` component.
2.  Add the `.bg-noise` div to `app/layout.tsx`.

---

**Usage**: When asked to "start the project" or "build the site", run this workflow step-by-step.
