import BackToTopButton from "@/components/BackToTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
      <BackToTopButton />
    </>
  )
}
