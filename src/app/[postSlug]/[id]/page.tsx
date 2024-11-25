
import { fetchData } from "@/helpers/graphql";
import { getPost } from "@/queries/getPost";
import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser';
import ShareIcon from "@/components/SocialShare/ShareIcon";
import { format } from "date-fns";
import {ArticleSchema} from "@/components/Seo/Schema";
import {extractTextFromHTML} from "@/helpers/textManupulation";
import { Partytown } from '@builder.io/partytown/react';
import { Metadata, ResolvingMetadata  } from "next";

// export const metadata ={
//   title: "Blog Post",
//   description : "vhdwjkcdbjkcx",
// }
type Props = {
  params: { id: string }
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const data = await fetchData(getPost, params.id);

  // // const product = await fetch(https://.../${id}).then((res) => res.json())

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.post.title,
    openGraph: {
      images: [`${data.post.featuredImage.node.sourceUrl}`],
    },
  }
}



const Article = async ({ params }: { params: { id: string; postSlug: string } }) => {
  const data = await fetchData(getPost, params.id);
  //console.log(params);
  const {
    title,
    uri,
    date,
    content,
    featuredImage,
    categories,
    modified,
    author,
    excerpt,
    tags,
  } = data?.post;
  //console.log(title);
  let contentParse = parse(content.replace('text/javascript', 'text/partytown'));



  const formattedModifiedDate = modified && format(new Date(modified), 'yyyy-MM-dd HH:mm');


  return (
    <>
    <Partytown debug={true} forward={['dataLayer.push']} />
    <ArticleSchema data={{
        name: author,
        uri: uri,
        headline: title,
        description: extractTextFromHTML(excerpt),
        datePublished: date,
        dateModified: modified,
        author: author,
        categories: categories,
        imgSourceUrl: featuredImage?.node.sourceUrl,
        imgCaption: featuredImage?.node.caption,
        imgDescription: featuredImage?.node.description,
        authorUrl : author,
        articleBody: extractTextFromHTML(content),
      }}/>

    <div className="w-full md:w-1/2 lg:w-6/12 p-4 bg-white">
      <div className="mx-1 lg:mx-0 md:w-full mt-4 md:mt-4 w-auto overflow-hidden">
        <div className="flex mb-2 w-full overflow-x-scroll whitespace-nowrap">
          <span className="px-2">
            <Link
              href="/"
              style={{ color: "#18479e" }}
            >
              Home
            </Link>
          </span>
          <span className="px-1"> / </span>
          <span className="px-1">
            <Link href="/">{categories.nodes[0].name}</Link>
          </span>
          <span className="px-1"> / </span>
          <span>{title}</span>
        </div>
        <div>
          <h1 className="text-2xl font-semibold border-b pb-2 leading-9">
            {title}
          </h1>
          <div className="py-4 md:w-full">
            <div className="flex justify-between border-b  items-center my-0 mx-0 pb-3 px-0">
              <div className="flex">
                <div className="px-2">
                  <span>
                    <span className="block whitespace-nowrap leading-5 text-md font-medium">
                      <Link href={`/authors/${author.node.slug}`}>{author.node.name}</Link>
                    </span>
                    <span className="block whitespace-nowrap leading-4 text-xs mt-2">
                      {formattedModifiedDate}
                    </span>
                  </span>
                </div>
              </div>
              <ShareIcon id={params.id} slug={`${params.postSlug}/${params.id}`} title={title} />
            </div>
          </div>
          <div className="md:flex-shrink-0 imgFill relative h-48 md:h-80">
            <Image
              layout="fill"
              className="h-full w-full rounded-md object-contain md:h-full md:w-full"
              src={
                featuredImage?.node?.sourceUrl
                  ? featuredImage?.node?.sourceUrl
                  : process.env.NEXT_PUBLIC_WORDPRESS_SITE_LOGO
              }
              alt={featuredImage?.node?.title}
            />
          </div>
          <div className="py-4 md:w-full" id="contentPost">
            <p className="pt-2 text-md md:text-xl md:leading-8 leading-8 font-serif text-justify text-gray-700">
              {contentParse}
            </p>
          </div>

          <div className="storyTags" id="widgetTags">
            {tags.nodes.length &&
              tags.nodes.map((tag: any) => (
                <Link key={tag.databaseId} href={`/topic/${tag.slug}`}>
                  <span className="inline-block p-2 mr-2 mb-2 bg-gray-100 rounded-md">
                    {tag.name}
                  </span>
                </Link>
              ))}
          </div>

          <hr
            className="my-4"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}
          />

          <hr
            className="my-4"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}
          />
        </div>
      </div>
    </div>
    </>
  );
};


export default Article;
