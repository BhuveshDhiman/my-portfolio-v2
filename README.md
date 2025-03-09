# Bhuvesh Dhiman - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth animations with Framer Motion
- SEO optimized

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Heroicons
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bhuveshdhiman/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components/ui`: Reusable UI components
- `src/components/sections`: Page sections (Hero, About, Experience)
- `src/lib`: Utility functions and helpers
- `src/assets`: Static assets
- `public`: Public assets

## Customization

To customize this portfolio for your own use:

1. Update the personal information in the components
2. Update the experience details in `src/components/sections/Experience.tsx`
3. Customize the colors in `tailwind.config.js` and `src/app/globals.css`

## Deployment

This portfolio can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbhuveshdhiman%2Fportfolio-v2)

## License

This project is open source and available under the [MIT License](LICENSE).
