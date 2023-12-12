import React, { useState } from 'react'
import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import Text from '../components/Text'
import Navbar from '../components/Navbar'
import Slick from '../components/Slick'
import BannerNav from '../components/BannerNav'
import Cart from '../components/Cart'
import TotalBox from '../components/TotalBox'
import MethodDelivery from '../components/MethodDelivery'

function Fourth() {

    const data = [
        {
            title: "Combo 2 Pieces of Chicken",
            description: "2 Pieces of Chicken + Medium Potato or Medium Arepitas + 12 ounce Soft Drink.",
            price: "$545.00",
            rating: "4.5",
            image: "Product"
        },
        {
            title: "Combo 2 Pieces of Chicken",
            description: "2 Pieces of Chicken + Medium Potato or Medium Arepitas + 12 ounce Soft Drink.",
            price: "$545.00",
            rating: "4.5",
            image: "Product"
        }
    ]

    const totalCart = [
        { total: "300", delivery: "300", discount: "300", sub_total: "300" },
    ]

    const methods = [
        { name: "Delivery", image: "Icon" },
        { name: "Para retirar", image: "Vector" },
        { name: "Programar pedido", image: "Timer" },
    ]

    return (
        <>
            <div>
                <BannerNav text="Detalles de la orden" />
                <div className='container'>
                    <div className="row">
                        <div className='col-lg-6 col-md-12 col-sm-12 mt-2'>
                            <Cart data={data} />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 mt-2'>
                            <TotalBox data={totalCart?.[0]} />
                            <MethodDelivery data={methods} />
                        </div>
                    </div>
                </div>
                <Text text="Articulos relacionados" font="35px" color={"#32343E"} />
                <br />
                <Slick />
                <br />
                <Text text="Ofertas" font="35px" color={"#32343E"} />
            </div>
        </>
    )
}

export default Fourth