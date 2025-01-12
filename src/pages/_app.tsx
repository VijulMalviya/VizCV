import "@/styles/globals.css";
import "@/styles/component.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

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
      <Provider store={store}>
        <Component {...pageProps} />
        <Toaster />
      </Provider>
    </>
  );
};

export default App;
