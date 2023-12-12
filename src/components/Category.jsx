import React from 'react'
import Img from "../assets/meat.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Category() {
    return (
        <div className='container'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='d-flex align-items-center justify-content-space-around'>
                <div className='mr-5'>
                    <ArrowBackIcon />
                </div>
                <div className='d-flex align-items-center' style={{ width: "140px", height: "5px" }}>
                    <div>
                        <img width={23} height={23} src={Img} />
                    </div>
                    <div>
                        <p className='category_text mt-3 ml-3'>Pollo Frito</p>
                    </div>
                </div>
                <div className='d-flex align-items-center' style={{ width: "140px", height: "5px" }}>
                    <div>
                        <img width={23} height={23} src={Img} />
                    </div>
                    <div>
                        <p className='category_text mt-3 ml-3'>Pollo Frito</p>
                    </div>
                </div>
                <div className='d-flex align-items-center' style={{ width: "140px", height: "5px" }}>
                    <div>
                        <img width={23} height={23} src={Img} />
                    </div>
                    <div>
                        <p className='category_text mt-3 ml-3'>Pollo Frito</p>
                    </div>
                </div>
                <div className='d-flex align-items-center' style={{ width: "140px", height: "5px" }}>
                    <div>
                        <img width={23} height={23} src={Img} />
                    </div>
                    <div>
                        <p className='category_text mt-3 ml-3'>Pollo Frito</p>
                    </div>
                </div>
                <div className='d-flex align-items-center' style={{ width: "140px", height: "5px" }}>
                    <div>
                        <img width={23} height={23} src={Img} />
                    </div>
                    <div>
                        <p className='category_text mt-3 ml-3'>Pollo Frito</p>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Category