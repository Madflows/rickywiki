import "../styles/globals.css";
import Navbar from "../components/Navbar";

import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";

import { ModalProvider } from "../context/ModalContext";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Morty!</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider enableSystem={true} attribute="class">
          <ModalProvider>
            <Navbar />
            <main className="pt-[7rem] pb-[4rem]">
              <Component {...pageProps} />
            </main>
          </ModalProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
