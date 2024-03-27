import * as anchor from '@project-serum/anchor';
import { useEffect, useState, useMemo } from 'react';
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import toast from 'react-hot-toast';
import demoIDL from '../constants/demo.json';
import { PROGRAM_PUBKEY } from '../constants';

export function useUserProfile() {
    const { connection } = useConnection();
    const anchorWallet = useAnchorWallet();
    const [loading, setLoading] = useState(false);
    const [transactionPending, setTransactionPending] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    // Implement hooks to anchor here

    return {
        // Data
        loading,
        transactionPending,
        userProfile,
        // Functions
        initializeUser,
        editUserProfile,
        closeUserProfile,
    };
}
