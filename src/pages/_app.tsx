import BackToTopButton from "@/components/BackToTopButton";
import { MediaProvider } from "@/context/MediaProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <MediaProvider>
      <>
        <Component {...pageProps} />
        <BackToTopButton />
        <Toaster
          position="bottom-left"
        />
      </>
    </MediaProvider>
  )
}

export default App