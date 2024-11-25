
import { fetchData } from "@/helpers/graphql";
import { homePageNews } from "@/queries/getPagePosts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const data = await fetchData(homePageNews);
  const posts  = data.latest.edges.map((post: { node: { slug: any; title: any; date: any; databaseId: number }; })=>{
    const {slug, title, date, databaseId} = post.node
    return {
      url: `${siteUrl}/${slug}/${databaseId}`,
      lastModified: new Date(date),
    }
  })
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date()
    },
    ...posts
  ]
}

// import { MetadataRoute } from 'next'
// import { fetchData } from '@/helpers/graphql';
// import {  homePageNews } from '@/queries/getPagePosts';

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

//   const data = await fetchData(homePageNews);

//   return data.map((category: { id: number, date: any; }) => ({
//     url: `${baseUrl}/`,
//     lastModified: category.date,
//   }))
// }
// import { fetchData } from '@/helpers/graphql';
// import { homePageNews } from '@/queries/getPagePosts';
// import { format } from 'date-fns';

// export default  function sitemap(): string {
//   const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

//   const currentDate = new Date();
//   let sitemaps = '';

//   for (let i = 0; i < 15; i++) {
//     const date = new Date(currentDate);
//     date.setDate(currentDate.getDate() - i);

//     const yyyy = format(date, 'yyyy');
//     const mm = format(date, 'MM');
//     const dd = format(date, 'dd');
//     const sitemapUrl = `${baseUrl}/sitemap.xml?yyyy=${yyyy}&mm=${mm}&dd=${dd}`;
//     sitemaps += `<sitemap><loc>${sitemapUrl}</loc></sitemap>\n`;
//   }
//   // console.log("hbjhasbdjhbd", sitemaps);

//   return `<sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}</sitemapindex>`;
// }
