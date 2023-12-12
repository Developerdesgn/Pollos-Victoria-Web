import React from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Wallet from "../assets/wallet.png";
import Footer from '../components/Footer';

function Sixth() {
    const textStyle = {
        color:' var(--Basic_Red, #E52823)',
    textAlign: 'center',
    fontFamily: 'var(--font=gotham)',
    fontSize: '35px',
    fontStyle: 'normal',
    fontWeight: '700',
    // lineHeight: 'px', /* 68.571% */
}
return (
    <>
        <Navbar />
        <BannerNav />
        <div>
            <div className='text-center'><img className='img-fluid' src={Wallet} /></div>
            <div style={textStyle}>¡Se ha completado su pago!</div>
        </div>
        <Footer />
    </>
)
}

export default Sixth