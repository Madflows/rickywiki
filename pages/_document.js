import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/gt-walsheim"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/morty.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
