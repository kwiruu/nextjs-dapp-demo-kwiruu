import React, { useState } from 'react';
import { useUserProfile } from '../hooks/demo';

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
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
            {userProfile && (
                <div style={{ marginBottom: '20px' }}>
                    <h3>Profile Details:</h3>
                    <p>First Name: {userProfile.firstName}</p>
                    <p>Last Name: {userProfile.lastName}</p>
                    <p>Age: {userProfile.age}</p>
                </div>
            )}
            <div>
                <button onClick={initializeUser} disabled={transactionPending || userProfile} style={{ marginBottom: '10px' }}>
                    Initialize Profile
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        style={{ padding: '8px', marginBottom: '10px' }}
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        style={{ padding: '8px', marginBottom: '10px' }}
                    />
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        style={{ padding: '8px', marginBottom: '10px' }}
                    />
                    <button onClick={handleEdit} disabled={transactionPending || !userProfile} style={{ padding: '10px', marginBottom: '10px' }}>
                        Edit Profile
                    </button>
                    <button onClick={closeUserProfile} disabled={transactionPending || !userProfile} style={{ padding: '10px', marginBottom: '10px' }}>
                        Close Profile
                    </button>
                </div>
                {!userProfile && <p>No profile found. Use the button above to initialize a new profile.</p>}
            </div>
        </div>
    );
}
