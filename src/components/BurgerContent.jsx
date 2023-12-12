import React from 'react'
import ProductImage from "../assets/zinger.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BackgroundImage from "../assets/5.png"
function BurgerContent() {
    const myStyle = {
        backgroundImage: `url('${BackgroundImage}')`,
        width: "98vw",
        height: '100vh',  // Ensure this is set to 100%
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

  return (
    
    <div className='container-fluid img-fluid' style={myStyle}>
        
        
    <div className="container ml-5" style={{height:"auto"}}>
    <div class="row">
    <div class="col-lg-4 col-md-6 my-5">
         {/* <!-- Adjusted to col-lg-4 for large screens and col-md-6 for medium screens --> */}
    <div class="card position-relative test">
        <div class="card-body" style={{ height: "325px" }}>
            <div class="d-flex justify-content-space-between pt-2 pb-2 w-100">
                <span>
                    <img src={ProductImage} style={{ marginTop: "-100px", marginLeft: "-25px" }} class='img-fluid' alt='' />
                </span>
                <span><FavoriteIcon style={{ color: "red", fontSize: "40px" }} /></span>
            </div>
            <p class="card-text textshort">Combo 2 Piezas de Pollo</p>
            <div style={{ width: "260px", margin: "0 auto" }}>
                <p class='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                </p>
            </div>
            <div style={{ width: "110px", textAlign: "center" }} class="position-absolute bottom-0 start-0 p-4">
                <StarIcon style={{ color: "red", fontSize: "29px" }} />
                <span class='rating ml-2' >4.5</span>
            </div>
            <div style={{ borderTopLeftRadius: "20px", width: "180px", textAlign: "center" }} class="position-absolute bottom-0 end-0 top-20  bg-danger p-3 border-top-left-radius-5">
                <span class='number text-white text-center'>$ 345.00</span>
            </div>
        </div>
    </div>
</div>


 <div class="col-lg-4 col-md-6 my-5">
         {/* <!-- Adjusted to col-lg-4 for large screens and col-md-6 for medium screens --> */}
    <div class="card position-relative test">
        <div class="card-body" style={{ height: "325px" }}>
            <div class="d-flex justify-content-space-between pt-2 pb-2 w-100">
                <span>
                    <img src={ProductImage} style={{ marginTop: "-100px", marginLeft: "-25px" }} class='img-fluid' alt='' />
                </span>
                <span><FavoriteIcon style={{ color: "red", fontSize: "40px" }} /></span>
            </div>
            <p class="card-text textshort">Combo 2 Piezas de Pollo</p>
            <div style={{ width: "260px", margin: "0 auto" }}>
                <p class='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                </p>
            </div>
            <div style={{ width: "110px", textAlign: "center" }} class="position-absolute bottom-0 start-0 p-4">
                <StarIcon style={{ color: "red", fontSize: "29px" }} />
                <span class='rating ml-2' >4.5</span>
            </div>
            <div style={{ borderTopLeftRadius: "20px", width: "180px", textAlign: "center" }} class="position-absolute bottom-0 end-0 top-20  bg-danger p-3 border-top-left-radius-5">
                <span class='number text-white text-center'>$ 345.00</span>
            </div>
        </div>
    </div>
</div>


<div class="col-lg-4 col-md-6 my-5">
         {/* <!-- Adjusted to col-lg-4 for large screens and col-md-6 for medium screens --> */}
    <div class="card position-relative test">
        <div class="card-body" style={{ height: "325px" }}>
            <div class="d-flex justify-content-space-between pt-2 pb-2 w-100">
                <span>
                    <img src={ProductImage} style={{ marginTop: "-100px", marginLeft: "-25px" }} class='img-fluid' alt='' />
                </span>
                <span><FavoriteIcon style={{ color: "red", fontSize: "40px" }} /></span>
            </div>
            <p class="card-text textshort">Combo 2 Piezas de Pollo</p>
            <div style={{ width: "260px", margin: "0 auto" }}>
                <p class='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                </p>
            </div>
            <div style={{ width: "110px", textAlign: "center" }} class="position-absolute bottom-0 start-0 p-4">
                <StarIcon style={{ color: "red", fontSize: "29px" }} />
                <span class='rating ml-2' >4.5</span>
            </div>
            <div style={{ borderTopLeftRadius: "20px", width: "180px", textAlign: "center" }} class="position-absolute bottom-0 end-0 top-20  bg-danger p-3 border-top-left-radius-5">
                <span class='number text-white text-center'>$ 345.00</span>
            </div>
        </div>
    </div>
</div>
    


    <div class="col-lg-4 col-md-6 my-5">
         {/* <!-- Adjusted to col-lg-4 for large screens and col-md-6 for medium screens --> */}
    <div class="card position-relative test">
        <div class="card-body" style={{ height: "325px" }}>
            <div class="d-flex justify-content-space-between pt-2 pb-2 w-100">
                <span>
                    <img src={ProductImage} style={{ marginTop: "-100px", marginLeft: "-25px" }} class='img-fluid' alt='' />
                </span>
                <span><FavoriteIcon style={{ color: "red", fontSize: "40px" }} /></span>
            </div>
            <p class="card-text textshort">Combo 2 Piezas de Pollo</p>
            <div style={{ width: "260px", margin: "0 auto" }}>
                <p class='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                </p>
            </div>
            <div style={{ width: "110px", textAlign: "center" }} class="position-absolute bottom-0 start-0 p-4">
                <StarIcon style={{ color: "red", fontSize: "29px" }} />
                <span class='rating ml-2' >4.5</span>
            </div>
            <div style={{ borderTopLeftRadius: "20px", width: "180px", textAlign: "center" }} class="position-absolute bottom-0 end-0 top-20  bg-danger p-3 border-top-left-radius-5">
                <span class='number text-white text-center'>$ 345.00</span>
            </div>
        </div>
    </div>
</div>
    


    <div class="col-lg-4 col-md-6 my-5">
         {/* <!-- Adjusted to col-lg-4 for large screens and col-md-6 for medium screens --> */}
    <div class="card position-relative test">
        <div class="card-body" style={{ height: "325px" }}>
            <div class="d-flex justify-content-space-between pt-2 pb-2 w-100">
                <span>
                    <img src={ProductImage} style={{ marginTop: "-100px", marginLeft: "-25px" }} class='img-fluid' alt='' />
                </span>
                <span><FavoriteIcon style={{ color: "red", fontSize: "40px" }} /></span>
            </div>
            <p class="card-text textshort">Combo 2 Piezas de Pollo</p>
            <div style={{ width: "260px", margin: "0 auto" }}>
                <p class='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                </p>
            </div>
            <div style={{ width: "110px", textAlign: "center" }} class="position-absolute bottom-0 start-0 p-4">
                <StarIcon style={{ color: "red", fontSize: "29px" }} />
                <span class='rating ml-2' >4.5</span>
            </div>
            <div style={{ borderTopLeftRadius: "20px", width: "180px", textAlign: "center" }} class="position-absolute bottom-0 end-0 top-20  bg-danger p-3 border-top-left-radius-5">
                <span class='number text-white text-center'>$ 345.00</span>
            </div>
        </div>
    </div>
</div>
    


    <div class="col-lg-4 col-md-6 my-5">
         {/* <!-- Adjusted to col-lg-4 for large screens and col-md-6 for medium screens --> */}
    <div class="card position-relative test">
        <div class="card-body" style={{ height: "325px" }}>
            <div class="d-flex justify-content-space-between pt-2 pb-2 w-100">
                <span>
                    <img src={ProductImage} style={{ marginTop: "-100px", marginLeft: "-25px" }} class='img-fluid' alt='' />
                </span>
                <span><FavoriteIcon style={{ color: "red", fontSize: "40px" }} /></span>
            </div>
            <p class="card-text textshort">Combo 2 Piezas de Pollo</p>
            <div style={{ width: "260px", margin: "0 auto" }}>
                <p class='card-text check'>
                    2 sabrosas Piezas de Pollo + 1 Serv. de Papas Fritas o Arepitas de Yuca Mediana + refresco 12 Onz.
                </p>
            </div>
            <div style={{ width: "110px", textAlign: "center" }} class="position-absolute bottom-0 start-0 p-4">
                <StarIcon style={{ color: "red", fontSize: "29px" }} />
                <span class='rating ml-2' >4.5</span>
            </div>
            <div style={{ borderTopLeftRadius: "20px", width: "180px", textAlign: "center" }} class="position-absolute bottom-0 end-0 top-20  bg-danger p-3 border-top-left-radius-5">
                <span class='number text-white text-center'>$ 345.00</span>
            </div>
        </div>
    </div>
</div>
    

    


    
    


    

        
    </div>
    
   </div>











    </div>

  )
}

export default BurgerContent