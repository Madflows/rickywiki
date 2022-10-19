import "../styles/globals.css";
import Navbar from "../components/Navbar";

import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";
import { ModalProvider } from "../context/ModalContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Morty!</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main className="pt-[7rem] pb-[4rem]">
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
