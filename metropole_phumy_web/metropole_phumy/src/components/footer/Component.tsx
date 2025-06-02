import { API_URL } from "@/utilities/constant";
import Link from "next/link";
import Image from "next/image";
import qs from "qs";
import React from "react";
import { FooterData } from "./config";


import "@/assets/styles/footer.css";

export async function Footer({locale = 'vi'}: {locale: string}) {
  const query = qs.stringify(
    {
      filters: {
        locale: {
          $eq: locale,
        },
      },
      populate: [
        "Logo",        
        "Navigation.Items",
        "Color",
        "Blocks.Items",
      ],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(`${API_URL}/api/footer?${query}`);
  const result = await response.json();
  const footerDate: FooterData = result.data;

  // console.log(footerDate);

  if (!footerDate) {
    return null;
  }

  return (
    <footer
      style={{
        backgroundColor: footerDate.Color[0].BGColor,
        color: footerDate.Color[0].TextColor,
      }}
    >
      <div className="container px-4 pt-15 pb-10 lg:px-10">
        <div className="footer-top">
          <div className="footer-logo">
            {footerDate.Logo &&
              footerDate.Logo.url && (
                <Image
                  src={`${API_URL}${footerDate.Logo.url}`}
                  alt={footerDate.Logo.alt || ''}
                  width={footerDate.Logo.width || 174}
                  height={footerDate.Logo.height || 40}
                />
              )}
          </div>
          <div className="footer-navigation">
            <ul>
              {footerDate.Navigation[0].Items.map((item) => (
                <li key={item.id}>
                  <Link href={item.Slug} target={item.Target} className={`${item.CSS || ''}`}>{item.Title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-blocks">
            {footerDate.Blocks.map((block) => (
              <div key={block.id}>
                <p className="text-xl font-semibold uppercase mb-4 tracking-tight">{block.Title}</p>
                <ul>
                  {block.Items.map((item) => (
                    <li key={item.id} className="text-sm grid grid-cols-4"><strong className="text-base font-semibold uppercase col-span-1">{item.Label}: </strong>{
                      item.Type.toLowerCase() !== 'email' ? <span className="col-span-3">{item.Value}</span> : (
                        <Link href={`mailto:${item.Value}`} className="mailto">{item.Value}</Link>
                      )
                    }</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright text-center text-xs lg:text-sm border-t-[1px] pt-12 lg:pt-10">
            <p>
              {footerDate.Copyright.replace(
                "{YEAR}",
                new Date().getFullYear().toString()
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
