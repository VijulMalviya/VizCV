import "@/styles/globals.css";
import "@/styles/component.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from 'react-hot-toast';

const App = ({ Component, pageProps }: AppProps) => {
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
      <ThemeProvider>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default App;
