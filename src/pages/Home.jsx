import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import DummyCard from '../components/DummyCard'
import Text from '../components/Text'
import PortfolioGrid from '../components/PortfolioGrid'
import ProductSlider from '../components/ProductSlider'
import Products from '../components/Products'
import FooterBanner from '../components/FooterBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Banner />
      <DummyCard />
      {/* <Text font="45px" color="#32343E" text="Mas vendido" /> */}
      <p style={{
        fontSize: "45px",
        fontWeight: "800",
        color: "#32343E",
        margin: "60px 0 39px 0",
        textAlign:"center"
      }}>Mas vendido</p>
      <PortfolioGrid />
      <br />
      <br />
      <ProductSlider />
      <Text font="45px" color="#E52823" text="Pollo Frito" />
      <Products />
      <Text font="48px" color="#32343E" text="Ofertas" />
    </>
  )
}

export default Home