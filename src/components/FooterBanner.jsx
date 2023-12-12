import React from 'react'
import firstImg from '../assets/1.png'
import SecondImg from '../assets/2.png'
import ThirdImg from '../assets/3.png'
function FooterBanner() {
    return (
        <div className='container-fluid'>
        <div className="row">
          <div className='col-sm-12 col-md-4 col-lg-4 p-0 '>
            <img className='w-100' src={firstImg} alt='' />
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 p-0' style={{margin:"0 -2px"}}>
            <img className='w-100 h-100' src={SecondImg} alt='' />
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 p-0' >
            <img className='w-100' src={ThirdImg} alt='' />
          </div>
        </div>
      </div>
      
    )
}

export default FooterBanner