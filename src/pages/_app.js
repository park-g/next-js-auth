import { SessionProvider } from "next-auth/react";
import '@src/global.css'
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider
      refetchInterval={0}
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}
