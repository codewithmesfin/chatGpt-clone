import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  <Script
    id="Adsense-id"
    data-ad-client="ca-pub-5828433625810537"
    async
    strategy="afterInteractive"
    onError={(e) => {
      console.error("Script failed to load", e);
    }}
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />;
  return <Component {...pageProps} />;
}
