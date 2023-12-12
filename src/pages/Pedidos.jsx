import React from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Product from "../assets/deal.png"
import LightLocation from "../assets/lightLocation.png"
import Delete from "../assets/deletebin.png"
import pedidosIcon from "../assets/pedidos-icon.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';

function Pedidos() {

    const [state, setState] = React.useState(false);

    const boxStyle = {
        width: '334.521px',
        height: '89px',
        borderRadius: '6px',
        background: 'var(--white - 100, #FFF)',
        boxShadow: ' 0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }
    const Image = {
        width: "94px",
        height: "90px"
    }
    const timeStyle = {
        color: ' #ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: '9px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        width: "196px"
    }
    const textStyle = {
        color: ' #ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',

    }
    const btnStyle = {
        width: '164.2605px',
        height: '35px',
        margin: "3px 2px",
        // margin: "5px",
        // transform: ' rotate(90deg)',
        borderRadius: ' var(--4, 4px)',
        background: 'var(--white - 100, #FFF)',
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: ' #ADADAF',
        fontFamily: 'var(--font-gotham)',
        fontSize: '11px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
    const btnStyleFinal = {
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
            <BannerNav text="Mis Pedidos" icon={pedidosIcon} />
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div className='my-3'>
                    <div style={boxStyle}>
                        <div style={Image}><img className='img-fluid' src={Product} alt="" /></div>
                        <div className='d-flex flex-column justify-content-center align-items-start gap-1'>
                            <div style={timeStyle}>09 sept - 4:30pm</div>
                            <div style={textStyle}>Combo 3 Piezas de Pollo</div>
                            <div className='d-flex justify-content-start align-items-center'>
                                <div style={{ width: "11px", height: "10px", }}><img style={{ marginTop: "-15px" }} className='w-100 h-100' src={LightLocation} /></div>
                                <div style={timeStyle}>Av. Winston Churchill, Multicentro La Sirena</div>
                            </div>
                            <div style={timeStyle}>$ 545.00</div>

                        </div>
                        <div style={{ marginTop: "-40px" }}><img src={Delete} width={24} height={24} /></div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={btnStyle}>Comentar</div>
                        <div style={btnStyle}>Repetir</div>

                    </div>
                </div>
                <div className='my-3'>
                    <div style={boxStyle}>
                        <div style={Image}><img className='img-fluid' src={Product} alt="" /></div>
                        <div className='d-flex flex-column justify-content-center align-items-start gap-1'>
                            <div style={timeStyle}>09 sept - 4:30pm</div>
                            <div style={textStyle}>Combo 3 Piezas de Pollo</div>
                            <div className='d-flex justify-content-start align-items-center'>
                                <div style={{ width: "11px", height: "10px", }}><img style={{ marginTop: "-15px" }} className='w-100 h-100' src={LightLocation} /></div>
                                <div style={timeStyle}>Av. Winston Churchill, Multicentro La Sirena</div>
                            </div>
                            <div style={timeStyle}>$ 545.00</div>

                        </div>
                        <div style={{ marginTop: "-40px" }}><img src={Delete} width={24} height={24} /></div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={btnStyle}>Comentar</div>
                        <div style={btnStyle}>Repetir</div>

                    </div>
                </div>
                <div style={btnStyleFinal}>
                    volver
                </div>
            </div>
            <Sidebar state={state} setState={setState} />
        </>
    )
}

export default Pedidos