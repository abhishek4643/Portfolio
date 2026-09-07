# Portfolio

A high-performance personal portfolio and engineering showcase designed to present professional experience, architectural depth, and modern full-stack web applications with sub-second page loads and fluid interactive motion.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-0A66C2?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-ecru-five-i092te8cy9.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Platform-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## Project Overview

Portfolio serves as the central digital hub for technical competencies, featured engineering projects, and professional background. Engineered with Next.js 16 and React 19, the platform prioritizes Core Web Vitals, minimal client-side bundle overhead, and accessible design principles.

**Vision:** Deliver a seamless, modern web experience that reflects production-grade engineering standards through responsive layouts, clean typography, and interactive showcase modules.

---

## Live Deployment

Experience the live portfolio in production:
- **Live Application:** [https://portfolio-ecru-five-i092te8cy9.vercel.app](https://portfolio-ecru-five-i092te8cy9.vercel.app)
- **Deployment Status:** Active and Continuously Deployed via Vercel CI/CD
- **Target Audience:** Technical Recruiters, Engineering Managers, and Collaborators

---

## Key Features

- **Next.js 16 App Router Architecture:** Server-first rendering ensuring rapid initial content delivery and optimal search indexing.
- **Micro-Interactions with Framer Motion:** Fluid 60fps page transitions, hover states, and scroll-linked animations.
- **Tailwind CSS v4 Engine:** Modern CSS compilation utilizing zero-runtime CSS variables and container queries.
- **Comprehensive Project Showcase:** Interactive case studies detailing architecture, technical stack, and direct repository/demo access.
- **Responsive and Accessible Layout:** WCAG AA compliant navigation with complete keyboard access and dark mode optimization.
- **SEO & Social Graph Optimization:** Dynamic OpenGraph preview images, structured JSON-LD schemas, and custom meta tags.

---

## Use Cases

### For Technical Recruiters & Hiring Managers
- Rapidly evaluate demonstrated proficiency in modern frontend frameworks (Next.js 16, React 19, TypeScript).
- Review verified source code, architecture patterns, and live production deployments.
- Access formatted resume, contact channels, and career trajectory milestones.

### For Engineering Peers & Collaborators
- Reference implementation for configuring Next.js 16 with Tailwind CSS v4 and Framer Motion 12.
- Clean component isolation, reusable utility functions, and type-safe data schemas.

---

## System Architecture

```
+---------------------------------------------------------------+
|                    Client Browser / Edge                      |
+---------------------------------------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|                 Next.js 16 App Router Layer                   |
|  +---------------------+  +--------------------------------+  |
|  | Server Components   |  | Client Islands (Framer Motion) |  |
|  +---------------------+  +--------------------------------+  |
+---------------------------------------------------------------+
                                |
                                v
+---------------------------------------------------------------+
|                Styling & Assets (Tailwind CSS v4)             |
+---------------------------------------------------------------+
```

---

## Technology Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 16.2 (App Router, Server Components) |
| Core Library | React 19.2, React DOM 19.2 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4, PostCSS |
| Animation | Framer Motion 12 |
| Iconography | Lucide React |
| Tooling & Linting | ESLint 9, Next ESLint Plugin |
| Hosting & CI/CD | Vercel Platform |

---

## Project Structure

```
Portfolio/
├── app/                  # Next.js App Router route segments and pages
│   ├── layout.tsx        # Root layout with font definitions and metadata
│   ├── page.tsx          # Homepage view and component composition
│   └── globals.css       # Global styles and Tailwind CSS v4 imports
├── components/           # Modular, reusable UI components
│   ├── About.tsx         # Professional biography and key competencies
│   ├── Contact.tsx       # Contact forms and communication channels
│   ├── Hero.tsx          # Interactive header with headline typography
│   ├── Navbar.tsx        # Sticky navigation bar with mobile menu
│   └── Projects.tsx      # Project showcase gallery with live preview links
├── lib/                  # Utility helpers and constant definitions
├── public/               # Static assets (images, documents, icons)
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration options
├── package.json          # Package manifest and dependency declarations
└── tsconfig.json         # TypeScript compiler configuration
```

---

## Getting Started

### Prerequisites
- Node.js >= 18.17.0
- npm >= 9.0.0 (or pnpm / yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishek4643/Portfolio.git
   cd Portfolio
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Launch local development server:
   ```bash
   npm run dev
   ```

4. Access the application at:
   ```
   http://localhost:3000
   ```

### Production Build

To test the production compilation locally:
```bash
npm run build
npm start
```

---

## Future Roadmap

- Integration of interactive 3D elements using Three.js / React Three Fiber.
- Automated blog engine powered by MDX and syntax-highlighted code blocks.
- Real-time GitHub activity feed via GitHub GraphQL API.
- Web analytics telemetry integration with privacy-first tracking.

---

## License

This project is open-source and available under the MIT License.
