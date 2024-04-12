import Head from 'next/head'
import '../styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletConnectProvider } from '../components/WalletConnectProvider';
import { Fragment, useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    });

    return (
        <>
            {mounted && 
            <>
                <Head>
                    <title>CIT-U SBC DEMO</title>
                </Head>
                <main>
                    <WalletConnectProvider>
                        <Component {...pageProps} />
                    </WalletConnectProvider>
                </main>
            </>}

        </>
    )
}

export default MyApp
