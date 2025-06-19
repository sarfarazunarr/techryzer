import ConnectDB from '@/utils/connectdb';
import Blog from '@/models/Blogs.model';

export async function GET() {
  // Connect to the database
  await ConnectDB();
  const blogs = await Blog.find({}).select('slug').lean();

  // Base URL for your site
  const baseUrl = process.env.NEXT_URL; 

  // Static URLs
  const staticUrls = [
    'about',
    'blog',
    'career',
    'contact',
    'services',
    'portfolio',
    'quote'
  ];

  const urls = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      priority: 1.0,
    },
    ...staticUrls.map((url) => ({
      loc: `${baseUrl}${url}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    })),
  ];


  // Add dynamic blog URLs
  blogs.forEach(blog => {
    urls.push({
      loc: `${baseUrl}blog/${blog.slug}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    });
  });

  // Generate XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${urls
        .map(url => {
          return `<url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <priority>${url.priority}</priority>
        </url>`;
        })
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}