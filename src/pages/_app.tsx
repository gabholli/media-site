import BackToTopButton from "@/components/BackToTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Component {...pageProps} />
      <BackToTopButton />
      <Toaster
        position="bottom-left"
      />
    </>
  )
}

export default App