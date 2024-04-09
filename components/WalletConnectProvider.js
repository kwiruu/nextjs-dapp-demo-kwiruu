import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { GlowWalletProvider, PhantomWalletAdapter, PhantomWalletProvider, SlopeWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

export function WalletConnectProvider ({children}) {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(()=> {
        if(network === WalletAdapterNetwork.Devnet){
            return 'https://api.devnet.solana.com';
        }

        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(()=> [new PhantomWalletAdapter()], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
