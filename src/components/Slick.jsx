import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ProductImage from '../assets/zinger.png'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Slider from 'react-slick'
import Star from '../assets/star.png'

function Slick() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'var(--Dark_Grey, #32343E)', position: 'absolute', top: '180px', right: '-10px' }}
        onClick={onClick}
      >
        <ArrowForwardIcon />
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'var(--Dark_Grey, #32343E)', position: 'absolute', top: '190px', left: '-30px' }}
        onClick={onClick}
      >
        <ArrowBackIcon />
      </div>
    )
  }
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    variableWidth: true,
    arrows: true,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  }
  
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: "80px", marginRight: "30px"}} className="card position-relative test">
              <div className="card-body" style={{ height: "340px" }}>
                <div className="d-flex justify-content-space-between pt-2 pb-2 w-100">
                  <span>
                    <img src={ProductImage} style={{marginTop: "-100px", marginLeft: "-25px"}} className='img-fluid' alt='' />
                  </span>
                  <span><FavoriteIcon style={{color: "red", fontSize: "40px"}} /></span>
                </div>
                <p className="card-text textshort">Combo 2 Piezas de Pollo</p>
                <div style={{width: "260px", margin: "0 auto"}}>
                  <p className='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                  </p>
                </div>
                <div style={{width: "110px", textAlign: "center"}} className="position-absolute bottom-0 start-0 p-4">
                  <img style={{marginRight: "2px", marginTop: "-10px"}} src={Star} />
                  <span className='rating ml-2 mt-4'>4.5</span>
                </div>
                <div style={{borderTopLeftRadius: "20px", width: "200px", textAlign: "center"}} className="position-absolute bottom-0 end-0 top-20 bg-danger p-3 border-top-left-radius-5">
                  <span className='number text-white text-center'>$ 345.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar code for other slides */}
        </Slider>
      </div>
    </>
  )
}

export default Slick