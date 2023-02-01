import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MobileMenuProvider } from "../context/MobileMenuContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps & { pageProps: any }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MobileMenuProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={pageProps.session} refetchInterval={0}>
            <Component {...pageProps} />
          </SessionProvider>
        </QueryClientProvider>
      </MobileMenuProvider>
    </>
  )
}
