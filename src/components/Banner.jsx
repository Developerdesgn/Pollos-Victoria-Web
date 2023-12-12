import React from 'react'
// import box2 from '../assets/Group 18451.png'
import { AppBar } from '@mui/material';
import Responsive from "../assets/res_banner.png"
import hamburger from "../assets/hamburger.png"
import cart from "../assets/cart.png"

function Banner() {
    return (
        <div className='banner'>
            <div className='banner_text_div'>
                <div>
                    <p className="titulo">Titulo</p>
                    <p className="promo">promo</p>
                    <p className="texto-promo">Texto promo</p>
                </div>
                <div className='cart-icon'>
                    <img width={70} height={70} src={cart} />
                </div>
                <div className='hamburger-banner'>
                    <img src={hamburger} />
                </div>
                <div className='banner-button-div'>
                    <button style={{ width: "150px", backgroundColor: "#EB252D", padding: "12px", borderRadius: "100px", textAlign: "center", color: "#fff", cursor: "pointner", outline: "none", border: "none" }}>Comprar</button>
                    <p className='price'>$359</p>
                    <sup className='price2'>$500</sup>
                </div>
            </div>
        </div>
    )
}

export default Banner