import React from 'react'
import box1 from '../assets/box2.png'
import box2 from '../assets/box1.png'
import Button from "../components/Button";

function PortfolioGrid() {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url("${box1}")`,
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${box1}")`,
        position: 'relative',
        // backgroundSize: '100% 100%',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        // display: 'flex',
        height: '400px',
        // flexDirection: 'column',
        // justifyContent: 'end',
        // alignItems: 'center',
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirecntion: "column",
        alignItems: 'end',
        justifyContent: 'center',
        textAlign: "center",
    };
    const sectionStyle1 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url("${box2}")`,

        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${box1}")`,
        position: 'relative',
        // backgroundSize: '100% 100%',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        // display: 'flex',
        height: '400px',
        // flexDirection: 'column',
        // justifyContent: 'end',

        // alignItems: 'center',
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirecntion: "column",
        alignItems: 'end',
        justifyContent: 'center',
        textAlign: "center",
    }


    return (
        // <section className="page-section" id="portfolio">
        <div className='container-fluid'>
            <div className="row" >
                <div className="col-md-6" style={sectionStyle}>
                    <div>
                        <h1 className="main-producto-hd">Producto</h1>
                        <p className="sub-producto">Producto.</p>
                        <div style={{ marginBottom: "50px" }}><Button /></div>
                    </div>
                </div>
                <div className="col-md-6" style={sectionStyle1} >
                    <div>
                        <h1 className="main-producto-hd">Producto</h1>
                        <p className="sub-producto">Producto.</p>
                        <div style={{ marginBottom: "50px" }}><Button /></div>
                    </div>
                </div>
            </div>
        </div>
        // </section>
    )
}

export default PortfolioGrid