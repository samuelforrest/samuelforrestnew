import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export interface AISummary {
  summary: string;
  keyPoints: string[];
  estimatedReadTime: string;
}

/**
 * Generate an AI summary of blog post content using Google Gemini
 */
export async function generateBlogSummary(title: string, content: string): Promise<AISummary> {
  try {
    // Check if API key is available
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      throw new Error('Gemini API key not configured');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Strip HTML tags from content for better analysis
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Estimate read time (average 200 words per minute)
    const wordCount = textContent.split(' ').length;
    const readTimeMinutes = Math.ceil(wordCount / 200);
    const estimatedReadTime = `${readTimeMinutes} min read`;

    const prompt = `
Analyze the following blog post and provide a comprehensive summary:

Title: "${title}"

Content: "${textContent}"

Please provide:
1. A concise 1-2 sentence summary of the main topic and key insights
2. Exactly 3 brief bullet points highlighting the most important takeaways (each point should be 10-15 words max)
3. Keep the tone professional but accessible and concise

IMPORTANT: Respond ONLY with valid JSON in this exact format (no markdown, no code blocks, no extra text):
{
  "summary": "Your 1-2 sentence summary here",
  "keyPoints": ["Brief Point 1", "Brief Point 2", "Brief Point 3"]
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    try {
      // Clean up the response - remove markdown code blocks if present
      text = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      
      // Find JSON content between curly braces
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        text = jsonMatch[0];
      }
      
      // Parse the JSON response
      const parsedResponse = JSON.parse(text);
      
      return {
        summary: parsedResponse.summary || 'Summary not available',
        keyPoints: parsedResponse.keyPoints || [],
        estimatedReadTime
      };
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      console.error('Raw response:', text);
      
      // Fallback: try to extract content manually
      try {
        const summaryMatch = text.match(/"summary":\s*"([^"]+)"/);
        const keyPointsMatch = text.match(/"keyPoints":\s*\[(.*?)\]/);
        
        let keyPoints: string[] = [];
        if (keyPointsMatch) {
          keyPoints = keyPointsMatch[1]
            .split(',')
            .map(point => point.replace(/"/g, '').trim())
            .filter(point => point.length > 0);
        }
        
        return {
          summary: summaryMatch ? summaryMatch[1] : 'This blog post covers important insights and information.',
          keyPoints: keyPoints.length > 0 ? keyPoints : ['AI summary partially available'],
          estimatedReadTime
        };
      } catch (fallbackError) {
        // Final fallback
        return {
          summary: 'This blog post covers important insights and information. Read the full article below for detailed analysis and key takeaways.',
          keyPoints: ['AI summary temporarily unavailable'],
          estimatedReadTime
        };
      }
    }

  } catch (error) {
    console.error('Error generating AI summary:', error);
    
    // Fallback summary
    const wordCount = content.replace(/<[^>]*>/g, ' ').split(' ').length;
    const readTimeMinutes = Math.ceil(wordCount / 200);
    
    return {
      summary: 'This blog post covers important insights and information. Read the full article below for detailed analysis and key takeaways.',
      keyPoints: ['AI summary temporarily unavailable'],
      estimatedReadTime: `${readTimeMinutes} min read`
    };
  }
}

/**
 * Cache management for AI summaries to avoid regenerating for the same content
 */
const summaryCache = new Map<string, AISummary>();

export async function getCachedBlogSummary(postId: string, title: string, content: string): Promise<AISummary> {
  const cacheKey = `${postId}-${content.length}`;
  
  if (summaryCache.has(cacheKey)) {
    return summaryCache.get(cacheKey)!;
  }
  
  const summary = await generateBlogSummary(title, content);
  summaryCache.set(cacheKey, summary);
  
  return summary;
}
