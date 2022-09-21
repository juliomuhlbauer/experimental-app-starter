import { AppPropsWithLayout } from "@/types/next";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import Head from "next/head";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/pilot-icon.svg" />
      </Head>

      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
}

export default App;
