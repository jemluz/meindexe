import { getCssText } from "@ignite-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        {/* enable css with SSR (works with disabled js) */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}