import { Html, Head, Main, NextScript } from "next/document";

const Document: any = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/media.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document