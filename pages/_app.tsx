import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "../src/components";
import { MantineProvider } from "@mantine/core";
import "../styles/footer.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Navbar />
        <div className="page">
          <Component {...pageProps} />
        </div>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default MyApp;
