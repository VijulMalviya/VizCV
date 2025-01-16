import "@/styles/globals.css";
import "@/styles/component.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { UseScrollTop } from "@/hooks/ScrollToTop";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>{"SnapCV"}</title>
        <meta
          name="description"
          content={
            "SnapCV is an AI-powered App, transform resume into ticket to Success."
          }
        />
        <meta
          name="keywords"
          content="SnapCV,snapcv, cv,resume, ai,AI, resume parser, ATS, ats"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UseScrollTop />
        <Component {...pageProps} />
        <Toaster />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </>
  );
};

export default App;
