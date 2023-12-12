import React from 'react'
import Navbar from '../components/Navbar'
import BannerNav from '../components/BannerNav'
import paymentCard from "../assets/payment-card.svg"
import Sidebar from '../components/Sidebar'
import settingIcon from '../assets/settings.svg';
import { useNavigate } from 'react-router-dom'

function Metados1() {

  
  const [state, setState] = React.useState(false);
  const navigate = useNavigate()

  const inputStyle = {
    width: '350px',
    height: '57px',
    borderRadius: '100px',
    background: 'var(--Light_Blue, #F0F5FA)',
    border: "none",
    outline: "none",
    padding: "0 20px",
    color: ' #B5B5B5',
    fontFamily: 'var(--font-gotham)',
    fontSize: ' 14px',
    fontStyle: 'normal',
    fontWeight: '300',

    lineHeight: "normal"

  }
  const inputStyle1 = {
    width: '160px',
    height: '57px',
    borderRadius: '100px',
    background: 'var(--Light_Blue, #F0F5FA)',
    border: "none",
    outline: "none",
    padding: "0 20px",
    color: ' #B5B5B5',
    fontFamily: 'var(--font-gotham)',
    fontSize: ' 14px',
    fontStyle: 'normal',
    fontWeight: '300',

    lineHeight: "normal",
    margin:"0 10px"

  }
  const labelStyle = {
    color: '#ADADAF',
    fontFamily: 'var(--font-gotham)',
    fontSize: ' 16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    opacity: '0.9',
    margin: "14px 5px"
    // marginTop:"15px"

  }
  const btnStyle = {
    width: '345px',
    height: '57px',
    borderRadius: '100px',
    background: '#EB252D',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: ' var(--white-100, #FFF)',
    fontFamily: 'var(--font-gotham)',
    fontSize: ' 16px',
    fontStyle: 'normal',
    fontWeight: '700',
    margin:"30px 0",
    // marginBotton:"px"
}
  return (
    <>
      {/* <Navbar /> */}
      <div
                style={{
                    position: "relative",
                    cursor: "pointer"
                }}
            >
                <div
                    onClick={() => setState(true)}
                    style={{
                        position: "absolute",
                        backgroundColor: "red",
                        borderRadius: "100%",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 20,
                        right: 20,
                        zIndex: 1000
                    }}>
                    <img src={settingIcon} />
                </div>
            </div>
      <BannerNav text={'Métodos de pago'} icon={paymentCard} />
      <br />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <div style={{ position: "relative", margin: "8px 0" }} >
            <div style={labelStyle}>Nombre del titular de la tarjeta</div>
            <div >
              <input type='text' style={inputStyle} />
            </div>

          </div>

        </div>
        <div>
          <div style={{ position: "relative", margin: "8px 0" }} >
            <div style={labelStyle}>Numero de la tarjeta</div>
            <div >
              <input placeholder='xxxx   _ _ _ _   _ _ _ _' type='text' style={inputStyle} />
            </div>

          </div>

        </div>
        <div className='d-flex justify-content-around'>
          <div style={{ position: "relative", margin: "8px 0" }} >
            <div style={labelStyle}>Fecha de expiración</div>
            <div >
              <input type='text' placeholder='mm/yyyy' style={inputStyle1} />
            </div>
          </div>
          <div style={{ position: "relative", margin: "8px 0" }} >
            <div className='mx-4' style={labelStyle}>CVC</div>
            <div >
              <input placeholder='****' type='text' style={inputStyle1} />
            </div>
          </div>
        </div>

        <div style={btnStyle} onClick={() => navigate("/Metados2")}>Agregar Método de Pago</div>

      </div>
      
      <Sidebar state={state} setState={setState} />
    </>
  )
}

export default Metados1