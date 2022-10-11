import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="uso-equipos" />
        <meta name="apple-mobile-web-app-title" content="uso-equipos" />
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-navbutton-color" content="#254145" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
