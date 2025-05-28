import { API_URL } from "@/utilities/constant";
import Image from "next/image";
import qs from "qs";
import React from "react";
import { HeaderData } from "./config";

import "@/assets/styles/header.css";
import { HeaderNav } from "./Navigation";

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

  return (
    <header className="main-header">
      <div className="container px-4">
        <div className="header-logo">
          {headerData.Logo && headerData.Logo.url && (
            <Image
              src={`${API_URL}${headerData.Logo.url}`}
              alt={headerData.Logo.alt || ""}
              width={headerData.Logo.width || 174}
              height={headerData.Logo.height || 40}
            />
          )}
        </div>
        <HeaderNav data={headerData.Navigations} />
      </div>
    </header>
  );
}
