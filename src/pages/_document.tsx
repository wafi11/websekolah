import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/https://smpn1sangsel.sch.id/wp-content/uploads/2020/10/Logo-OSIS-SMP-Warna-728x900-removebg-preview1.png"
          sizes="any"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
