// app/feed/[category]/route.ts

import { fetchData } from "@/helpers/graphql";

// GraphQL query type definitions
type Author = {
  node: {
    name: string;
  };
};

type Post = {
  content: string;
  modified: string;
  author: Author;
  title: string;
  slug:string;
};

type Category = {
  categoryId: number;
  description: string | null;
  name: string;
  slug: string;
  posts: {
    nodes: Post[];
  };
  link: string;
};

interface GraphQLResponse {
  categories: {
    edges: {
      node: Category;
    }[];
  };
}

const getCategoryFeedQuery = `
  query NewQuery {
    categories {
      edges {
        node {
          categoryId
          description
          name
          slug
          posts(first: 10) {
            nodes {
              content
              modified
              author {
                node {
                  name
                }
              }
              title
              slug
            }
          }
          link
        }
      }
    }
  }
`;

export async function GET(
    request: Request,
    { params }: { params: { category: string } }
  ): Promise<Response> {
    try {
      // Remove .xml extension from the category parameter
      const categorySlug = params.category.replace(/\.xml$/, '');
  
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
      const response = await fetchData(getCategoryFeedQuery);
      const data = response as GraphQLResponse;
  
    //   console.log("Requested category slug (cleaned):", categorySlug);
    //   console.log("Available categories:", data.categories.edges.map(edge => edge.node.slug));
  
      // Find the requested category using the cleaned slug
      const categoryData = data.categories.edges.find(
        edge => edge.node.slug.toLowerCase() === categorySlug.toLowerCase()
      )?.node;
  
    //   console.log("Found category data:", categoryData?.posts);
  
      if (!categoryData) {
        return new Response(`Category not found: ${categorySlug}`, { 
          status: 404,
          headers: {
            'Content-Type': 'text/plain'
          }
        });
      }

    // Validate posts data
    if (!categoryData.posts?.nodes) {
      console.error('No posts array found for category:', categoryData.slug);
      return new Response('No posts found for category', { status: 404 });
    }

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>${escapeXml(categoryData.name)}</title>
    <title>News24 Sports</title>
    <atom:link href="${siteUrl}/feed/${categoryData.slug}.xml" rel="self" type="application/rss+xml" />
    <link>${siteUrl}/category/${categoryData.slug}</link>
    <description>Latest news from ${escapeXml(categoryData.name)} Section</description>
    <language>hi</language>
    <sy:updatePeriod> hourly </sy:updatePeriod>
    <sy:updateFrequency> 1 </sy:updateFrequency>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed/${categoryData.slug}.xml" rel="self" type="application/rss+xml" />
    
    ${categoryData.posts.nodes.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/${categoryData.slug}/${escapeXml(post.slug)}</link>
      <dc:creator><![CDATA[${post.author?.node?.name || 'Unknown Author'}]]></dc:creator>
      <pubDate>${new Date(post.modified).toUTCString()}</pubDate>
      <guid isPermaLink="false"><![CDATA[${siteUrl}/${categoryData.slug}/${escapeXml(post.slug)}]]></guid>
      <description><![CDATA[${post.content ? post.content.substring(0, 150) + '...' : ''}]]></description>
      <content:encoded><![CDATA[${post.content || ''}]]></content:encoded>
    </item>`).join('')}
  </channel>
</rss>`;

    return new Response(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating category RSS feed:', error);
    return new Response(
      `Error generating RSS feed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      { status: 500 }
    );
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}