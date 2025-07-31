
import HeadingText from "@/components/heading/Component";
import { HeadingData } from "@/types/doc";
import React from "react";

export default async function NotFound({
  params
}: {
  params: { locale:string, slug: string }
}) {

  console.log(params)

  const heading:HeadingData = {
    Text: `404 - Page Not Found`,
    Tag: 'h1',
    Color: '#113661',
    ColorEnd: '#5BB3BD',
    Transform: 'uppercase',
    Align: 'center'
  }
  
  return <section className="section-content header-solid">
    <div className="container">
      <HeadingText className="heading mt-20" heading={heading}></HeadingText>
    </div>
  </section>;
}
