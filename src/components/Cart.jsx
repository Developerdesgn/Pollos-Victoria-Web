import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Product from "../assets/product_zing.png";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
import Star from "../assets/star.png"

function Cart({ data }) {

    
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

    const textStyle = {
        color: '#EB252D',
        fontFamily: 'var(--font-gotham)',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        width: '184px',
        height: '33px',
        position: "absolute",
        top: "25px",
        right: "50px"
    }
    const smallText = {
        color: '#000',
        fontFamily: 'var(--font-gotham)',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '138.836%',/* 19.437px */
        letterSpacing: '0.28px',
        opacity: '0.5',
        width: "219px",
        position: "absolute",
        top: "80px",
        right: "15px"
    }
    const boxStyle = {
        width: '100%',
        height: '58px',
        borderRadius: 'var(--4, 4px)',
        background: 'var(--white - 100, #FFF)',
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    }
    const boxStyle1 = {
        width: '47px',
        height: '81px',
        borderRadius: 'var(--4, 4px)',
        background: 'var(--white - 100, #FFF)',
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        color: ' var(--Basic_Red, #E52823)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '21px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
    return (
        <>
            {data.map((item) => {
                return (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ display: "flex", position: "relative", justifyContent: "space-between", width: "500px", height: "197px", borderRadius: "6px", background: ' var(--white-100, #FFF)', boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)', }}>
                            <div style={{ marginLeft: width < 768 ? 0 : "-20px" }}><img style={{ width: width < 768 ? "200px" : "228px", height: width < 768 ? "150px" : "136px" }} className='img-fluid' src={Product} alt='' /></div>
                            <div>
                                <div style={textStyle}>{item.title}</div>
                                <div style={smallText}>
                                    {item.description}
                                </div>
                                <div style={{ position: "absolute", bottom: "0", right: "0", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                                    <div className='d-flex align-items-center' style={{ margin: "0 65px" }}>
                                        <div><img src={Star} /></div>
                                        <div style={{
                                            color: ' #A5A5A5',
                                            fontFamily: 'var(--font-gotham)',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            lineHeight: '10px', /* 71.429% */
                                        }}>{item.rating}</div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: "129px", height: "42px", borderRadius: ' 19px 0px 6px 0px', background: ' var(--Basic_Red, #E52823)', }}>
                                        <div style={{
                                            color: 'var(--white-100, #FFF)',
                                            fontFamily: 'var(--font-gotham)',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            lineHeight: 'normal',
                                        }}>
                                            {item.price}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='m-2'><FavoriteBorderIcon /></div>
                        </div>
                        <div >
                            <div style={boxStyle}><img src={Plus} /></div>
                            <div style={boxStyle1}>2</div>
                            <div style={boxStyle}><img src={Minus} /></div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Cart