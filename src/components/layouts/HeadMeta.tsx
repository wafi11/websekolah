import React from "react";
import Head from "next/head";
import { IMAGE_URL } from "@/constants";

export const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  pathname?: string;
}> = ({ title = "Web Sekolah", metaDescription, pathname = "" }) => {
  const defaultTitle = "E-Learning";

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_BASE_URL;

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{title + " | " + defaultTitle}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* metadata */}
      <meta name="title" content={title + " | " + defaultTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="og:image" itemProp="image" content={IMAGE_URL} />
      <meta property="og:url" content={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={IMAGE_URL} />
      <meta property="og:title" content={title + " | " + defaultTitle} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title + " | " + defaultTitle} />
      <meta name="twitter:image" content={IMAGE_URL} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
};
