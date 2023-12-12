import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Visa from "../assets/visa.png"
import Mastercard from "../assets/Mastercard.png"
import Right from "../assets/circleright.png"
import Card from "../assets/cardempty.png"
import paymentCard from "../assets/payment-card.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';
import { useNavigate } from 'react-router-dom'

function Metados() {

    const [width, setWidth] = useState()
    const [state, setState] = React.useState(false);

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

    const navigate = useNavigate()

    const boxStyle = {
        width: width < 768 ? "100%" : '439px',
        height: '377px',
        background: "#F7F8F9",
        margin: "20px auto",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const titleText = {
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
    const smallText = {
        width: '266px',
        height: '61px',
        color: '#2D2D2D',
        fontFamily: 'var(--font-gotham)',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        textAlign: 'center',
        opacity: ' 0.7',
        margin: "10px 0",
        lineHeight: '15px', /* 83.333% */
        letterSpacing: '0.5px', /* 83.333% */
    }
    const smallText1 = {

        color: '#ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        margin: "5px 0"

    }
    const btnStyle = {
        width: '308px',
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
            <BannerNav text={'Métodos de pago'} icon={paymentCard} />
            <div className='d-flex justify-content-center'>
                <div style={{ width: "85px", position: "relative", height: "72px", background: 'var(--Light_Blue, #F0F5FA)', borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid var(--Basic_Red, #E52823)" }}>
                    <div>
                        <img className='img-fluid' src={Visa} alt="Visa" />
                    </div>
                    <div style={{ position: "absolute", right: "1px", top: "-13px" }}>
                        <img width={24} height={24} src={Right} alt='' />
                    </div>
                </div>
                <div style={{ width: "85px", height: "72px", background: 'var(--Light_Blue, #F0F5FA)', borderRadius: "10px", margin: "0px 15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img className='img-fluid' src={Mastercard} alt="Visa" />
                </div>
            </div>
            <div style={boxStyle}>
                <div className='d-flex flex-column align-items-center justify-content-center '>
                    <div className='mt-5'>
                        <img className='img-fluid' src={Card} />
                    </div>
                    <div style={titleText}>No hay tarjeta agregada</div>
                    <div style={smallText}>Puedes guardar tu tarjeta y usarla más tarde</div>
                </div>

            </div>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div style={btnStyle} onClick={() => navigate("/metados1")}>Agregar Método de Pago</div>
                <div style={smallText1}>Eliminar Método de Pago</div>
            </div>
            <Sidebar state={state} setState={setState} />
        </>
    )
}

export default Metados