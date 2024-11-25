"use client";
import Link from "next/link";
import Image from "next/image";
import { getTimeElapsed } from "../../helpers/getFormattedDate";
import { usePathname } from "next/navigation";
import { BannerSectionProps } from "@/app/type";
import { logo } from "@/helpers/constants";

const BannerSection: React.FC<BannerSectionProps> = ({
  featuredImage,
  categories,
  title,
  slug,
  databaseId,
  date,
  categoryName,
  showCategory,
}) => {
  const pathname = usePathname();
  const label = categories.edges.find(
    ({ node }) => node.slug === pathname.split("/").pop()
  );
  const cName = categories.edges.find(
    ({ node }) => node.slug === categoryName
  );

  return (
    <div className="mx-4 mt-4 md:mx-0 overflow-hidden">
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <Link href={`/${slug}/${databaseId}`}>
          <Image
            src={
              featuredImage?.node?.sourceUrl
                ? featuredImage?.node?.sourceUrl
                : logo
            }
            alt={featuredImage?.node?.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        </Link>
      </div>
      <div className="pt-4 md:w-full">
        <div className="flex justify-between lg:mt-6">
          {showCategory && (
            <Link href={`/category/${categories?.edges[0]?.node.slug}`}>
              <div
                className="py-2 tracking-wide text-sm mt-1 font-semibold"
                style={{ color: "#18479e" }}
              >
                {categories.edges[0]?.node.name}
              </div>
            </Link>
          )}
          <span className="mt-1" style={{ color: "#44c542" }}>
            {getTimeElapsed(date)}
          </span>
        </div>
        <Link href={`/${slug}/${databaseId}`}>
          <h3 className="pr-4 pt-2 md:font-medium text-lg md:text-1xl md:leading-8 leading-6 mb-6 lg:mb-4">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
