/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo } from "@/helpers/constants";
import { title } from "process";

const Menu = ({ menus }: { menus: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  return (
    <>
      <header className="sticky top-0 z-50" style={{ backgroundColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR }}>
        <nav className="w-10/12 max-screen-2xl flex justify-between mx-auto">
          <div>
            <Link href="/">
              <Image 
                width={1000}
                height={1000} 
                className="w-12 cursor-pointer" 
                src={logo} 
                alt={title}
              />
            </Link>
          </div>
          <div
            ref={menuRef}
            style={{ backgroundColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR }}
            className={`z-20 nav-links duration-500 md:static absolute md:min-h-fit min-h-auto left-0 ${
              isMenuOpen ? "top-[7%] block" : "-top-[-100%] hidden"
            } md:w-auto w-full flex items-center px-0`}
          >
            <ul className="w-full flex md:flex-row flex-col md:items-center md:gap-4 gap-0 p-0">
              {menus?.map((item: any) => {
                const { node } = item;
                return (
                  <li className="menu md:p-0 py-2 px-4" key={node.slug}>
                    <Link
                      className={`md:p-4 md:py-3 px-0 block border-b-2 border-transparent text-white ${
                        pathname + "/" === node.slug
                          ? "active border-b-2 bg-red-500 border-red-500"
                          : ""
                      }`}
                      href={`/category/${node.slug}`}
                      onClick={closeMenu}
                    >
                      {node.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <label
              onClick={toggleMenu}
              className="pointer-cursor lg:hidden block pt-2"
            >
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Menu;