import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { getCssText } from '../styles/stitches.config'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* enable css with SSR (works with disabled js) */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
