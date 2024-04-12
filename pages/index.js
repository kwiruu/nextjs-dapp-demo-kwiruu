import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { UserProfileManager } from '../components/UserProfileManager';
import React from 'react';

export default function Home() {
  return (
    <div style={{backgroundColor: '#df9af7'}}>
      <h1 style={{textAlign:'center', color:'#502909'}}>SBC Profile Manager</h1>
        <WalletMultiButton style={{marginLeft: '50px'}}/>
          <div style={{border:'2px solid #512b08',width:'40%', margin:'auto',borderRadius:'5px',backgroundColor:'#fff5dc'}}>
          <UserProfileManager/>
        </div>
    </div>
  );
}