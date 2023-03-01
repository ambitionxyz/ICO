import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "../src/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
