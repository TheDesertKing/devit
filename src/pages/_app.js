import "../css/website_design_and_header.css"
import Layout from "../components/layout"
import { SessionProvider } from "next-auth/react"

export default function NyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div className="app">
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </div>
  )
}
