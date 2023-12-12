import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import BannerNav from '../components/BannerNav'
import Visa from "../assets/visa.png"
import Mastercard from "../assets/Mastercard.png"
import Right from "../assets/circleright.png"
import paymentCard from "../assets/payment-card.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';
function Metados2() {

    const [state, setState] = React.useState(false);

    const smallText = {

        color: 'black',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',
        fontWeight: "500",
        lineHeight: "normal"

    }
    const smallText2 = {

        color: '#ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 16px',

        lineHeight: "normal"

    }
    const boxStyle = {
        width: '327px',
        height: '82px',
        background: 'var(--Light_Blue, #F0F5FA)',
        // border: "2px solid var(--Basic_Red, #E52823)",
        borderRadius: '15px',
        padding: "13px 27px",
        margin: "30px 0"

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
        margin: "5px auto",

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
            <BannerNav text="Métodos de pago" icon={paymentCard} />
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

            <div className='d-flex justify-content-center my-4'>
                <div style={boxStyle}>
                    <div className='my-1'>
                        <div style={smallText}>Mastercard</div>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <div><img width={28} height={28} src={Mastercard} /></div>
                        <div style={smallText}>*************</div>
                        <div style={smallText}>436</div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div style={btnStyle}>Agregar Método de Pago</div>
                <div style={smallText2}>Eliminar Método de Pago</div>
            </div>
            
            <Sidebar state={state} setState={setState} />
        </>
    )
}

export default Metados2