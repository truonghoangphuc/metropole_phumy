
import React from "react";

export default async function NotFoundPage({
  params,
  searchParams,
}: {
  params: { locale:string, slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  console.log(params, searchParams)
  
  return <React.Fragment>404 - Not Found</React.Fragment>;
}
