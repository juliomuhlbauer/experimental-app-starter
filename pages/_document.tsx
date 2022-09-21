import config from "config";
import { theme } from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

const { name, description, icons } = config;

const DocumentMeta = () => {
  return (
    <>
      <meta name="application-name" content={name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={name} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="theme-color" content="#1c2732" />
      <link rel="apple-touch-icon" sizes="192x192" href={icons.web.src} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href={icons.web.src} />
    </>
  );
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <DocumentMeta />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
