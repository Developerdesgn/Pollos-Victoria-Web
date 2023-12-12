import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import Icon from "../assets/iicon.png"
import Timer from "../assets/Timer.png"
import Vector from "../assets/Vector.png"

function MethodDelivery({ data }) {
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
        fontWeight: '900',
        lineHeight: '138.836 %',/* 22.214px */
        letterSpacing: '0.32px',
        margin: 0,
        padding: 0,
        textAlign:"center"
    }
    return (
        <div>
            <div style={textStyle1}>
                Metodo de entrega
            </div>
            <div style={{ width: "400px" }}>
                {data?.map((item, index) => {
                    return (
                        <>
                            <div key={index} className='d-flex justify-content-between align-items-center' >
                                <div className='d-flex'>
                                    <div ><img src={item.image == "Icon" ? Icon : item.image == "Vector" ? Vector : Timer} className='img-fluid' style={{ width: "26px", height: "22px" }} /></div>
                                    <div style={{ height: "17px" }}>
                                        <div style={textStyle12}>{item.name}</div>
                                    </div>
                                </div>
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
                            <div style={{
                                borderBottom: "1px solid grey"
                            }}>
                            </div>
                        </>

                    )
                })}




            </div>
            <br />
            <br />
        </div>
    )
}

export default MethodDelivery