import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import Home from "../assets/Home.png"
import Edit from "../assets/edit.png"
import Mastercard from "../assets/Mastercard.png"
import Delete from "../assets/Delete.svg"
import locationIcon from "../assets/Location.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';
function Ubicaciones1() {

    const [state, setState] = React.useState(false);

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


    const main = {
        width: '351px',
        height: '102px',
        borderRadius: '20px',
        background: 'var(--Light_Blue, #F0F5FA)',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "15px 0"
    }
    const head = {
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        // textTransform: 'uppercase',
        margin: "5px 0"

    }
    const smallText = {
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '14px',
        width: "233px",
        opacity: '0.5',
        margin: "5px 10px"
        /* 100% */
    }
    const number = {
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    }
    const delBox = {
        width: '66px',
        height: '66px',
        borderRadius: '100px',
        background: '#EB252D',
        boxShadow: ' 0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

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
        margin: "75px 0",
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
            <BannerNav text={'Ubicaciones guardadas'} icon={locationIcon} />
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div style={{
                    display: "flex",
                    alignItems: width < 768 ? "end" : "center",
                    flexDirection: width < 768 ? "column" : "row"
                }}>
                    <div style={main}>
                        <div>
                            <img src={Home} />
                        </div>
                        <div>
                            <div className='mx-2' style={head}>
                                CASA
                            </div>
                            <div style={smallText}>2464 Royal Ln. Mesa, New Jersey 45463</div>
                        </div>
                        <div style={{ marginTop: "-50px" }}>
                            <img src={Edit} />
                        </div>
                    </div>
                    <div className='mx-3' style={delBox}>
                        <img width={39} height={39} src={Delete} alt='' />
                    </div>
                </div>
                <div style={{
                        display: "flex",
                        alignItems: width < 768 ? "end" : "center",
                        flexDirection: width < 768 ? "column" : "row"
                }}>
                    <div style={main}>
                        <div>
                            <img src={Home} />
                        </div>
                        <div>
                            <div className='mx-2' style={head}>
                                CASA
                            </div>
                            <div style={smallText}>2464 Royal Ln. Mesa, New Jersey 45463</div>
                        </div>
                        <div style={{ marginTop: "-50px" }}>
                            <img src={Edit} />
                        </div>
                    </div>
                    <div className='mx-3' style={delBox}>
                        <img width={39} height={39} src={Delete} alt='' />
                    </div>
                </div>
                <div style={btnStyle}>Agregar ubicación </div>
            </div>
            
            <Sidebar state={state} setState={setState} />
        </>
    )
}

export default Ubicaciones1