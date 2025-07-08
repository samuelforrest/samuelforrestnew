# Samuel Forrest Portfolio Website

A modern, responsive portfolio website built with cutting-edge technologies to showcase projects, blog posts, and professional experience.

## Tech Stack

- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe JavaScript
- **React** - Component-based UI framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend-as-a-Service for data management
- **React Helmet Async** - Dynamic SEO management
- **Google Gemini AI Integration** - AI-powered content features

## Key Features

### 🎯 Dynamic SEO Optimization
Each page features unique SEO metadata for better search engine visibility:
- **Home Page**: Personal introduction and professional overview
- **Projects Page**: Portfolio showcase with client work and personal projects
- **Blog Page**: Technology articles and insights
- **Individual Blog Posts**: Dynamic metadata based on post content
- **Auth Page**: User authentication (noindex for privacy)
- **Admin Dashboard**: Content management (noindex for security)

### 🤖 AI-Powered Blog Features
Enhanced blog experience with Google Gemini AI integration:
- **Auto-generated summaries** for each blog post (2-3 sentences)
- **Key takeaways** and bullet points extraction
- **Reading time estimation**
- **Intelligent caching** to optimize API usage

### 📝 Advanced Blog System
- **Rich text editor** powered by Quill.js
- **Supabase backend** for secure data storage
- **User authentication** for comments and interactions
- **Like functionality** for blog posts
- **Comments system** for community engagement
- **Category filtering** for easy content discovery

### 🎨 Modern UI/UX
- **Responsive design** optimized for all devices
- **Dark/Light mode** theme switching
- **Card-based layouts** for better content organization
- **Hover effects** and smooth transitions
- **Professional typography** with proper font hierarchy

### 🚀 Projects Showcase
Interactive project gallery featuring:
- **Client work** with live site links
- **Personal projects** and experiments
- **Hackathon winners** and achievements
- **GitHub integration** for source code access
- **Project logos** with fallback support

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Google AI Studio account (for Gemini API)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samuelforrest/samuelforrest.me.git
   cd samuelforrest.me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```

4. **Add required environment variables**
   ```env
   # Google Gemini AI
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Get API Keys**
   - **Google Gemini**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - **Supabase**: Create project at [Supabase Dashboard](https://supabase.com/dashboard)

6. **Start development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── sections/        # Page sections
│   ├── admin/           # Admin panel components
│   └── SEO.tsx          # Dynamic SEO component
├── pages/               # Route components
│   ├── Index.tsx        # Home page
│   ├── Projects.tsx     # Projects showcase
│   ├── Blog.tsx         # Blog listing
│   ├── BlogPost.tsx     # Individual blog posts
│   ├── Auth.tsx         # User authentication
│   └── Admin.tsx        # Admin dashboard
├── services/            # API services
├── contexts/            # React contexts
└── integrations/        # Third-party integrations
```

## SEO Implementation

Each page includes optimized metadata:

- **Title tags** with proper hierarchy
- **Meta descriptions** tailored to content
- **Open Graph** tags for social media
- **Twitter Card** support
- **Canonical URLs** to prevent duplicate content
- **Robots directives** for search engine guidance
- **Structured data** for rich snippets

## Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The site is optimized for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Traditional hosting providers

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback on the user experience

## License

This project is for personal use. Please respect the content and design choices.

---

**Built with ❤️ by Samuel Forrest**

Connect with me:
- 🌐 [Website](https://samuelforrest.me)
- 💼 [LinkedIn](https://linkedin.com/in/samuelforrest)
- 🐙 [GitHub](https://github.com/samuelforrest)
