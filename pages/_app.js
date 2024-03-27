import Head from 'next/head'
import '../styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>Demo App</title>
        </Head>
        <main>
            {/* <WalletConnectProvider> */}
            <Component {...pageProps} />
            {/* </WalletConnectProvider> */}
        </main>
    </>
)
}

export default MyApp
