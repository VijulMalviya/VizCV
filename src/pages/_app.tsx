import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
    <title>{'AdvisoryAI'}</title>
    <meta
      name='description'
      content={'AdvisoryAI is an AI-powered financial advisor that increases efficiency.'}
    />
    <meta name='keywords' content='Advisory, AI, Financial Advisors' />
    <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    
    </>
  );
}

export default App