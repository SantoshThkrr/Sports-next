"use client";

import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { CenterCardsProps, PostEdge } from "@/app/type";

const CenterCards = ({ data, query, slug }: CenterCardsProps) => {
  const [posts, setPosts] = useState(data.posts.edges);
  const [cursor, setCursor] = useState(data.posts.pageInfo.endCursor);
  const [hasNextPage, setHasNextPage] = useState(data.posts.pageInfo.hasNextPage);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const loadMore = useCallback(async () => {
    if (!hasNextPage || loading) return;

    setLoading(true);

    const variables = slug
      ? {
          slug: slug,
          userId: slug,
          cursor: cursor,
        }
      : {
          cursor: cursor,
        };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
        {
          cache: 'no-store',
          next: { revalidate: 60 },
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query,
            variables: variables,
          }),
        }
      );

      const newData = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...newData.data.posts.edges]);
      setCursor(newData.data.posts.pageInfo.endCursor);
      setHasNextPage(newData.data.posts.pageInfo.hasNextPage);
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  }, [cursor, hasNextPage, loading, query, slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      loadMore();
    };

    if (hasNextPage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, loadMore]);

  return (
    <>
      <div>
        {posts &&
          posts.map((post: PostEdge, index: number) => {
            const { node } = post;
            const { title, slug, databaseId, date, featuredImage, categories } = node;
            const label = categories.edges.find(
              ({ node }: { node: any }) => node.slug === pathname.split("/").pop()
            );

            return index % 5 === 0 ? (
              <div key={databaseId}>
                <div className="cat-main-div relative flex justify-center">
                  {/* <h2 className="text-3xl mb-1 capitalize font-bold bg-white text-gray-800 z-10 text-center inline-block px-2 py-2">
                    {label ? label?.node.name : pathname.split("/").pop()?.replace("-", " ")}
                  </h2>
                  <span
                    className="absolute left-0 h-1 w-full border-t border-b border-blue-700 top-1/2 transform -translate-y-1/2 z-0"
                    style={{ borderColor: "#032a63" }}
                  ></span> */}
                </div>
                <BannerSection
                  title={title}
                  slug={slug}
                  databaseId={databaseId}
                  date={date}
                  featuredImage={featuredImage}
                  categories={categories}
                  showCategory={categories}
                />
              </div>
            ) : (
              <ListView
                key={databaseId}
                title={title}
                slug={slug}
                databaseId={databaseId}
                date={date}
                featuredImage={featuredImage}
                categories={categories}
                showCategory={categories}
              />
            );
          })}
        {loading && <div className="loader"></div>}
      </div>
    </>
  );
};

export default CenterCards;