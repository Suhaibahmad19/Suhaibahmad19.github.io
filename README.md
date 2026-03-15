# Suhaib Ahmad — Portfolio

Premium personal portfolio website built with **Astro**, **TailwindCSS 4**, and **TypeScript**.

🌐 [Live Site](https://suhaibahmad19.github.io)

---

## ✨ Features

- 🚀 **Astro Static Site Generation** — Fast, zero-JS by default
- 🎨 **TailwindCSS 4** — Modern utility-first styling
- 🌙 **Dark / Light Mode** — Theme toggle with persistence
- 📱 **Fully Responsive** — Mobile-first design
- 🔍 **SEO Optimized** — Meta tags, OG, Twitter Cards, JSON-LD
- 📊 **Lighthouse 95+** — Optimized for performance
- ☁️ **GitHub Pages** — Automated deployment via GitHub Actions

## 📁 Project Structure

```
PORTFOLIO/
├── public/            # Static assets (favicon, robots.txt)
├── src/
│   ├── components/    # Reusable Astro components
│   ├── data/          # Typed data (projects, experience, tech)
│   ├── layouts/       # Base layout with SEO
│   ├── pages/         # Route pages (/, /about, /projects, etc.)
│   └── styles/        # Global CSS & TailwindCSS config
├── .github/workflows/ # CI/CD deployment
├── astro.config.mjs   # Astro configuration
└── package.json
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### GitHub Pages (Automated)

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repo settings → Source: **GitHub Actions**

### Manual Deploy

```bash
npm run build
# Upload the `dist/` folder to any static host
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, tech stack, featured projects, experience |
| `/about` | Bio, skills, and background |
| `/projects` | All projects with category filters |
| `/experience` | Work timeline |
| `/contact` | Contact form and info |

## 📬 Contact

- **Email**: suhaibraza42@gmail.com
- **LinkedIn**: [suhaibahmad42](https://linkedin.com/in/suhaibahmad42)
- **GitHub**: [Suhaibahmad19](https://github.com/Suhaibahmad19)

---

Built with ❤️ using [Astro](https://astro.build) & [TailwindCSS](https://tailwindcss.com)
