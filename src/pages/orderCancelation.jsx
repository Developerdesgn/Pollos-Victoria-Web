import React, { useState } from 'react'
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
import { Radio } from '@mui/material'

function OrderCancelation() {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
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
    const btnStyle = {
        width: '100%',
        height: '57px',
        borderRadius: '100px',
        border: "none",
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
            <BannerNav text="Cancelar pedido" icon={deleteIcon} />
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
                        </div>
                    </div>
                    <div style={{ marginTop: "100px" }}>
                        <div style={{ display: "flex", justifyContent: "center", textAlign: "left" }}>
                            <div style={{ textAlign: "left" }}>
                                <p style={{ padding: 0, fontSize: "18px", fontWeight: "700", color: "#EB252D" }}>Motivo</p>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <p style={{ margin: "0 200px 0 0" }}>No llego a tiempo</p>
                                        <Radio
                                            name='a'
                                            {...controlProps('e')}
                                            sx={{
                                                color: 'rgba(235, 37, 45, 1)',
                                                '&.Mui-checked': {
                                                    color: 'rgba(235, 37, 45, 1)',
                                                },
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <p style={{ margin: "0 200px 0 0" }}>Ya no lo quiero</p>
                                        <Radio
                                            name='a'
                                            {...controlProps('e')}
                                            sx={{
                                                color: 'rgba(235, 37, 45, 1)',
                                                '&.Mui-checked': {
                                                    color: 'rgba(235, 37, 45, 1)',
                                                },
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <p style={{ margin: "0 200px 0 0" }}>Orden equivocada</p>
                                        <Radio
                                            name='a'
                                            {...controlProps('e')}
                                            sx={{
                                                color: 'rgba(235, 37, 45, 1)',
                                                '&.Mui-checked': {
                                                    color: 'rgba(235, 37, 45, 1)',
                                                },
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <p style={{ margin: "0 200px 0 0" }}>No es lo que esperaba</p>
                                        <Radio
                                            name='a'
                                            {...controlProps('e')}
                                            sx={{
                                                color: 'rgba(235, 37, 45, 1)',
                                                '&.Mui-checked': {
                                                    color: 'rgba(235, 37, 45, 1)',
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                    <textarea placeholder='Escribe la razon' style={{
                                        padding: "19px 29px",
                                        width: "400px",
                                        height: "196px",
                                        borderRadius: "10px",
                                        border: "1px solid #EEE",
                                        background: "var(--white-100, #FFF)",
                                        boxShadow: "15px 20px 45px 0px rgba(233, 233, 233, 0.25)",
                                        outline: "none"
                                    }} />
                                    <button style={btnStyle}>Cancelar pedido</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCancelation