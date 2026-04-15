# Sprintly Partners Landing Page

A stunning, high-converting landing page for Sprintly Partners — a San Francisco-based startup accelerator.

## Features

- **Dark Premium Design**: Sophisticated dark theme (#282828) with gold accents
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive**: Fully responsive design for all devices
- **Sections Included**:
  - Hero with stats
  - Services/What We Do (6 service cards)
  - Why Sprintly (value proposition with stats)
  - How It Works (4-step process)
  - Testimonials (6 founder testimonials)
  - CTA Section
  - Footer

## Tech Stack

- React + TypeScript
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

Adapted from ElevenLabs' design system with Sprintly's dark theme:

- **Primary**: #282828 (Mine Shaft) - Dark background
- **Accent**: #c9a86c (Gold) - CTA buttons, highlights
- **Typography**: Inter font family
- **Shadows**: Multi-layered shadow system with warm tints
- **Animations**: Smooth, elegant transitions

## Project Structure

```
sprintly-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── WhySprintly.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Credits

Built for Sprintly Partners - empowering startups to achieve their full potential.
