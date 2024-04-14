import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { UserProfileManager } from '../components/UserProfileManager';
import Image from 'next/image';
import catColorz from '../public/images/color_atlas.gif';
import catItemz from '../public/images/item_atlas.gif';
import catBackgroundz from '../public/images/bg_atlas.gif';
import background_page from '../public/images/Pattern.png';


export default function Home() {
    const [clipPathValueColor, setclipPathValueColor] = useState(0); // Initial clip-path value
    const [transformValueColor, settransformValueColor] = useState(0); // Initial transform value

    const [clipPathValueEyes, setclipPathValueEyes] = useState(0); // Initial clip-path value
    const [transformValueEyes, settransformValueEyes] = useState(0); // Initial transform value

    const [clipPathValueBackground, setclipPathValueBackground] = useState(0); // Initial clip-path value
    const [transformValueBackground, settransformValueBackground] = useState(0); // Initial transform value

    const handlePreviousClickColor = () => {
    if (transformValueColor < 0) { // Check if transform value is less than 0
        setclipPathValueColor(clipPathValueColor + 10); // Decrement clip-path value by 10%
        settransformValueColor(transformValueColor + 10); // Increment transform value by 10%
    }
  };

const handleNextClickColor = () => {
    if (transformValueEyes > -90) {
        settransformValueColor(transformValueColor - 10);
        setclipPathValueColor(clipPathValueColor - 10);
    }
  };

  const handlePreviousClickEyes = () => {
    if (transformValueEyes < 0) { // Check if transform value is less than 0
        setclipPathValueEyes(clipPathValueEyes + 10); // Decrement clip-path value by 10%
        settransformValueEyes(transformValueEyes + 10); // Increment transform value by 10%
    }
  };

const handleNextClickEyes = () => {
    if (transformValueEyes > -90) {
        settransformValueEyes(transformValueEyes - 10);
        setclipPathValueEyes(clipPathValueEyes - 10);
    }
  };

  const handlePreviousClickBackground = () => {
    if (transformValueBackground < 0) { // Check if transform value is less than 0
        setclipPathValueBackground(clipPathValueBackground + 10); // Decrement clip-path value by 10%
        settransformValueBackground(transformValueBackground + 10); // Increment transform value by 10%
    }
  };

const handleNextClickBackground = () => {
    if (transformValueBackground > -90) {
        settransformValueBackground(transformValueBackground - 10);
        setclipPathValueBackground(clipPathValueBackground - 10);
    }
  };

    return (
        <div>
          <Image src={background_page} alt="carcolor img!" style={{position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,  // Ensure the background is behind other content
            backgroundImage: `url(${background_page})`,
            backgroundSize: 'cover',  // Cover the entire background
            backgroundPosition: 'center',  // Center the background
            backgroundRepeat: 'no-repeat'
            }} />
            <h2 style={{marginLeft:'5%',marginBottom:'3%',border:'2px solid #512b08',textAlign:'center', color:'#502909',width:'30%',backgroundColor:'#f4cecb',borderRadius:'5px'}}><h3 style={{padding:'5px',color:'#502909',fontFamily:'Roboto', fontWeight:'600',borderBottom:'2px solid #512b08',backgroundColor:'#fcd26c', margin:'0px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',display:'flex',justifyContent:'space-between'}}><div style={{display:'flex'}}><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#e86e49',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#ffb703',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#6fd555',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div></div></h3>SBC Cat Builder</h2>
            
            <div style={{display:'flex'}}>
                <div style={{display:'flex', flexDirection:'column', width:'20%',marginLeft:'5%'}}>
                    <div class="window-box" style={{border:'2px solid #512b08', marginLeft:'5%',borderRadius:'5px',backgroundColor:'#fff5dc',height:'320px',display:'flex',flexDirection:'column'}}>
                        <h3 style={{padding:'15px',color:'#502909',fontFamily:'Roboto', fontWeight:'600',borderBottom:'2px solid #512b08',backgroundColor:'#fa8878', margin:'0px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',display:'flex',justifyContent:'space-between'}}>About me<div style={{display:'flex'}}><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#e86e49',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#ffb703',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#6fd555',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div></div></h3>
                        <div>
                                <p style={{padding:'20px',color:'#512b08',fontFamily:'Roboto', fontWeight:'400', fontSize:'0.8em', paddingBottom:'0px'}}>
                                Hi! I'm Keiru. I am currently studying how to implement this on the Solana blockchain. I'm having problems figuring out how to make this Cat Maker auto-generated using only your name and last name. I plan to use it as a hashtable, converting your information into integers and applying it to the cat maker to generate a cat using your name as a key.</p>
                                <p style={{padding:'20px',paddingBottom:'10px',color:'#512b08',fontFamily:'Roboto', fontWeight:'400', fontSize:'0.8em'}}>
                                Big thanks to Pancho in ArtStation as for his pop cat sprite pixel art animation </p>
                        </div>
                    </div>

                    <div class="window-box" style={{marginTop:'10%',border:'2px solid #512b08', marginLeft:'5%',borderRadius:'5px',backgroundColor:'#fff5dc',height:'150px',display:'flex',flexDirection:'column'}}>
                    <h3 style={{padding:'15px',color:'#502909',fontFamily:'Roboto', fontWeight:'600',borderBottom:'2px solid #512b08',backgroundColor:'#78bea2', margin:'0px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',display:'flex',justifyContent:'space-between'}}>Contact me<div style={{display:'flex'}}><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#e86e49',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#ffb703',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#6fd555',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div></div></h3>
                        <div>
                            <li>
                                <ul style={{color:'#502909',fontFamily:'Roboto', fontWeight:'600',fontSize:'0.8em',margin:'2px'}}>Discord  : watadamz_277</ul>
                                <ul style={{color:'#502909',fontFamily:'Roboto', fontWeight:'600',fontSize:'0.8em',margin:'2px'}}> Gmail    : keiruvent.cabili@gmail.com</ul>
                                <ul style={{color:'#502909',fontFamily:'Roboto', fontWeight:'600',fontSize:'0.8em',margin:'2px'}}>LinkedIn : keiru-cabili-6944552a4</ul>
                            </li>
                        </div>
                    </div>
                </div>

                <div class="window-box" style={{border:'2px solid #512b08',width:'25%', marginLeft:'5%',marginRight:'10%',borderRadius:'5px',backgroundColor:'#fff5dc',height:'80%'}}>
                    <UserProfileManager/>
                </div>
                <div style={{display:'flex', flexDirection:'column',width:'20%'}}>
                        
                    <div class="window-box" style={{height:'430px',border:'2px solid #512b08',marginRight:'10%',borderRadius:'5px',backgroundColor:'#fff5dc'}}>
                        <h3 style={{padding:'15px',color:'#502909',fontFamily:'Roboto', fontWeight:'600',borderBottom:'2px solid #512b08',backgroundColor:'#fa8878', margin:'0px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',display:'flex',justifyContent:'space-between'}}>Cat Maker<div style={{display:'flex'}}><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#e86e49',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#ffb703',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#6fd555',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div></div></h3>

                        <div class="container-avatar">
                            <div class="avatar fit">
                            
                                <div className="image-container" style={{overflow: 'hidden'}}>
                                <Image src={catColorz} class="color-overlay" alt="carcolor img!" style={{
                                    clipPath: `inset(0% ${clipPathValueColor+90}% 90% ${-clipPathValueColor}%)`, // Adjusted clip-path value
                                    transform: `translate(${transformValueColor}%, 0%)`,position:'absolute' // Adjusted transform value
                                }} unoptimized />

                                <Image src={catItemz} class="color-overlay" alt="carcolor img!" style={{
                                    clipPath: `inset(0% ${clipPathValueEyes+90}% 90% ${-clipPathValueEyes}%)`, // Adjusted clip-path value
                                    transform: `translate(${transformValueEyes}%, 0%)`,position:'absolute' // Adjusted transform value
                                }} unoptimized/>

                                <Image src={catBackgroundz} class="color-overlay-bg" alt="carcolor img!" style={{
                                    clipPath: `inset(0% ${clipPathValueBackground+90}% 90% ${-clipPathValueBackground}%)`, // Adjusted clip-path value
                                    transform: `translate(${transformValueBackground}%, 0%)`,position:'absolute' // Adjusted transform value
                                }}/> 
                                </div>

                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',paddingTop:'20px'}}>
                                <div class="button-maker" style={{display:'flex', flexDirection:'column'}}>
                                    <button class="window-box-button" onClick={handlePreviousClickColor} style={{backgroundColor:'#fa8878', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>◄</button>
                                    <button class="window-box-button" onClick={handlePreviousClickEyes} style={{backgroundColor:'#fa8878', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>◄</button>
                                    <button class="window-box-button" onClick={handlePreviousClickBackground} style={{backgroundColor:'#fa8878', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>◄</button>
                                </div>
                                <div style={{display:'flex', flexDirection:'column', color:'#502909',fontFamily:'Roboto', fontWeight:'600',fontSize:'0.7em',textAlign:'center'}}>
                                    <p>Color</p>
                                    <p>Items</p>
                                    <p>Background</p>
                                </div>
                                <div class="button-maker" style={{display:'flex', flexDirection:'column'}}>
                                    <button class="window-box-button" onClick={handleNextClickColor} style={{backgroundColor:'#fa8878', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>►</button>
                                    <button class="window-box-button" onClick={handleNextClickEyes} style={{backgroundColor:'#fa8878', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>►</button>
                                    <button class="window-box-button" onClick={handleNextClickBackground} style={{backgroundColor:'#fa8878', border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}>►</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="window-box" style={{marginTop:'10%',width:'90%',border:'2px solid #502909',borderRadius: '5px', color:'#502909',fontFamily:'Roboto', fontWeight:'600',backgroundColor:'#fff5dc'}}>
                    <h3 style={{padding:'5px',color:'#502909',fontFamily:'Roboto', fontWeight:'600',borderBottom:'2px solid #512b08',backgroundColor:'#fcd26c', margin:'0px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',display:'flex',justifyContent:'space-between'}}><div style={{display:'flex'}}><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#e86e49',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#ffb703',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div><div style={{height:'15px',width:'15px',borderRadius:'10px',backgroundColor:'#6fd555',margin:'auto',marginLeft:'5px',border:'2px solid #512b08'}}></div></div></h3>
                        <WalletMultiButton  style={{margin:'15%',width:'100%',backgroundColor:'#fcd26c',border:'2px solid #502909',color:'#502909',fontFamily:'Roboto', fontWeight:'600'}}/>
                    </div>

                </div>
            </div>
        </div>
    );
}
