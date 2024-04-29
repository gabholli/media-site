import BackToTopButton from "@/components/BackToTopButton";
import { MediaProvider } from "@/context/MediaProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <MediaProvider>
      <>
        <Component {...pageProps} />
        <BackToTopButton />
      </>
    </MediaProvider>
  )
}

export default App