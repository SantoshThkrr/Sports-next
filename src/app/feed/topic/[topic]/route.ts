// File: app/feed/topic/[topic]/route.ts
import { fetchData } from "@/helpers/graphql";

// Type Definitions
type Author = {
  node: {
    name: string;
  };
};

type MediaDetails = {
  width?: number;
  height?: number;
};

type FeaturedImage = {
  node?: {
    sourceUrl?: string;
    mediaDetails?: MediaDetails;
  };
};

type Post = {
  content: string;
  date: string;
  dateGmt: string;
  excerpt: string;
  guid: string;
  link: string;
  modified: string;
  title: string;
  slug: string;
  featuredImage?: FeaturedImage;
  author: Author;
};

type Tag = {
  description: string | null;
  id: string;
  link: string;
  name: string;
  slug: string;
  tagId: number;
  uri: string;
  posts: {
    nodes: Post[];
  };
};

interface GraphQLResponse {
  tags: {
    edges: {
      node: Tag;
    }[];
  };
}

// GraphQL Query
const getTopicFeedQuery = `
  query TopicFeedQuery {
    tags {
      edges {
        node {
          description
          id
          link
          name
          slug
          tagId
          uri
          posts(first: 10) {
            nodes {
              content
              date
              dateGmt
              excerpt
              guid
              link
              modified
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                  mediaDetails {
                    width
                    height
                  }
                }
              }
              author {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Route Handler
export async function GET(
  request: Request,
  { params }: { params: { topic: string } }
): Promise<Response> {
  try {
    // Remove .xml extension from the topic parameter
    const topicSlug = params.topic.replace(/\.xml$/, '');

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hindi.news24online.com';
    const response = await fetchData(getTopicFeedQuery);
    const data = response as GraphQLResponse;

    // Find the requested topic using the cleaned slug
    const topicData = data.tags.edges.find(
      edge => edge.node.slug.toLowerCase() === topicSlug.toLowerCase()
    )?.node;

    if (!topicData) {
      return new Response(`Topic not found: ${topicSlug}`, { 
        status: 404,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }

    // Validate posts data
    if (!topicData.posts?.nodes || topicData.posts.nodes.length === 0) {
      console.error('No posts array found for topic:', topicData.slug);
      return new Response('No posts found for topic', { status: 404 });
    }

    // Generate RSS Feed
    const rssXml = generateRSSFeed(topicData, siteUrl);

    return new Response(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating topic RSS feed:', error);
    return new Response(
      `Error generating RSS feed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      { status: 500 }
    );
  }
}

// Helper function to generate RSS Feed
function generateRSSFeed(topicData: Tag, siteUrl: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>${escapeXml(topicData.name)} - Topics</title>
    <atom:link href="${siteUrl}/feed/topic/${topicData.slug}.xml" rel="self" type="application/rss+xml" />
    <link>${topicData.link}</link>
    <description>Latest news from ${escapeXml(topicData.name)} Section</description>
    <language>hi</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    
    ${topicData.posts.nodes.map(post => {
      // Prepare image details
      const imageUrl = post.featuredImage?.node?.sourceUrl || '';
      const imageWidth = post.featuredImage?.node?.mediaDetails?.width || 1200;
      const imageHeight = post.featuredImage?.node?.mediaDetails?.height || 675;
      
      // Clean up excerpt (remove HTML tags and truncate)
      const cleanExcerpt = stripHtmlTags(post.excerpt).substring(0, 200);
      
      return `
    <item>
      <title><![CDATA[${escapeXml(post.title)}]]></title>
      <link>${post.link}</link>
      <pubDate>${formatDate(post.modified)}</pubDate>
      <dc:creator><![CDATA[${escapeXml(post.author?.node?.name || 'Unknown Author')}]]></dc:creator>
      <description><![CDATA[${escapeXml(cleanExcerpt)}]]></description>
      <media:content height="${imageHeight}" medium="image" url="${imageUrl}" width="${imageWidth}">
        <media:title type="html"><![CDATA[${escapeXml(post.title)}]]></media:title>
      </media:content>
      <media:thumbnail url="${imageUrl}?w=280" width="280"/>
      <guid isPermaLink="true"><![CDATA[${post.link}]]></guid>
      <content:encoded><![CDATA[${post.content || ''}]]></content:encoded>
    </item>`;
    }).join('')}
  </channel>
</rss>`;
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string | undefined): string {
  if (!unsafe) return '';
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

// Helper function to strip HTML tags
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Helper function to format date in the specific timezone
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    // Create a date string in the format: "Thu, 14 Nov 2024 16:35:06 +5:30"
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dateNum = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${day}, ${dateNum} ${monthName} ${year} ${hours}:${minutes}:${seconds} +5:30`;
  }