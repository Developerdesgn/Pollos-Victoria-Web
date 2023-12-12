import React from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Visa from "../assets/visa.png"
import Mastercard from "../assets/Mastercard.png"
import Right from "../assets/circleright.png"
import Card from "../assets/locationSearch.svg"
import locationIcon from "../assets/Location.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';
import { useNavigate } from 'react-router-dom'
function Ubicaciones() {

    const [state, setState] = React.useState(false);

    const boxStyle = {
        width: ' 439px',
        height: '377px',
        background: "#F7F8F9",
        margin: "20px auto",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const titleText = {
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: "bolder",
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

    const naviagte = useNavigate()

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
            <BannerNav text={'Ubicaciones guardadas'} icon={locationIcon} />
            <div style={boxStyle}>
                <div className='d-flex flex-column align-items-center justify-content-center '>
                    <div className='mt-5 mb-4'>
                        <img className='img-fluid' src={Card} />
                    </div>
                    <p style={titleText}>No hay ubicaciones guardadas</p>
                    <p style={smallText}>Puedes guardar tu tarjeta y usarla más tarde</p>
                </div>

            </div>
            <div className='d-flex justify-content-center flex-column align-items-center mt-4'>
                <div style={btnStyle} onClick={() => naviagte("/Ubicaciones2")}>Agregar ubicación </div>
                <div style={smallText1}>Eliminar ubicación </div>
            </div>
            
            <Sidebar state={state} setState={setState} />
        </>
    )
}

export default Ubicaciones