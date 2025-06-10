"use client";

import React from "react";
import { usePathname } from "next/navigation";


import Link from "next/link";
import Image from "next/image";
import { HeaderData } from "./config";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useLanguage } from "@/providers/Language";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { API_URL, rootURL } from "@/utilities/constant";



export const HeaderNav: React.FC<{ data: HeaderData["Navigations"], logo: HeaderData["Logo"] }> = ({ data, logo }) => {
  const navItems = data[0].Items || [];
  const navItemsButton = data[1].Items || [];
  const pathname = usePathname();

  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: "vi" | "en") => {
    setLanguage(lang);
  };

  const languageBox = () => {

    return (
      <div className="language-box">
        <Select onValueChange={handleLanguageChange} value={language}>
          <SelectTrigger className="w-auto border-0 !bg-transparent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vi">VN</SelectItem>
            <SelectItem value="en">EN</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }

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
        {languageBox()}
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
                <Link
                  key={`btns-${item.Slug}${i}`}
                  className={`${item.CSS || ""}`}
                  href={item.Slug}
                  target={item.Target}
                >
                  {item.Title}
                </Link>
              );
            })}
            <SheetTrigger className="hambuger">
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
        <SheetContent className="mobile-navigation w-full border-0 px-4 pt-10">
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
          <Link href={rootURL} className="logo">
            <Image
              src={`${API_URL}${logo.url}`}
              alt={logo.alt || ""}
              width={logo.width || 174}
              height={logo.height || 40}
              priority={false}
            />
          </Link>
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
          {languageBox()}
        </SheetContent>
      </Sheet>
    </>
  );
};
