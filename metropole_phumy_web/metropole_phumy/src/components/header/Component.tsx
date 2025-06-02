import { API_URL, rootURL } from "@/utilities/constant";
import Image from "next/image";
import qs from "qs";
import React from "react";
import { HeaderData } from "./config";

import "@/assets/styles/header.css";
import { HeaderNav } from "./Navigation";
import Link from "next/link";


export async function Header({ locale = "vi" }: { locale: string }) {

  const query = qs.stringify(
    {
      filters: {
        locale: {
          $eq: locale,
        },
      },
      populate: ["Logo", "Navigations.Items"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(`${API_URL}/api/header?${query}`);
  const result = await response.json();
  const headerData: HeaderData = result.data;

  // console.log(query);

  if (!headerData) {
    return null;
  }

  return (
    <header className="main-header">
      <div className="container px-4">
        <div className="header-logo">
          {headerData.Logo && headerData.Logo.url && (
            <Link href={rootURL} prefetch>
              <Image
                src={`${API_URL}${headerData.Logo.url}`}
                alt={headerData.Logo.alt || ""}
                width={headerData.Logo.width || 174}
                height={headerData.Logo.height || 40}
                priority
              />
            </Link>
          )}
        </div>
        <HeaderNav data={headerData.Navigations} logo={headerData.Logo} />
      </div>
    </header>
  );
}
