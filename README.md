# Perfionix AI Website

A modern, SEO-optimized marketing website for **Perfionix AI** - Empowering Industries with Intelligent Innovation. Built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion**, featuring AI-powered products, comprehensive SEO optimization, and enterprise-grade contact workflows.

## Latest Updates (December 2025)

- **Comprehensive SEO Optimization** with structured data (JSON-LD), meta tags, and sitemap
- **New AI Products Added**: AXIO AI, DocNavigator AI, Friday Voice Assistant, RenewForecast
- **Professional UI Enhancements** with blue/indigo color schemes
- **PWA Support** with manifest.json
- **Enhanced robots.txt** for better search engine crawling
- **MongoDB Atlas** integration for contact and collaboration forms
- **Gmail SMTP** for email notifications

## Features

- **AI Products Showcase** - AXIO AI, DocNavigator, Friday Voice Assistant, RenewForecast
- **Immersive Hero** with gradient accents, responsive CTAs, and smooth animations
- **Industry Solutions** highlighting cross-domain AI applications
- **Interactive Collaboration** workflow with MongoDB persistence and email notifications
- **AI Chat Assistant** widget with Gemini API integration
- **Modern Contact Section** with social cards and Google Maps integration
- **SEO Optimized** with structured data, meta tags, sitemap, and robots.txt
- **Performance Tuning** (lazy-loaded media, optimized animations, content-visibility)
- **Responsive Design** with mobile-first approach

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide Icons](https://lucide.dev/) | Icons |
| [Nodemailer](https://nodemailer.com/) | Email delivery |
| [MongoDB Atlas](https://www.mongodb.com/atlas/database) | Database |
| [Google Gemini API](https://ai.google.dev/) | AI Chat |

## Project Structure

```
perfionix-ai-website/
├── app/
│   ├── page.tsx                # Home page
│   ├── about/                  # About Perfionix AI
│   ├── services/               # AI Services overview
│   ├── products/               # AI Products showcase
│   ├── industries/             # Industry-specific solutions
│   ├── team/                   # Team showcase
│   ├── collaboration/          # Partnership opportunities
│   ├── contact/                # Contact page
│   ├── layout.tsx              # Root layout with SEO
│   ├── sitemap.ts              # Dynamic sitemap
│   └── api/
│       ├── contact/            # Contact form handler
│       ├── collaboration/      # Collaboration form handler
│       └── chat/               # AI chat API
├── components/
│   ├── Hero.tsx                # Home hero section
│   ├── ProductsList.tsx        # Products showcase
│   ├── ChatWidget.tsx          # AI chat assistant
│   ├── Navbar.tsx              # Navigation
│   ├── Footer.tsx              # Footer
│   └── ...                     # Other components
├── lib/
│   ├── mongodb.ts              # MongoDB client helper
│   └── siteConfig.ts           # SEO & site configuration
├── public/
│   ├── robots.txt              # Search engine directives
│   ├── manifest.json           # PWA manifest
│   └── ...                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies & scripts
└── README.md                   # Documentation
```

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/perfionix-ai/perfionix-ai-website.git
   cd perfionix-ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the project root:
   ```env
   # Gmail SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your_gmail_app_password
   SMTP_FROM="Perfionix AI <your-email@gmail.com>"
   COLLABORATION_EMAIL_TO=connect@perfionixai.com

   # MongoDB Atlas Connection
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/perfionix?retryWrites=true&w=majority

   # Google Gemini API (for AI Chat)
   GEMINI_API_KEY=your_gemini_api_key
   ```

### Running the Project

#### Development Mode

```bash
# Start development server
npm run dev

# The site will be available at:
# http://localhost:3000
```

#### Development with Network Access

```bash
# Allow access from other devices on your network
npm run dev -- --hostname 0.0.0.0

# Access from other devices using your IP:
# http://your-ip-address:3000
```

#### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code checks |

## AI Products

### AXIO AI
All-in-One AI Productivity Platform with Smart Chat, Document Intelligence (DocIQ), Data Visualization (VizIQ), Smart Tasks, Quick Notes, and Reminders.

### DocNavigator AI
AI-powered documentation crawler and RAG system that transforms any documentation website into an intelligent knowledge base.
- **URL**: https://docsassistant.perfionixai.com/

### Friday AI Voice Assistant
Multilingual AI voice assistant with real-time speech recognition supporting Hindi, English, and regional languages.
- **URL**: https://voicebot.perfionixai.com/

### RenewForecast
AI-powered renewable energy forecasting system for solar and wind power plants with real-time weather integration.
- **URL**: https://renewforecast.aiproducts.tech/

## SEO Features

The website includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data (JSON-LD)**:
  - Organization schema
  - Professional Service schema
  - Website schema with search action
  - Software Products schema
  - FAQ schema for rich snippets
  - Breadcrumb schema
- **Sitemap**: Auto-generated with priorities
- **Robots.txt**: Configured for optimal crawling
- **PWA Manifest**: For app-like experience
- **Canonical URLs**: Prevent duplicate content issues

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero and highlights |
| `/about` | Company overview, mission, and values |
| `/services` | AI services and solutions |
| `/products` | AI products showcase |
| `/industries` | Industry-specific AI solutions |
| `/team` | Team members and leadership |
| `/collaboration` | Partnership opportunities |
| `/contact` | Contact information and form |

## Form Workflows

### Contact Form
- Submits to `POST /api/contact`
- Validates inputs and stores in MongoDB `contactMessages` collection
- Sends email notification via Gmail SMTP

### Collaboration Form
- Submits to `POST /api/collaboration`
- Stores in MongoDB `collaborationRequests` collection
- Sends detailed partnership inquiry email

## Database Operations

```bash
# Connect to MongoDB using mongosh
mongosh "mongodb+srv://username:password@cluster.mongodb.net/perfionix"

# View collections
show collections

# Query recent submissions
db.contactMessages.find().sort({ createdAt: -1 }).limit(5)
db.collaborationRequests.find().sort({ createdAt: -1 }).limit(5)
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

```bash
# Build the project
npm run build

# Start with PM2 (production)
pm2 start npm --name "perfionix-ai" -- start
```

## Performance Optimizations

- Lazy-loaded images and videos
- Dynamic component imports
- Optimized font loading with `display: swap`
- Content-visibility for below-fold content
- Reduced animation delays for instant feel
- Image optimization with Next.js Image component

## Contact

- **Website**: https://www.perfionixai.com
- **Email**: connect@perfionixai.com
- **Phone**: +91 6261330148
- **Location**: Nagpur, Maharashtra, India
- **LinkedIn**: https://www.linkedin.com/company/perfionix-ai-solutions
- **Instagram**: https://www.instagram.com/perfionix_ai.io

## Security Notes

- Store all credentials in `.env.local` (not committed to Git)
- Use Google App Passwords for SMTP (not regular passwords)
- Rotate MongoDB credentials periodically
- Keep API keys secure and never expose in client-side code

## License

Copyright 2025 Perfionix AI Technology Pvt Ltd. All rights reserved.

---

> Built with passion to showcase Perfionix AI's innovation across industries.
