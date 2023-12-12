import React from 'react'
import ChevronLeft from "../assets/chevron.png"
import BannerShort from "../assets/banner_Short.png"
import { useLocation } from 'react-router-dom'

function BannerNav({ text, icon }) {

    const location = useLocation()

    return (
        <>
            <div className='banner-bg' style={{ position: "relative" }}>
                <div style={{
                    position: "absolute",
                    top: "55%",
                    left: "5%",
                    bottom: "10%"
                }}>
                    <div className='d-flex align-items-center' >
                        <div><img className='img-fluid' src={icon} /></div>
                        <div className='text_banner'>{text}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerNav