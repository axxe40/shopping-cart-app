import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" sizes='32x32' href='/cartlist.png' />
        <title>Shopping Cart App</title>
      </Head>
    <Component {...pageProps} />
    </>
  )
}