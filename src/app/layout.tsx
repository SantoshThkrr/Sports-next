import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { fetchData } from "@/helpers/graphql";
import { MENU_QUERY } from "@/queries/MenuQuery";
import Menu from "@/components/Header/Menu";
import Schema from "@/components/Seo/Schema";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: process.env.NEXT_PUBLIC_SITE_DESC,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchData(
    MENU_QUERY,
  );
  const { categories } = data;
  
  // console.log("nhsbdabdjebdhjba1",data.categories.edges);
  

  const ad = {
    code: "div-gpt-ad-1704700533104-0",
  };

  return (
    <html lang="en">
      <head>
        {/* <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        ></Script>
        <Script id="gtag">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="google-site-verification" content="XWjy0g6H5U0f8bD2pIYsBfZI8Uu7kRwqWpCjX5xXn5s" /> */}
        {/* favicon */}
        <link
          rel="icon"
          href={process.env.NEXT_PUBLIC_WORDPRESS_SITE_FAVICON}
          type="image/x-icon"
          sizes="16x16"
        ></link>
        {/* <Script
          id="Absence-banner"
          async
          strategy="worker"
          src={`https://securepubads.g.doubleclick.net/tag/js/gpt.js`}
          crossOrigin="anonymous"
        /> */}
        {/* <Script
          id="gpt-ad-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
                googletag.defineSlot('/182113732/E24_HP_Desktop_ATF_300X250', [[300, 600], [300, 250]], 'div-gpt-ad-1704700533104-0').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            `,
          }}
        /> */}
      </head>
      <body className={font.className}>
        <Menu menus={categories.edges} />
        <Schema menus={categories.edges} />
        <div className="lg:px-28 px-0 bg-gray-200 flex flex-wrap items-center py-0">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-3/12 md:p-4 md:pt-0 md:mt-4">
              <div className="md:col-span-12 left-panel hidden sm:block bg-white sticky top-16 h-screen">
                {/* <h2 className="mb-2 font-semibold heading">
                  <a href="/latest-news" className="text-gray-900">
                    Latest
                  </a>
                </h2> */}
                {/* <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">
                        <a
                          href="https://hindi.news24online.com/gadgets/amazon-the-great-indian-sale-2023-top-deals-on-smart-tv-best-smart-tv/394506/"
                          className="text-blue-700"
                        >
                          Amazon the Great Indian Sale 2023: Smart TV पर ताबतोड़
                          ऑफर्स की लग गई झड़ी, मिल रहा 47% तक Discount
                        </a>
                      </h3>
                      <div className="text-gray-500">Oct 18, 2023 03:52 PM</div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="text-center mt-4">
                  <a
                    href="/latest-news"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    View All
                  </a>
                </div> */}
              </div>
            </div>

            {children}

            <div className="w-full md:w-1/2 lg:w-3/12 p-4 pt-0 mt-4">
              <div className="md:col-span-12 left-panel hidden sm:block bg-white sticky top-16">
                <div
                  id="div-gpt-ad-1704700533104-0"
                  style={{ minWidth: "300px", minHeight: "250px" }}>
                  <Script
                    id={`div-gpt-ad-${ad.code}`}
                    strategy="worker"
                    dangerouslySetInnerHTML={{
                      __html: `
                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1704700533104-0'); });
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
