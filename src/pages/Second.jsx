import React from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import Back from '../assets/back.png'; // Make sure to provide the correct path
import DummyCard from '../components/DummyCard'; // Import your DummyCard component
import PortfolioGrid from '../components/PortfolioGrid'; // Import your PortfolioGrid component
import ProductSlider from '../components/ProductSlider';
import Text from '../components/Text';
import Products from '../components/Products';
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer';

const Second = () => {
    return (
        <>

            <div className='container-fluid' style={{ position: 'relative', }}>
                <img className='img-fluid' src={Back} style={{ position: 'absolute', top: 0, left: 0 }} />

                <div style={{ position: 'absolute', top: '10px', left: '200px' }}>
                    <DummyCard />
                </div>

                <div style={{ position: 'absolute', top: '395px', left: '50%', transform: 'translateX(-50%)' }}>
                    <div style={{ color: '#32343E', textAlign: 'center', fontFamily: 'var(--font-futura-xblk-bt)', fontSize: '45px', fontWeight: '400', fontStyle: 'normal' }}>
                        Mas vendido
                    </div>
                </div>
            </div>
            
            <div style={{marginTop:"495px"}}>
                <PortfolioGrid />
                <br />
                <br />
                <ProductSlider />
                <Text font="48px" text="Pollo Frito" color="#E52823" />
                <Products />
                <Text font="48px" text="Ofertas" color="#32343E" />
               

            </div>



        </>

    );
};

export default Second;
