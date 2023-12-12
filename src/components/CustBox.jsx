import React from 'react'
import Home from "../assets/Home.png"
import Edit from "../assets/edit.png"
import Mastercard from "../assets/Mastercard.png"

function CustBox() {
    const main = {
        width: '350px',
        height: '101px',
        borderRadius: "20px",
        border: "1px solid var(--Basic_Red, #E52823)",
        background: "var(--Light_Blue, #F0F5FA)",
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        margin: "15px 0",
        padding: "10px 15px",
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
    return (
        <>
            <div style={main}>
                <div>
                    <img src={Home} />
                </div>
                <div>
                    <div className='mx-2' style={head}>
                        CASA
                    </div>
                    <div style={smallText}>Avn. John F. Kennedy esquina Tiradentes, estación de combustible Sunix</div>
                </div>
                <div>
                    <img src={Edit} />
                </div>
            </div>
            <div style={main}>
                <div>
                    <div style={head}>
                        Mastercard
                    </div>
                    <div className='d-flex '>
                        <div style={{ width: "29.7px", height: "21.7px" }}>
                            <img className='img-fluid' src={Mastercard} />
                        </div>
                        <div style={smallText}>
                            **** **** **** <span style={number}> 332</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Edit} />
                </div>
            </div>
        </>
    )
}

export default CustBox