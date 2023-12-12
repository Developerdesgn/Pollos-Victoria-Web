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
import deleteIcon from "../assets/Delete.svg";
import statusCheck from "../assets/status-complete.svg";
import location2 from "../assets/location2.svg";
import mapRoute from "../assets/map-route.svg";
import mapIndicator from "../assets/map-indicator.svg";
import send from "../assets/send.svg";

function OrderDetails() {


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
        lineHeight: '30px',
        textTransform: 'capitalize',
        margin: "10px"

    }
    const smallText2 = {
        color: ' var(--Medium_grey, #E52823)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '700',
        textTransform: 'capitalize',
        margin: "50px 0 0 0"

    }
    const date = {
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
            <BannerNav text="Detalles del envío" icon={backIcon} />
            <div className='container'>
                <div>
                    <div style={{ display: "flex" }}>
                        <div style={{
                            width: '228px',
                            height: '136px'
                        }}>
                            <img className='img-fluid' src={ProductImage} />
                        </div>
                        <div>
                            <div style={date}>13 Sept, 10:00pm</div>
                            <div style={headText}>Combo 2 Piezas de Pollo</div>
                            <div style={{ margin: "10px" }} className='d-flex  align-items-center'>
                                <div><img src={Star} /></div>
                                <div className='mt-1' style={{ color: "#A5A5A5", fontSize: "14px", fontFamily: "var(--font-gotham)" }}>4.5</div>
                            </div>
                            <div style={smallText}>1x Refresco de uva</div>
                            <div style={smallText}>1x Papa mediana</div>
                            <div style={smallText2}> <img src={deleteIcon} alt="" /> Cancelar pedido</div>
                        </div>
                    </div>
                    <div style={{ marginTop: "100px" }}>
                        <div style={{ display: "flex" }}>
                            <img src={location2} />
                            <p style={{ padding: 0, margin: "0 0 0 10px" }}>Avn. John F. Kennedy esquina Tiradentes, estación de combustible Sunix</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: width < 768 ? "start" : "center",
                            flexDirection: width < 768 ? "column" : "row",
                        }}>
                            <div style={{
                                width:  width < 768 ? "100%" : "710px",
                                height: "397px",
                                background: "var(--Light_Grey, #D0D9E1)",
                                position: "relative"
                            }}>
                                <img style={{ position: "absolute", top: 20, left:  width < 768 ? 10 : 150  }} src={mapIndicator} alt="" />
                                <img style={{ position: "absolute", top: 112, left:  width < 768 ? 40 : 190  }} src={mapRoute} alt="" />
                            </div>
                            <div style={{ marginLeft: "10px", position: "relative" }}>
                                <div>
                                    <p style={{
                                        color: "#181C2E",
                                        fontFamily: 'var(--font-gotham)',
                                        fontSize: '30px',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        lineHeight: "normal",
                                        margin: 0
                                    }}>20 min</p>
                                    <p style={{
                                        color: "#ADADAF",
                                        fontFamily: 'var(--font-gotham)',
                                        fontSize: '14px',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "normal",
                                    }}>Tiempo estimado de entrega <br /> 10:20 pm</p>
                                </div>
                                <div>
                                    <div style={{ display: "flex", margin: "30px 0" }}>
                                        <img src={statusCheck} />
                                        <p style={{
                                            fontSize: "15px",
                                            color: "#EB252D",
                                            padding: 0,
                                            margin: "0 0 0 10px"
                                        }}>Tu orden ha sido recibidaen el restaurante</p>
                                    </div>
                                    <div style={{
                                        width: "3px",
                                        height: "38px",
                                        backgroundColor: "#E52823",
                                        position: "absolute",
                                        top: 120,
                                        left: 11
                                    }}></div>
                                    <div style={{ display: "flex", margin: "30px 0" }}>
                                        <img src={statusCheck} />
                                        <p style={{
                                            fontSize: "15px",
                                            color: "#EB252D",
                                            padding: 0,
                                            margin: "0 0 0 10px"
                                        }}>El restaurante preparatu orden</p>
                                    </div>

                                    <div style={{
                                        width: "3px",
                                        height: "38px",
                                        backgroundColor: "#E52823",
                                        position: "absolute",
                                        top: 180,
                                        left: 11
                                    }}></div>
                                    <div style={{ display: "flex", margin: "30px 0" }}>
                                        <img src={statusCheck} />
                                        <p style={{
                                            fontSize: "15px",
                                            color: "#EB252D",
                                            padding: 0,
                                            margin: "0 0 0 10px"
                                        }}>Tu orden se ha enviado</p>
                                    </div>

                                    <div style={{
                                        width: "3px",
                                        height: "38px",
                                        backgroundColor: "#E52823",
                                        position: "absolute",
                                        top: 230,
                                        left: 11
                                    }}></div>
                                    <div style={{ display: "flex", margin: "30px 0" }}>
                                        <img src={statusCheck} />
                                        <p style={{
                                            fontSize: "15px",
                                            color: "#EB252D",
                                            padding: 0,
                                            margin: "0 0 0 10px"
                                        }}>Tu pedido ha llegado!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "70px" }}>
                            <div style={{
                                width: "110px",
                                height: "110px",
                                borderRadius: "100%",
                                backgroundColor: "#D0D9E1"
                            }}></div>
                            <div style={{ display: "flex" }}>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{
                                        color: "#181C2E",
                                        fontSize: "20px",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        textTransform: "capitalize",
                                        fontFamily: 'var(--font-gotham)',
                                        margin: 0
                                    }}>Servicio al cliente</p>
                                    <p style={{
                                        color: "#A0A5BA",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        textTransform: "capitalize",
                                        fontFamily: 'var(--font-gotham)',
                                        margin: 0
                                    }}>Delivery</p>
                                    <p style={{
                                        color: "#A0A5BA",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        textTransform: "capitalize",
                                        fontFamily: 'var(--font-gotham)',
                                        margin: "10px 0 0 0"
                                    }}>000 - 000 - 0000</p>
                                </div>
                                <div style={{ marginLeft: 20 }}>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "45px",
                                        height: "45px",
                                        backgroundColor: "#EB252D",
                                        borderRadius: "100%",
                                        cursor: "pointer"
                                    }}>
                                        <img src={send} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails