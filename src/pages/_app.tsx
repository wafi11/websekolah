import { HeadMetaData } from "@/components/layouts/HeadMeta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadMetaData />
      <Component {...pageProps} />;
    </>
  );
}
