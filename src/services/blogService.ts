
import { supabase } from "@/integrations/supabase/client";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  author: string;
  content?: string;
  cover_image?: string;
  preview?: string;
  tags?: string[];
};

export type CreateBlogPostData = {
  title: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  date: string;
  cover_image?: string;
  preview?: string;
  tags?: string[];
};

export type UpdateBlogPostData = {
  title?: string;
  content?: string;
  category?: string;
  author?: string;
  slug?: string;
  cover_image?: string;
  preview?: string;
  tags?: string[];
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  
  // Transform the data to match our BlogPost type ok
  return data.map(post => ({
    id: post.id,
    title: post.title,
    // Use preview if available, otherwise generate excerpt from content
    excerpt: post.content ? post.content.substring(0, 150) + '...' : '',
    preview: post.preview || undefined,
    date: new Date(post.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    // Generate slug from title if not provided
    slug: post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    category: post.category,
    author: post.author || 'Samuel Forrest',
    content: post.content,
    cover_image: post.cover_image,
    tags: post.tags || []
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
  
  // Find the post by slug (which we generate from title)
  const post = data.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') === slug
  );
  
  if (!post) return null;
  
  return {
    id: post.id,
    title: post.title,
    excerpt: post.content ? post.content.substring(0, 150) + '...' : '',
    preview: post.preview || undefined,
    date: new Date(post.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    slug: post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    category: post.category,
    author: post.author || 'Samuel Forrest',
    content: post.content,
    cover_image: post.cover_image,
    tags: post.tags || []
  };
}

export async function createBlogPost(data: CreateBlogPostData): Promise<BlogPost | null> {
  const { data: newPost, error } = await supabase
    .from('blogs')
    .insert([{
      title: data.title,
      content: data.content,
      category: data.category,
      author: data.author,
      cover_image: data.cover_image || '',
      preview: data.preview || null,
      tags: data.tags || []
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating blog post:', error);
    return null;
  }

  return {
    id: newPost.id,
    title: newPost.title,
    excerpt: newPost.content ? newPost.content.substring(0, 150) + '...' : '',
    preview: newPost.preview || undefined,
    date: new Date(newPost.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    slug: newPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    category: newPost.category,
    author: newPost.author || 'Samuel Forrest',
    content: newPost.content,
    cover_image: newPost.cover_image,
    tags: newPost.tags || []
  };
}

export async function updateBlogPost(id: string, data: UpdateBlogPostData): Promise<BlogPost | null> {
  const { data: updatedPost, error } = await supabase
    .from('blogs')
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating blog post:', error);
    return null;
  }

  return {
    id: updatedPost.id,
    title: updatedPost.title,
    excerpt: updatedPost.content ? updatedPost.content.substring(0, 150) + '...' : '',
    preview: updatedPost.preview || undefined,
    date: new Date(updatedPost.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    slug: updatedPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    category: updatedPost.category,
    author: updatedPost.author || 'Samuel Forrest',
    content: updatedPost.content,
    cover_image: updatedPost.cover_image,
    tags: updatedPost.tags || []
  };
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }

  return true;
}
