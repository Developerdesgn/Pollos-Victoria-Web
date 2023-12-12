import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import paymentCard from "../assets/payment-card.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';
import mapImg from '../assets/mapImg.png';
import { useNavigate } from 'react-router-dom'

function Ubicaciones2() {


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

    const inputStyle = {
        width: '350px',
        height: '57px',
        borderRadius: '100px',
        background: 'var(--Light_Blue, #F0F5FA)',
        border: "none",
        outline: "none",
        padding: "0 20px",
        color: ' #B5B5B5',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '300',

        lineHeight: "normal"

    }
    const inputStyle1 = {
        width: '160px',
        height: '57px',
        borderRadius: '100px',
        background: 'var(--Light_Blue, #F0F5FA)',
        border: "none",
        outline: "none",
        padding: "0 20px",
        color: ' #B5B5B5',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '300',

        lineHeight: "normal",
        margin: "0 10px"

    }
    const labelStyle = {
        color: '#ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        opacity: '0.9',
        margin: "14px 5px"
        // marginTop:"15px"

    }
    const btnStyle = {
        width: '345px',
        height: '57px',
        borderRadius: '100px',
        background: '#EB252D',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: ' var(--white-100, #FFF)',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '700',
        margin: "30px 0",
        // marginBotton:"px"
    }
    const btnStyle2 = {
        width: '100px',
        height: '57px',
        borderRadius: '100px',
        background: '#EB252D',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: ' var(--white-100, #FFF)',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '700',
        margin: width < 768 ? "30px 10px" : "30px 30px",
        // marginBotton:"px"
    }
    const btnStyle3 = {
        width: '100px',
        height: '57px',
        borderRadius: '100px',
        background: '#EFEFEF',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: '#ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '700',
        margin: width < 768 ? "30px 10px" : "30px 30px",
        // marginBotton:"px"
    }
    const btnStyle4 = {
        width: '100px',
        height: '57px',
        borderRadius: '100px',
        background: '#EFEFEF',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: '#ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '700',
        margin: width < 768 ? "30px 10px" : "30px 30px",
        // marginBotton:"px"
    }
    return (
        <>
            {/* <Navbar /> */}
            <div
                style={{
                    position: "relative",
                    cursor: "pointer"
                }}
            >
                <div
                    onClick={() => setState(true)}
                    style={{
                        position: "absolute",
                        backgroundColor: "red",
                        borderRadius: "100%",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 20,
                        right: 20,
                        zIndex: 1000
                    }}>
                    <img src={settingIcon} />
                </div>
            </div>
            <BannerNav text={'Ubicaciones guardadas'} icon={paymentCard} />
            <br />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ marginBottom: 40 }}>
                    <img style={{width: width < 768 ? "250px" : "100%"}} src={mapImg} alt="" />
                </div>
                <div>
                    <div style={{ position: "relative", margin: "8px 0" }} >
                        <div>
                            <input type='text' style={inputStyle} placeholder='Direccion*' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ position: "relative", margin: "8px 0" }} >
                        <div>
                            <input type='text' style={inputStyle} placeholder='Calle*' />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ position: "relative", margin: "8px 0" }}>
                        <div>
                            <input type='text' style={inputStyle} placeholder='Adicional' />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <div style={btnStyle2}>Casa</div>
                    <div style={btnStyle3}>Casa</div>
                    <div style={btnStyle4}>Casa</div>
                </div>

                <div style={btnStyle} onClick={() => navigate("/Metados2")}>Agregar Método de Pago</div>

            </div>

            <Sidebar state={state} setState={setState} />
        </>
    )
}

export default Ubicaciones2