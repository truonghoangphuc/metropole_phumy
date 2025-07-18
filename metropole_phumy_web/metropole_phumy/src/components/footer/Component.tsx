import { API_URL } from "@/utilities/constant";
import Link from "next/link";
import Image from "next/image";
import qs from "qs";
import React from "react";
import { FooterData, RowText } from "./config";


import "@/assets/styles/footer.css";
import { cn } from "@/utilities/cn";
import RichText from "../rte/RichText";
import { FormSubscribe } from "./SubscribeForm";
import HeadingText from "../heading/Component";

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
        "Navigation.Heading",
        "Color",
        "Blocks.Items",
        "Socials.Items",
        "Socials.Items.Icon",
        "Download",
        "Download.Icon",
      ],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(`${API_URL}/api/footer?${query}`);
  const result = await response.json();
  
  const footerData: FooterData = result.data;


  if (!footerData) {
    return null;
  }

  // console.log(footerData);

  const blockSubscribe = footerData.Blocks.filter((block) => block.Name.toLowerCase() === 'subscribe')[0];

  const renderRow = (item: RowText) => {
    switch (item.Type.toLowerCase()) {
      case 'email':
        return (
          <li key={item.id} className="text-sm grid grid-cols-4">
            <span className="col-span-1">
              <span className={`ico ${item.Type.toLowerCase()}`}>{item.Label}</span>
            </span>
            <Link href={`mailto:${item.Value}`} className="mailto">
              {item.Value}
            </Link>
          </li>
        )
      case 'web':
        return (
          <li key={item.id} className="text-sm grid grid-cols-4">
            <span className="col-span-1">
              <span className={`ico ${item.Type.toLowerCase()}`}>{item.Label}</span>
            </span>
            <Link href={`${item.Value.indexOf('http') === 0 ? '' : 'https://'}${item.Value}`} className="web">
              {item.Value}
            </Link>
          </li>
        )
      case 'phone':
        return (
          <li key={item.id} className="text-sm grid grid-cols-4">
            <span className="col-span-1">
              <span className={`ico ${item.Type.toLowerCase()}`}>{item.Label}</span>
            </span>
            <Link href={`tel:${item.Value}`} className="tel">
              {item.Value}
            </Link>
          </li>
        )
      default:
        return (
          <li key={item.id} className="text-sm grid grid-cols-4">
            <span className="col-span-1">
              <span className={`ico ${item.Type.toLowerCase()}`}>{item.Label}</span>
            </span>
            <span className="col-span-3">{item.Value}</span>
          </li>
        )
      }
  }

  return (
    <footer
      style={{
        backgroundColor: footerData.Color.BGColor,
        color: footerData.Color.TextColor,
      }}
      className="pt-15 pb-10"
    >
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo-group">  
            <div className="footer-logo">
              {footerData.Logo && footerData.Logo.url && (
                <Image
                  src={`${API_URL}${footerData.Logo.url}`}
                  alt={footerData.Logo.alt || ""}
                  width={footerData.Logo.width || 174}
                  height={footerData.Logo.height || 40}
                />
              )}
            </div>
            <div className="footer-socials">
              <ul>
                {footerData.Socials.Items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.Slug}
                      target={item.Target}
                      className={cn(item.Type.toLowerCase(), item.CSS || "")}
                    >
                      {item.Icon && (
                        <Image
                          src={`${API_URL}${item.Icon.url}`}
                          alt={item.Title}
                          width={item.Icon.width || 24}
                          height={item.Icon.height || 24}
                        />
                      )}
                      <span className="invisible absolute">{item.Title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-blocks">
            {footerData.Blocks.map((block) => (
              block.Name.toLowerCase() !== 'subscribe' && (
                <div key={block.id} className={block.Name.toLowerCase()}>
                  <p className="text-xl font-semibold uppercase mb-4 tracking-tight">
                    {block.Title}
                  </p>
                  <ul>
                    {block.Items.map((item) => renderRow(item))}
                  </ul>
                </div>
              )
            ))}
          </div>
          <div className="footer-navigation-group">
            {
              footerData.Navigation.map((menu) => (
                <div className="footer-navigation" key={menu.id}>
                  <HeadingText heading={menu.Heading} className="text-xl font-semibold mb-4 tracking-tight"></HeadingText>
                  <ul>
                    {menu.Items.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.Slug}
                          target={item.Target}
                          className={`${item.CSS || ""}`}
                        >
                          {item.Title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
          <div className="footer-subscribe">
            {
              footerData.Download && (
                <div className="footer-download">
                  <Link
                    href={footerData.Download.Slug}
                    target={footerData.Download.Target}
                    className={cn(footerData.Download.Type.toLowerCase(), footerData.Download.CSS || "")}
                  >
                    {footerData.Download.Icon && (
                      <Image
                        src={`${API_URL}${footerData.Download.Icon.url}`}
                        alt={footerData.Download.Title}
                        width={footerData.Download.Icon.width || 24}
                        height={footerData.Download.Icon.height || 24}
                      />
                    )}
                    {footerData.Download.Title}
                  </Link>
                </div>
              )
            }
            {
              blockSubscribe && (
                <div>
                  <p className="text-xl font-semibold mb-4 tracking-tight">
                    {blockSubscribe.Title}
                  </p>
                  <RichText content={blockSubscribe.Description} className="subscribe-desc"/>
                </div>
              )
            }
            {
              footerData.SubscribeText && footerData.SubscribeButton && (
                <FormSubscribe text={footerData.SubscribeText} button={footerData.SubscribeButton}></FormSubscribe>
              )
            }
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright text-center text-xs lg:text-sm border-t-[1px] pt-12 lg:pt-10">
            <p>
              {footerData.Copyright.replace(
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
