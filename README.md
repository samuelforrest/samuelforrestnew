New Website

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Google Gemini AI Integration

## Features

### AI-Powered Blog Summaries
Each blog post includes an AI-generated summary powered by Google Gemini AI, featuring:
- Concise 2-3 sentence summary of the main content
- Key takeaways and bullet points
- Estimated reading time
- Intelligent caching to avoid regenerating summaries

### Setup

1. Copy `.env.example` to `.env.local`
2. Add your Google Gemini API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Generate a new API key
   - Add it to your `.env.local` file:
     ```
     VITE_GEMINI_API_KEY=your_actual_api_key_here
     ```

## Blog System
- Rich text editor with Quill
- Supabase backend for blog storage
- AI-generated summaries for enhanced user experience
- Comments and like functionality
