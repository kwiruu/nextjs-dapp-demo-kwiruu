import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { UserProfileManager } from '../components/UserProfileManager';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Demo Page</h1>
      <WalletMultiButton/>
      <UserProfileManager/>
    </div>
  );
}