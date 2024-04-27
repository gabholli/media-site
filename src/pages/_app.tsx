import BackToTopButton from "@/components/BackToTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Component {...pageProps} />
      <BackToTopButton />
    </>
  )
}

export default App