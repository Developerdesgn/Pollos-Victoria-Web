import React from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Visa from "../assets/visa.png"
import Mastercard from "../assets/Mastercard.png"
import Right from "../assets/circleright.png"
import Card from "../assets/locationSearch.svg"
import wallet from "../assets/wallet.svg"

function Finali() {
    const smallText = {
        color: '#E52823',
        fontFamily: 'var(--font-gotham)',
        fontSize: '35px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        textAlign: 'center',
        opacity: ' 0.7',
        margin: "100px 0 0 0",
    }
    return (
        <>
            <div className='banner-bg'></div>
            <div className='d-flex flex-column align-items-center justify-content-center '>
                <img className='img-fluid' src={wallet} />
                <p style={smallText}>¡Se ha completado su pago!</p>
            </div>
        </>
    )
}

export default Finali