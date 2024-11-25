import Link from "next/link";
import Image from "next/image";
import { logo, siteIntro } from "@/helpers/constants";
const Footer = () => {
  return (
    <>
      <footer className="bg-black w-full max-w-full">
        <div className="w-10/12 max-screen-2xl flex flex-col justify-center mx-auto lg:py-8 py-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-6 col-span-12">
              <Image 
                src={logo}
                alt="logo"
                priority={true}
                width={1000}
                height={1000}
                className="w-16 h-auto"
              />
              <p className="text-sm text-white">
                {siteIntro}
              </p>
            </div>
            <div className="md:col-span-3 col-span-6">
              <ul className="p-0 text-white dark:text-gray-400 mx-auto w-full flex flex-col justify-center">
                <li>
                  <a href="/about-us/" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/disclaimer/" className="hover:underline">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/contact-us/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions/" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="/editorial-policy/" className="hover:underline">
                    Editorial Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 col-span-6">
              <ul className="p-0 text-white dark:text-gray-400 mx-auto w-full flex flex-col justify-center">
                <li>
                  <a href="/DMCA/" className="hover:underline">
                    DMCA
                  </a>
                </li>
                <li>
                  <a href="/DNPA/" className="hover:underline">
                    DNPA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="border-gray-200 dark:border-gray-700 my-4 w-10/12 max-screen-2xl mx-auto" />
            <span className="block text-sm text-gray-300 text-center dark:text-gray-400">© 2024 All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
};
export default Footer;
