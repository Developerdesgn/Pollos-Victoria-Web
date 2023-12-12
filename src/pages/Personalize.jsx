import React from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Email from "../assets/Email.png"
import Edit from "../assets/pencil.png"
import Eye from "../assets/eye.png"
import userIcon from "../assets/user-circle.svg"

import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';

function Personalize() {


    const [state, setState] = React.useState(false);

    const inputStyle = {
        width: '398px',
        height: '58px',
        borderRadius: '100px',
        background: 'var(--Light_Blue, #F0F5FA)',
        border: "none",
        outline: "none",
        padding: "0 42px",
        color: ' #B5B5B5',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: "normal"

    }
    const inputStyle1 = {
        width: '398px',
        height: '58px',
        borderRadius: '100px',
        background: 'var(--Light_Blue, #F0F5FA)',
        border: "none",
        outline: "none",
        padding: "0 22px",
        color: ' #B5B5B5',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: "normal"

    }
    const btnStyle = {
        width: "398px",
        backgroundColor: 'var(--basic-red)',
        // padding: "19px",
        height: "53px",
        borderRadius: "100px",
        // textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        cursor: "pointner",
        margin: "15px"
    }

    return (
        <>
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
            <BannerNav text={'Datos personales'} icon={userIcon} />
            <div className='d-flex justify-content-center'>
                <div style={{ position: "relative", margin: "10px 0" }} >
                    <div >
                        <input type='text' placeholder='Nombre*' style={inputStyle} />
                    </div>
                    <div style={{ position: "absolute", top: "17px", left: "17px" }}><img width={24} height={24} src={Edit} /></div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div style={{ position: "relative", margin: "10px 0" }} >
                    <div >
                        <input type='text' placeholder='Apellido*' style={inputStyle} />
                    </div>
                    <div style={{ position: "absolute", top: "17px", left: "17px" }}><img width={24} height={24} src={Edit} /></div>

                </div>
            </div>
            <br />
            <br />
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div style={{ position: "relative", margin: "10px 0" }} >
                    <div >
                        <input type='text' placeholder='Contraseña*' style={inputStyle1} />
                    </div>
                    <div style={{ position: "absolute", top: "17px", right: "25px" }}><img width={24} height={24} src={Eye} /></div>

                </div>

                <div style={{ position: "relative", margin: "10px 0" }} >
                    <div >
                        <input type='text' placeholder='Repetir contraseña*' style={inputStyle1} />
                    </div>
                    <div style={{ position: "absolute", top: "17px", right: "25px" }}><img width={24} height={24} src={Eye} /></div>

                </div>

                <div style={btnStyle}>Registrarse</div>

            </div>
            <Sidebar state={state} setState={setState} />

        </>
    )
}

export default Personalize