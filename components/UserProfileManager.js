import React, { useState } from 'react';
import { useUserProfile } from '../hooks/demo';
import Image from 'next/image';

export function UserProfileManager() {
    const { loading, transactionPending, userProfile, initializeUser, editUserProfile, closeUserProfile } = useUserProfile();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const handleEdit = () => {
        editUserProfile(firstName, lastName, parseInt(age, 10)); 
    };
    

    if (loading) return <div>Loading...</div>;
    

    // console.log("first name: ", userProfile.firstName)
    return (
        <div style={{ width: '100%', margin: 'auto'}}>
            <div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid #512b08', width: '100%', margin: 'auto',backgroundColor:'#78bea2',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}}>
                <h3 style={{padding:'0px',marginLeft:'20px',color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}><div style={{display:'flex',justifyContent:'space-between'}}><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#e86e49',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#ffb703',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#6fd555',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div></div></h3>
                
                <button class="window-box-button" onClick={initializeUser} disabled={transactionPending || userProfile} style={{ margin:'10px',marginRight: '20px', backgroundColor:'#78bea2',padding:'10px',border:'2px solid #532d08',borderRadius:'5px',color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>
                    Initialize Profile
                </button>
            </div>
                <div style={{maxWidth: '500px', margin: 'auto',marginTop:'50px'}}>
            
            {userProfile && (
                <div style={{ padding: '10px',color:'#502909',fontFamily:'Roboto', fontWeight:'600', border:'2px solid #532d08', borderRadius:'5px',display:'flex',justifyContent: 'space-between', width:'80%', margin:'auto',marginBottom: '50px'}}>
                    <div syle={{width:'100%'}}>
                        <h3>Profile Details:</h3>
                        <p>First Name: {userProfile.firstName}</p>
                        <p>Last Name: {userProfile.lastName}</p>
                        <p>Age: {userProfile.age}</p>
                    </div>
                </div>
            )}
            <div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        style={{ padding: '8px', marginBottom: '10px' ,backgroundColor:'#f4cecb',border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600',width:'80%',margin:'auto'}}
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        style={{ padding: '8px', marginBottom: '10px' ,backgroundColor:'#f4cecb',border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600',width:'80%',margin:'auto'}}
                    />
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        style={{ padding: '8px', marginBottom: '10px' ,backgroundColor:'#f4cecb',border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600',width:'80%',margin:'auto'}}
                    />
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom:'8%'}}>
                    <button class="window-box-button" onClick={handleEdit} disabled={transactionPending || !userProfile} style={{backgroundColor:'#78bea2', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600',width:'30%',padding:'10px',marginLeft:'12%',marginTop:'5%'}}>
                        Edit Profile
                    </button>
                    <button class="window-box-button" onClick={closeUserProfile} disabled={transactionPending || !userProfile} style={{backgroundColor:'#78bea2', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600',width:'30%',padding:'10px',marginRight:'12%',marginTop:'5%'}}>
                        Close Profile
                    </button>
                    </div>
                
                {!userProfile && <p style={{paddingBottom:'0px',color:'#502909',fontFamily:'Roboto', fontWeight:'600', textAlign:'center',padding:'5%'}}>No profile found. Use the button above to initialize a new profile.</p>}
                </div>
            </div>
        </div>
        </div>
    );
}
