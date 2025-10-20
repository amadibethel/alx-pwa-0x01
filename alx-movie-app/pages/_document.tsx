import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link the web app manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Set theme color for PWA appearance */}
        <meta name="theme-color" content="#0070f3" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

