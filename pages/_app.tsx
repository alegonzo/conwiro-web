import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import type { AppProps } from 'next/app'

import { NextPage } from 'next'
import Layout from '../components/Layout'

type AppPropsWithLayout = AppProps & {
  Component: NextPage
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
