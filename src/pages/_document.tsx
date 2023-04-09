import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </body>
    </Html>
  );
}
