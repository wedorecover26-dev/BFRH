# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, `eslint.config.mjs`)

## Architecture

Next.js 16 App Router with React 19, TypeScript, and Tailwind CSS v4. Single-page site for Brighter Futures Recovery Homes (sober living organization).

- **App directory**: `src/app/` — layout, page, and global styles
- **Components**: `src/components/` — one file per section (Header, Hero, About, MissionVision, WhatWeOffer, Contact, Footer)
- **Path alias**: `@/*` maps to `./src/*`
- **React Compiler**: enabled in `next.config.ts`
- **Styling**: Tailwind CSS v4 via PostCSS; custom color palette defined in `src/app/globals.css` using `@theme inline` (cream, gold, amber, brown, charcoal)
- **Fonts**: Geist and Geist Mono via `next/font/google`
- **ESLint**: flat config extending `next/core-web-vitals` and `next/typescript`

## Conventions

- Single-page layout with anchor-based navigation (#home, #about, #program, #contact)
- Client components only where needed (Header for mobile menu state, Contact for form state)
- No external images — gradients, SVG icons, and colored elements only
- Warm gold/amber/brown color palette throughout; no dark mode
- Contact form is frontend-only (no backend submission yet)
- Domain: betterfuture26.com | Contact: wedorecover@betterfuture26.com | Phone: (316) 665-5226
