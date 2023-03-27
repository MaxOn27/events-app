import Head from 'next/head';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from "../components/layout/Layout"


export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
          <Head>
              <title>Next Events</title>
              <meta name='description' content='NextJS Events' />
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
        <Component {...pageProps} />
      </Layout>
  );
}