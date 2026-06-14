# Portfolio Website

Personal portfolio website for Rahul Singh, Senior Java Fullstack Developer.

**Live Site**: https://rahulsingh14769-alt.github.io/

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: lucide-react

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

**Note**: After the first deploy, if GitHub Pages is not already configured, go to the repository **Settings > Pages** and set:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` / (root)

## Project Structure

```
src/
├── components/       # Reusable UI components (Hero, About, Experience, Skills, Projects, Contact)
├── context/          # React context (ThemeContext)
├── data/             # Portfolio data (portfolioData.ts)
├── App.tsx           # Main app with routing
└── main.tsx          # Entry point

public/
└── 404.html          # GitHub Pages SPA fallback

dist/                 # Build output (generated)
```

## Customization

Edit `src/data/portfolioData.ts` to update:
- Personal information (name, title, bio)
- Experience entries
- Skills
- Projects
- Contact details

## Deployment

This is a GitHub Pages user site. The `npm run deploy` command pushes the production build to the `gh-pages` branch. For subsequent deployments, the `gh-pages` branch is automatically served at your GitHub Pages URL.