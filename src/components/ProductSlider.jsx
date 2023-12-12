import React from "react";
import Slider from "react-slick";
import Meat from "../assets/meat.png";
import Box from "../assets/11.png";
import Basket from "../assets/22.png";
import Burger from "../assets/burger.png";
import Dish from "../assets/dish.png";
import Chicken from "../assets/chicken.png";
import Cookies from "../assets/cookie.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const ProductSlider = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: 'var(--Dark_Grey, #32343E)', position: "absolute", top: '-10px' }}
                onClick={onClick}
            >
                <ArrowForwardIcon />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: 'var(--Dark_Grey, #32343E)', position: "absolute", top: '-10px' }}
                onClick={onClick}
            >
                <ArrowBackIcon />
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        // variableWidth: true,
        arrows: true,
        slidesToScroll: 8,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        ],


    };
    const textStyle = {
        color: 'var(--medium-grey)',
        fontFamily: 'var(--font-Gotham-Black)',
        fontSize: '16px',
        fontStyle: 'italic',
        fontWeight: '400',
        lineHeight: '14px',/* 87.5% */
        cursor: "pointer",

    }
    const data = [
        { name: "Pollo Frito", icon: Meat, width: "140px", color: "var(--Basic_red)" },
        { name: "Pechurinas", icon: Box, width: "140px" },
        { name: "Tamboras", icon: Basket, width: "140px" },
        { name: "Sándwich", icon: Burger, width: "140px" },
        { name: "Rollos & Ensaladas", icon: Dish, width: "140px" },
        { name: "Pollo Horneado", icon: Chicken, width: "140px" },
        { name: "Postres", icon: Cookies, width: "140px" },
        { name: "Pollo Frito", icon: Meat },
        { name: "Pollo Frito", icon: Meat, width: "140px", color: "var(--Basic_red)" },
        { name: "Pechurinas", icon: Box, width: "140px" },
        { name: "Tamboras", icon: Basket, width: "140px" },
        { name: "Sándwich", icon: Burger, width: "140px" },
        { name: "Rollos & Ensaladas", icon: Dish, width: "140px" },
        { name: "Pollo Horneado", icon: Chicken, width: "140px" },
        { name: "Postres", icon: Cookies, width: "140px" },
        { name: "Pollo Frito", icon: Meat },
    ]

    return (
        <div className="slider">
            <Slider style={{ margin: "0 30px" }}  {...settings}>
                {data.map((item) => {
                    let Icon = item.icon;
                    return (
                        <div className="mr-4 cursor-pointer" style={{ borderBottom: "2px solid var(--Basic_red)" }}>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: item.width }}>
                                <span className="mx-2" ><img src={Icon} style={{ color: 'var(--medium-grey)' }} width={30} height={30} /></span>
                                <span style={textStyle}>{item.name}</span>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default ProductSlider;
