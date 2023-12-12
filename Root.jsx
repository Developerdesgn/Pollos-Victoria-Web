import React from 'react'
import Navbar from './src/components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import FooterBanner from './src/components/FooterBanner'
import Footer from './src/components/Footer'

function Root() {

    const location = useLocation()

    return (
        <>
            <Navbar />
            <Outlet />
            {location.pathname === "/" && (
                <>
                    <FooterBanner />
                    <Footer />
                </>
            )}
            {location.pathname === "/third" && (
                <>
                    <FooterBanner />
                    <Footer />
                </>
            )}
            {location.pathname === "/fourth" && (
                <>
                    <FooterBanner />
                    <Footer />
                </>
            )}
            {location.pathname === "/fifth" && (
                <>
                    <FooterBanner />
                    <Footer />
                </>
            )}
            {location.pathname === "/finali" && (
                <>
                    <Footer />
                </>
            )}
            {location.pathname === "/cancelation" && (
                <>
                    <Footer />
                </>
            )}
            {location.pathname === "/order-details" && (
                <>
                    <Footer />
                </>
            )}
            {location.pathname === "/order-cancelation" && (
                <>
                    <Footer />
                </>
            )}
            {location.pathname === "/pedidos" && (
                <>
                    <Footer />
                </>
            )}
            {location.pathname === "/personalize" && (
                <>
                    <Footer />
                </>
            )}
            {location.pathname === "/checking" && (
                <>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Root