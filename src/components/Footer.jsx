import React from 'react'
import BannerSrc from '../assets/Group 18458.png'
import Facebook from '../assets/facebook.png'
import Banner from "../assets/footer_new.png"
import New from "../assets/footer-bg.png"
import footerFrame from "../assets/footer-frame.svg"
import footerFrame2 from "../assets/footer-frame2.svg"
import bottomToTop from "../assets/bottomToTop.svg"

function Footer() {
  return (
    <>
      <div className='main_footer'>
        {/* <div style={{ position: "absolute", top: -70, left: -20, zIndex: 1000, opacity: 0.5 }}>
          <img src={footerFrame} />
        </div> */}
        <div className='footer_text_main'>
          <div>
            <span className='overlay-img'>
              <img className='img-fluid' src={Facebook} />
            </span>
          </div>
          <div className='pt-4'>
            <span className="footer_text_1 pt-5">
              POLLOS VICTORINA ® 2023
            </span>
          </div>
          <div>
            <span className="overlay-text footer_text_2">
              Todos los derechos reservados. Políticas, Términos y Condiciones
            </span>
          </div>
        </div>
        {/* <div style={{ position: "absolute", bottom: 0, right: 0, zIndex: 1000, opacity: 0.5 }}>
          <img src={footerFrame2} />
        </div> */}
        <div className='top-to-bottom'>
          <img src={bottomToTop} />
        </div>
      </div>
    </>
  )
}

export default Footer