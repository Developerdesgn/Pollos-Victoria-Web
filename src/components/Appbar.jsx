import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../assets/logo.png"
import Cart from "../assets/cart.png"
function Appbar() {
    return (
        <>
            <nav className="navbar" style={{position:"absolute"}}>
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <ul className="menu-items">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Quienes somos</a></li>
                            <li><a href="#">Maria Sanchez</a></li>
                            {/* <li><a href="#"><span><img src={}  /></span></a></li> */}
                          
                        </ul>
                        <h1 className="logo"><img width={300} height={80} src={Logo} /></h1>
                </div>
            </nav>
        </>


    );
}
export default Appbar