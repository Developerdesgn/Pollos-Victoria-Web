import React from 'react'
import Status from "../assets/status.png"
import Status1 from "../assets/status2.png"
import Status2 from "../assets/status3.png"
import Status3 from "../assets/status4.png"
import frame from '../assets/frame.svg'
import frame2 from '../assets/frame2.svg'
import Back from "../assets/back.png"
// background: url('your-image.jpg') no-repeat center center fixed;
// 
function DummyCard() {

    return (
        <>
            <div className="container-fluid">
                <div className='frame1'>
                    <img src={frame} />
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div class="col-md-3">
                            <div class="sec-2-box">
                                <div class="img-sec-2" >
                                    <img src={Status} alt="" clas />
                                </div>
                                <h3 class="sec2-sub-hd mt-3">
                                    Amor
                                </h3>
                                <p style={{ width: "150px", height: "70px", lineHeight: "normal" }} class="text-muted text-center">
                                    Cada cliente que nos visita debe sentirse como en casa.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="sec-2-box">
                                <div class="img-sec-2">
                                    <img src={Status1} alt="" />
                                </div>
                                <h3 class="sec2-sub-hd mt-3">
                                    Sabor
                                </h3>
                                <p style={{ width: "150px", height: "70px", lineHeight: "normal" }} class="text-muted text-center">
                                    Cada cliente que nos visita debe sentirse como en casa.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="sec-2-box">
                                <div class="img-sec-2">
                                    <img src={Status2} alt="" />
                                </div>
                                <h3 class="sec2-sub-hd mt-3">
                                    Experiencia
                                </h3>
                                <p style={{ width: "204px", height: "70px", lineHeight: "normal" }} class="text-muted text-center">
                                    Una nueva experiencia de marca es la clave para crear conexiones reales con nuestro publico.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="sec-2-box">
                                <div class="img-sec-2">
                                    <img src={Status3} alt="" />
                                </div>
                                <h3 class="sec2-sub-hd mt-3 text-center">
                                    Excelencia
                                </h3>
                                <p style={{ width: "190px", height: "70px", lineHeight: "normal" }} class="box_dummy text-muted text-center">
                                    Una oferta de calidad va mas alla del producto final.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='frame2'>
                    <img src={frame2} />
                </div>
            </div>
        </>
    )
}

export default DummyCard