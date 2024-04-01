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

    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions());
            return new anchor.Program(demoIDL, PROGRAM_PUBKEY, provider);
        }
    }, [connection, anchorWallet]);

    useEffect(() => {
        // Fetch the user profile if it exists
        const fetchUserProfile = async () => {
            if(program && anchorWallet?.publicKey && !transactionPending) {
                try {
                    setLoading(true);
                    const [profilePda] = findProgramAddressSync([utf8.encode('USER_STATE'), anchorWallet.publicKey.toBuffer()], program.programId);
                    const profile = await program.account.userProfile.fetchNullable(profilePda);
                    setUserProfile(profile);
                } catch (error) {
                    console.error("Error fetching user profile: ", error);
                    setUserProfile(null);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUserProfile();
    }, [program, anchorWallet, transactionPending])

    // Implement hooks to anchor here
    const initializeUser = async () => {
        if (program && anchorWallet?.publicKey) {
            try {
                setTransactionPending(true);
                const [profilePda] = findProgramAddressSync([utf8.encode('USER_STATE'), anchorWallet.publicKey.toBuffer()], program.programId);

                await program.methods
                    .initializeUser()
                    .accounts({
                        userProfile: profilePda,
                        authority: anchorWallet.publicKey,
                        systemProgram: anchor.web3.SystemProgram.programId,
                    })
                    .rpc();
                
                toast.success('User profile initialized successfully');
                setUserProfile({})
            } catch(error) {
                console.error("Error initializing user profile: ", error);
                toast.error("Failed to initialize user profile");
            } finally {
                setTransactionPending(false);
            }
        }
    };

    const editUserProfile = async (firstName, lastName, age) => {
        if (program && anchorWallet?.publicKey && userProfile) {
            try {
                setTransactionPending(true);
                const [profilePda] = findProgramAddressSync([utf8.encode('USER_STATE'), anchorWallet.publicKey.toBuffer()], program.programId);

                await program.methods
                    .editUserProfile(firstName, lastName, age)
                    .accounts({
                        userProfile: profilePda,
                        authority: anchorWallet.publicKey,
                    })
                    .rpc();
                
                toast.success('User profile updated successfully');
            } catch(error) {
                console.error("Error updating user profile: ", error);
                toast.error("Failed to update user profile");
            } finally {
                setTransactionPending(false)
            }
        }
    };

    const closeUserProfile = async () => {
        if (program && anchorWallet?.publicKey && userProfile) {
            try {
                setTransactionPending(true);
                const [profilePda] = findProgramAddressSync([utf8.encode('USER_STATE'), anchorWallet.publicKey.toBuffer()], program.programId);

                await program.methods
                    .closeUserProfile()
                    .accounts({
                        userProfile: profilePda,
                        authority: anchorWallet.publicKey,
                    })
                    .rpc();
                
                toast.success('User profile closed successfully');
                setUserProfile(null);
            } catch(error) {
                console.error("Error closing user profile: ", error);
                toast.error("Failed to close user profile");
            } finally {
                setTransactionPending(false)
            }
        }
    };

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
