import React from 'react'

function TotalBox({data}) {
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
        fontWeight: '900',
        lineHeight: 'normal',
        margin: "20px 0"
    }
    const boxTextFinal = {
        height: 'var(--20, 20px)',
        color: 'var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '900',
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
        fontWeight: 790,
        lineHeight: 'normal',
        margin: "20px 0"
    }
    return (
        <div>
            <div style={secondBox}>
                <div style={{ paddingTop: "40px", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className='d-flex  justify-content-between align-items-center'>
                        <div style={boxText}>Sub-total</div>
                        <div>$ {data.total}</div>
                    </div>
                    <div className='d-flex  justify-content-between align-items-center '>
                        <div style={boxText}>Cargo por entrega</div>
                        <div>$ {data.delivery}</div>
                    </div>
                    <div className='d-flex  justify-content-between align-items-center '>
                        <div style={boxText}>Descuento</div>
                        <div>$ {data.discount}</div>
                    </div>

                </div>
                <br />
                <br />
                <br />
                <div>
                    <div style={{ padding: "0 30px" }}>
                        <div className='d-flex  justify-content-between align-items-center'>
                            <div style={boxTextFinal}>Sub-total</div>
                            <div style={boxTextFinal}>$ {data.sub_total}</div>
                        </div>
                        <div style={btnStyle}>Proceder al pago</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TotalBox