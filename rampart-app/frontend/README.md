# Rampart Defence Engineering

Marketing website for **Rampart Defence Engineering** - armoured vehicle sales, repair, refurbishment, and custom armouring for civilian and military clients.

## Features

- Home page with hero, capabilities, service highlights, and range tiles
- Vehicle catalogue with category filtering and detail pages
- Services, case studies, about, and contact with enquiry form
- Responsive layout with shared navigation and footer

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/), [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm (or another package manager compatible with `package-lock.json`)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run the production server
npm start

```

## Project Structure

```
app/              # Routes and pages (App Router)
components/       # UI, layout, and feature components
hooks/            # Custom React hooks
lib/              # Constants, utilities, and mock data
public/           # Static assets (images, placeholders)
styles/           # Global CSS and design tokens
types/            # Shared TypeScript types
```

## Environment

No environment variables are required for local development. Vehicle, team, and case study content is served from mock data under `lib/mock-data/`.

## License

Private - all rights reserved.
