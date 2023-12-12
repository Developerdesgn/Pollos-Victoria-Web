import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import TotalBox from '../components/TotalBox'
import MethodDelivery from '../components/MethodDelivery'
import ProductImage from "../assets/zinger.png"

import Star from "../assets/star.png"
import Footer from '../components/Footer'
import CustBox from '../components/CustBox'
import backIcon from "../assets/chevron.png";
import { useNavigate } from 'react-router-dom'

function Fifth() {


    const [state, setState] = React.useState(false);
    const navigate = useNavigate()


    const [width, setWidth] = useState()

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this effect will only run once (on mount)

    const totalCart = [
        { total: "300", delivery: "300", discount: "300", sub_total: "300" },
    ]
    const methods = [
        { name: "Delivery", image: "Icon" },

    ]
    const headText = {
        color: '#EB252D',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: ' 18px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        margin: "10px"
    }
    const smallText = {
        color: ' var(--Medium_grey, #646982)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        textTransform: 'capitalize',
        margin: "10px"

    }
    return (
        <>

            <BannerNav text="Confirmar orden" icon={backIcon} />
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 sol-lg-6 col-md-6">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div style={{
                                width: '228px',
                                height: '136px'
                            }}>
                                <img className='img-fluid' src={ProductImage} />
                            </div>
                            <div >
                                <div style={headText}>Combo 2 Piezas de Pollo</div>
                                <div style={{ margin: "10px" }} className='d-flex  align-items-center'>
                                    <div><img src={Star} /></div>
                                    <div className='mt-1' style={{ color: "#A5A5A5", fontSize: "14px", fontFamily: "var(--font-gotham)" }}>4.5</div>
                                </div>
                                <div style={smallText}>1x Refresco de uva</div>
                                <div style={smallText}>1x Papa mediana</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                            <CustBox />

                        </div>
                    </div>
                    <div className="col-sm-12 sol-lg-6 col-md-6" style={{ display: width < 768 && "flex", justifyContent: width < 768 && "center", alignItems: width < 768 && "center", flexDirection: width < 768 && "column" }}>
                        <TotalBox data={totalCart?.[0]} />
                        <MethodDelivery data={methods} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Fifth