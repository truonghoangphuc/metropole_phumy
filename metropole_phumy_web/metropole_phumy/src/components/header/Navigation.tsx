"use client";

import React from "react";
import { usePathname } from "next/navigation";


import Link from "next/link";
import { HeaderData } from "./config";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const HeaderNav: React.FC<{ data: HeaderData["Navigations"] }> = ({ data }) => {
  const navItems = data[0].Items || [];
  const navItemsButton = data[1].Items || [];
  const pathname = usePathname();

  console.log(data);

  const Nav = () => {
    return (
      <nav className="hidden desktop-navigation lg:flex">
        <ul className="flex">
          {navItems.map((item, i) => {
            return (
              <li
                key={`desktop-${item.Slug}${i}`}
                className={`${
                  i === navItems.length - 1 ? "nav-item last" : "nav-item"
                } ${pathname === item.Slug ? "active" : ""}`}
              >
                <Link
                  href={item.Slug}
                  target={item.Target}
                  className={`${item.CSS || ""}`}
                >
                  {item.Title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Nav />
      <Sheet>
        {navItemsButton.length > 0 && (
          <div className="btns flex items-center gap-4">
            {navItemsButton.map((item, i) => {
              return (
                <Link key={`btns-${item.Slug}${i}`} className={`${item.CSS || ""}`} href={item.Slug} target={item.Target}>{item.Title}</Link>
              );
            })}
            <SheetTrigger className="w-8 h-8 flex items-center justify-center">
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33301 1.08301L14.6663 1.08301"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33301 6.91602L14.6663 6.91602"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SheetTrigger>
          </div>
        )}
        <SheetContent className="mobile-navigation w-full border-0 p-4">
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
          <ul>
            {navItems.map((item, i) => {
              return (
                <li
                  key={`mobile-${item.Slug}${i}`}
                  className={`py-4 ${
                    i === navItems.length - 1 ? "nav-item last" : "nav-item"
                  }`}
                >
                  <Link
                    href={item.Slug}
                    target={item.Target}
                    className={`${item.CSS || ""}`}
                  >
                    {item.Title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};
