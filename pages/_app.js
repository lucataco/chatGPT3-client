import Script from 'next/script'
import "../styles/globals.css";
import "../styles/app.css";
import "../styles/normal.css";
export default function App({ Component, pageProps }) {
  return (
  <>
    <Script defer data-domain="chatgpt3sandbox.vercel.app" src="https://data.lucata.co/js/script.js" />
    <Component {...pageProps} />
  </>
  );
}
