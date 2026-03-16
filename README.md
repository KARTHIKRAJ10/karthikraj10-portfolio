# Karthikraj Subramanian — Data & AI Portfolio

A premium, recruiter-ready portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page (composes all sections)
├── components/
│   ├── Navbar.tsx            # Fixed navigation with scroll spy
│   ├── HeroSection.tsx       # Hero with animated entrance
│   ├── AboutSection.tsx      # Professional summary + capability cards
│   ├── FeaturedProjectsSection.tsx  # 8 project cards grid
│   ├── ProjectCard.tsx       # Reusable project card component
│   ├── LiveDemosSection.tsx  # 2 interactive demo showcases
│   ├── SkillsSection.tsx     # Skills organized by domain
│   ├── ArchitectureSection.tsx  # 8-step build process
│   ├── ExperienceSection.tsx # Timeline + education + CTAs
│   ├── ContactSection.tsx    # Contact CTAs
│   └── Footer.tsx            # Footer with social links
└── data/
    └── portfolio.ts          # All content data (edit here)
```

## Customization

### Content Updates
All portfolio content lives in `src/data/portfolio.ts`. Edit this single file to update:
- Projects (titles, descriptions, stacks, links)
- Demo details
- Skills categories
- Architecture steps
- Work experience
- Education

### Design Tokens
Colors, fonts, and spacing are configured in:
- `tailwind.config.ts` — Tailwind theme extensions
- `src/app/globals.css` — Component-level styles

### Adding New Projects
Add a new object to the `FEATURED_PROJECTS` array in `portfolio.ts`:

```typescript
{
  title: "Your Project Name",
  category: "Domain Category",
  problem: "One-line business problem",
  description: "Full description...",
  stack: ["Tool1", "Tool2"],
  value: "Business impact statement",
  links: { demo: "https://...", github: "https://...", casestudy: "https://..." },
}
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Git Integration
1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click Deploy — Vercel auto-detects Next.js

### Option 3: Manual
```bash
npm run build
vercel --prod
```

No environment variables are required for the base portfolio.

## Integrating Live Demos

### Streamlit Apps (Recommended)
1. Build your Streamlit demo app separately
2. Deploy to [Streamlit Community Cloud](https://streamlit.io/cloud)
3. Update the demo button links in `portfolio.ts` or embed via iframe:

```typescript
// In LiveDemosSection.tsx, replace the mock preview with:
<iframe
  src="https://your-app.streamlit.app/?embedded=true"
  className="w-full h-[500px] border-0 rounded-lg"
/>
```

### Hugging Face Spaces
1. Deploy your demo to [Hugging Face Spaces](https://huggingface.co/spaces)
2. Embed using the Spaces embed URL:

```html
<iframe src="https://your-username-your-space.hf.space" />
```

## Future Enhancements

- [ ] Dark/light theme toggle
- [ ] Blog section with MDX
- [ ] Case study pages (individual routes per project)
- [ ] Framer Motion page transitions
- [ ] Analytics integration (Plausible/Umami)
- [ ] Contact form with email sending (Resend/SendGrid)
- [ ] SEO: structured data (JSON-LD), sitemap, robots.txt
- [ ] Performance: image optimization, lazy loading sections
- [ ] Embedded Streamlit demos via iframe
- [ ] PDF resume auto-download
- [ ] Testimonials / recommendations section

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript              |
| Styling     | Tailwind CSS            |
| Fonts       | Playfair Display + DM Sans |
| Deployment  | Vercel                  |
| Demos       | Streamlit / HF Spaces   |

## License

Personal portfolio — all content © Karthikraj Subramanian.
