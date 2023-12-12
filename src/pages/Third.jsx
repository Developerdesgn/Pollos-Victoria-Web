import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import Slick from "../components/Slick"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Product from "../assets/product_zing.png";
import Plus from "../assets/plus.png";
import Radio from '@mui/material/Radio';
import Text from "../components/Text"

import Minus from "../assets/minus.png";
import backIcon from "../assets/chevron.png";
import BannerNav from '../components/BannerNav'
import { useNavigate } from 'react-router-dom'




function Third() {

    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

const navigate = useNavigate()    
    
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

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

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
        width: '47px',
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
    const secondBox = {
        width: '423px',
        height: ' 408px',
        borderRadius: '32px',
        background: 'var(--White, #EFEFEF)',
        position: "relative",
    }
    const boxText = {
        // width: '99px',
        height: 'var(--20, 20px)',
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        margin: "20px 0"
    }
    const boxTextFinal = {
        height: 'var(--20, 20px)',
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
    const btnStyle = {
        display: 'flex',
        width: '363px',
        height: ' 44px',
        // padding: '19px 120px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '100px',
        background: 'var(--Basic_Red, #E52823)',
        color: 'var(--white-100, #FFF)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        margin: "20px 0"
    }
    const textStyle1 = {
        color: '#323643',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        margin: "20px 0"
    }
    const textStyle12 = {
        color: ' var(--Basic_Red, #E52823)',
        fontFamily: 'var(--font-gotham)',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '138.836 %',/* 22.214px */
        letterSpacing: '0.32px',
        margin: "0 8px"
    }

    return (
        <>

            <BannerNav text="Detalle del producto" icon={backIcon} />
            <div className='container' style={{ marginTop: "60px" }}>
                <div className='add-product'>
                    <div className='product'>
                        <div style={{ width: width < 768 ? "400px" : "550px", height: "645px", borderRadius: "25px", background: 'var(--white-100, #FFF)', boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)' }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px", cursor: "pointer" }}><FavoriteBorderIcon style={{ cursor: "pointer" }} /></div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div style={{ width: "444px", height: ' 278.97px', }}>
                                    <img className='img-fluid' src={Product} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <div className='d-flex justify-content-center align-items-center' style={{ width: "53px", height: "52px", borderRadius: 'var(--4, 4px)', background: 'var(--white-100, #FFF)', margin: "0 1px", boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)' }}>
                                    <img className='img-fluid' src={Minus} />
                                </div>
                                <div className='text_cart d-flex justify-content-center align-items-center' style={{ width: "53px", height: "52px", borderRadius: 'var(--4, 4px)', background: 'var(--white-100, #FFF)', margin: "0 1px", boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)' }}>
                                    2
                                </div>
                                <div className='d-flex justify-content-center align-items-center' style={{ width: "53px", height: "52px", borderRadius: 'var(--4, 4px)', background: 'var(--white-100, #FFF)', margin: "0 1px", boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)' }}>
                                    <img className='img-fluid' src={Plus} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-4'>
                                Combo 2 Piezas de Pollo
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-3'>
                                <div className='cart_small' style={{ width: ' 399px' }}>
                                    2 Piezas de Pollo + Papa Mediana o Arepitas Medianas + Refresco 12 onzas.

                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <div className='cart_price'>$ 345.00</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ width: "308px", height: "400px", marginLeft: "40px" }}>
                            <div className='card_head_cart'>
                                Seleccionar adicional
                            </div>
                            <div style={{ width: "250px", margin: "0 auto" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className='cart_smal_head_cart'>Papa Mediana</div>
                                    <div>
                                        <Radio
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
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className='cart_smal_head_cart'>Arepitas Medianas</div>
                                    <div>
                                        <Radio
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




                            </div>
                            <div style={{ width: "308px", border: "1px solid var(--Medium_grey, #646982)" }}></div>

                            <br />
                            <br />

                            <div className='card_head_cart'>
                                Seleccionar refresco
                            </div>
                            <div style={{ width: "250px", margin: "0 auto" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className='cart_smal_head_cart'>Naranja </div>
                                    <div>
                                        <Radio
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
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className='cart_smal_head_cart'>Uva</div>
                                    <div>
                                        <Radio
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

                                {/* <div style={{ width: "250px", border: "1px solid var(--Medium_grey, #646982)" }}></div> */}




                            </div>
                            <div className='mt-2' style={{ width: "308px", border: "1px solid var(--Medium_grey, #646982)" }}></div>

                        </div>
                        <button onClick={() => navigate("/Fourth")} style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", width: "308px", border: "none", outline: "none", background: 'var(--Basic_Red, #E52823)', borderRadius: "100px", padding: "10px", marginLeft: "40px", marginTop: "-80px" }}>
                            Ingresar
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <div className='mt-5'>
                <Text color='#32343E' text="Articulos relacionados" font="35px" />
            </div>
            {/* <div className='container'> */}
                <Slick />
            {/* </div> */}
            <Text color='#32343E' text="Ofertas" font="35px" />
        </>
    )
}

export default Third