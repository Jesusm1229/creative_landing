import "@styles/globals.css";
import Layout from "@layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { AppProps } from "next/app";



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (

    <Layout>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics strategy="lazyOnload" />
      )}
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp;
