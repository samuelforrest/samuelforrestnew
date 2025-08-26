# Portfolio V3 🚀

> **The third iteration of my personal portfolio website - [www.samuelforrest.me](https://www.samuelforrest.me)**

A modern, responsive portfolio website built with Next.js, featuring a markdown-based blog system, animated UI components, and a clean, professional design.

## ✨ Features

- **🎨 Modern Design**: Clean, responsive UI with dark/light theme support
- **📝 Markdown Blog**: File-based blog system with full markdown support
- **⚡ Animations**: Smooth animations using Framer Motion
- **📱 Responsive**: Mobile-first design that works on all devices
- **🎯 Performance**: Optimized for speed and SEO
- **🌙 Theme Toggle**: Dark and light mode support
- **📊 Analytics**: Google Analytics integration
- **🔍 TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Next.js 14.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 18.3.1](https://react.dev/)** - UI library
- **[TypeScript 5.4.5](https://www.typescriptlang.org/)** - Type safety

### **Styling & UI**
- **[Tailwind CSS 3.4.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
  - Avatar, Icons, Label, Separator, Slot, Tooltip
- **[Framer Motion 12.4.3](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### **Content Management**
- **[Gray Matter 4.0.3](https://github.com/jonschlinkert/gray-matter)** - Frontmatter parsing
- **[React Markdown 9.0.1](https://github.com/remarkjs/react-markdown)** - Markdown rendering
- **[Rehype & Remark](https://unifiedjs.com/)** - Content processing pipeline
  - `rehype-pretty-code` - Syntax highlighting
  - `remark-parse` & `remark-rehype` - Markdown processing
- **[Shiki 1.7.0](https://shiki.matsu.io/)** - Syntax highlighting

### **Utilities**
- **[clsx](https://github.com/lukeed/clsx)** - Conditional CSS classes
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging

### **Development Tools**
- **[ESLint 8.57.0](https://eslint.org/)** - Code linting
- **[PostCSS 8.4.38](https://postcss.org/)** - CSS processing
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Prose styling

## 📁 Project Structure

```
portfolio-v3/
├── 📄 README.md
├── ⚙️ next.config.mjs          # Next.js configuration
├── ⚙️ tailwind.config.ts       # Tailwind CSS configuration
├── ⚙️ tsconfig.json           # TypeScript configuration
├── 📦 package.json            # Dependencies and scripts
├── 
├── 📁 public/                 # Static assets
│   ├── 🖼️ me.jpeg             # Profile image
│   ├── 🎥 *.mp4               # Demo videos
│   ├── 🖼️ *.png/*.jpg         # Project images
│   └── 📄 *.svg               # Icons and logos
├── 
├── 📁 content/                # Content files
│   └── 📁 blog/               # Blog posts in markdown
│       ├── 📝 my-coding-journey.md
│       ├── 📝 future-of-aviation.md
│       └── 📝 building-with-nextjs.md
├── 
└── 📁 src/
    ├── 📁 app/                # Next.js App Router
    │   ├── 📄 layout.tsx      # Root layout
    │   ├── 📄 page.tsx        # Homepage
    │   ├── 🌍 globals.css     # Global styles
    │   ├── 
    │   └── 📁 blog/           # Blog section
    │       ├── 📄 page.tsx    # Blog listing page
    │       └── 📁 [slug]/     # Dynamic blog posts
    │           └── 📄 page.tsx
    ├── 
    ├── 📁 components/         # Reusable components
    │   ├── 📄 navbar.tsx      # Navigation
    │   ├── 📄 theme-provider.tsx
    │   ├── 📄 mode-toggle.tsx
    │   ├── 
    │   ├── 📁 ui/             # UI components
    │   │   ├── 📄 button.tsx
    │   │   ├── 📄 card.tsx
    │   │   ├── 📄 badge.tsx
    │   │   └── 📄 *.tsx
    │   ├── 
    │   └── 📁 magicui/        # Animated components
    │       ├── 📄 blur-fade.tsx
    │       ├── 📄 blur-fade-text.tsx
    │       ├── 📄 dock.tsx
    │       └── 📄 *.tsx
    ├── 
    ├── 📁 data/               # Static data
    │   ├── 📄 blog.ts         # Blog configuration
    │   ├── 📄 project.ts      # Project data
    │   └── 📄 resume.tsx      # Resume/CV data
    ├── 
    └── 📁 lib/                # Utility functions
        ├── 📄 utils.ts        # General utilities
        └── 📄 blog.ts         # Blog utilities
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** 
- **npm** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samuelforrest/portfolio-v3.git
   cd portfolio-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Add your environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Blog System

The blog uses a file-based markdown system:

### Adding a New Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter metadata:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-01-15"
   author: "Samuel Forrest"
   category: "Technology"
   preview: "Brief description of your post"
   cover_image: "/path/to/image.jpg"
   tags: ["tag1", "tag2", "tag3"]
   slug: "your-post-slug"
   ---
   
   Your content here...
   ```

### Supported Features
- ✅ **Frontmatter metadata**
- ✅ **Markdown formatting** (headers, lists, links, etc.)
- ✅ **Code syntax highlighting**
- ✅ **Images and media**
- ✅ **Categories and tags**
- ✅ **Reading time estimation**
- ✅ **Responsive design**

## 🎨 Components

### UI Components (Radix UI + Custom)
- **Button** - Various styles and sizes
- **Card** - Content containers
- **Badge** - Labels and tags
- **Avatar** - Profile images
- **Tooltip** - Hover information
- **Separator** - Visual dividers

### Animated Components (MagicUI)
- **BlurFade** - Fade-in animations
- **BlurFadeText** - Text reveal animations
- **Dock** - macOS-style dock
- **Shine Border** - Animated borders

## 🌐 Deployment

The project is configured for deployment on:

- **Vercel** (Recommended)
- **Netlify** 
- **GitHub Pages**

### Deploy to Vercel
```bash
npm run deploy
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ across all metrics
- 🚀 **First Load JS**: ~87kB shared + page-specific
- 📱 **Mobile Optimized**: Responsive design
- 🔍 **SEO Ready**: Meta tags and structured data

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by [Samuel Forrest](https://samuelforrest.me)**

