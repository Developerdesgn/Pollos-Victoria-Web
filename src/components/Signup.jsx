import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, } from '@mui/material/styles';
import Cross from "../assets/cut.png"
import Visa from "../assets/visa.png"
import Email from "../assets/Email.png"
import Mastercard from "../assets/Mastercard.png"
import Plus from "../assets/plusCircle.png"
import Right from "../assets/circleright.png"
import Eye from "../assets/eye.png"
// import { makeStyles } from '@material-ui/core';

import Map from "../assets/map.png"
import FB from "../assets/fb.png"
import Google from "../assets/new_gogle.png"
import BannerShort from "../assets/banner_Short.png"
import Logo from "../assets/loginlogo.png"



function Signup() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const textStyle = {
        color: '#A5A5A5',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: ' 22px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:"15px"
       
    }
    const inputStyle = {
        width: '308px',
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
        width: '308px',
        height: '57px',
        borderRadius: '100px',
        background: 'var(--Light_Blue, #F0F5FA)',
        border: "none",
        outline: "none",
        padding: "0 30px",
        color: ' #B5B5B5',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '300',

        lineHeight: "normal"

    }
    const smallText = {

        color: ' #A5A5A5',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '400',

        lineHeight: "normal",
        margin: "0 8px"




    }
    const btnStyle = {
        width: "308px",
        backgroundColor: 'var(--basic-red)',
        padding: "19px",
        height: "53px",
        borderRadius: "100px",
        // textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        cursor: "pointner",
        margin: "15px"
    }

    const boxStyle = {
        width: '160px',
        height: '57px',
        background: 'var(--white-100, #FFF)',
        borderRadius: '28.5px',
        border: '1.239px solid var(--Basic_Red, #E52823)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "19px 5px"


    }
    const boxStyle1 = {
        width: '327px',
        height: '82px',
        background: 'var(--Light_Blue, #F0F5FA)',
        // border: "2px solid var(--Basic_Red, #E52823)",
        borderRadius: '15px',
        padding: "13px 27px"

    }
    const text = {
        color: '#000',
        fontFamily: 'var(--font-gotham)',
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        letterSpacing: '0.65px',
    }
    const redText = {
        color: 'var(--Basic_Red, #E52823)',
    fontFamily: 'var(--font-gotham-black)',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
}





return (
    <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
            Open responsive dialog
        </Button>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className='dialog'
            PaperProps={{
                style: {
                    borderRadius: "28px",
                    background: 'var(--white-100, #FFF)',
                    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)',
                    height: "100vh"
                    // Add any other styles you want to apply
                },
            }}
        // style={{ borderRadius: "28px", background: 'var(--white-100, #FFF)', boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)' }}
        >


            <DialogTitle id="responsive-dialog-title" style={{ padding: "0px", position: 'relative', height: "80vh" }}>
                <div>
                    <img className='img-fluid' src={BannerShort} />
                </div>
                <div style={{ position: 'absolute', top: "20px", right: "20px" }}>
                    <img className='img-fluid' style={{ cursor: "pointer" }} onClick={handleClose} width={27} height={27} src={Cross} alt="cross" />

                </div>
                <div style={{ marginTop: "-75px", textAlign: "center" }}>
                    <img width={137} height={184}  src={Logo} alt='' />
                </div>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <div className='mb-3' style={textStyle}>Registrate</div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Nombre*' style={inputStyle} />
                        </div>
                        {/* <div style={{ position: "absolute", top: "12px", left: "17px" }}><img width={18} height={14} src={Email} /></div> */}

                    </div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Apellido*' style={inputStyle} />
                        </div>
                        {/* <div style={{ position: "absolute", top: "12px", left: "17px" }}><img width={18} height={14} src={Email} /></div> */}

                    </div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Cédula*' style={inputStyle} />
                        </div>
                        {/* <div style={{ position: "absolute", top: "12px", left: "17px" }}><img width={18} height={14} src={Email} /></div> */}

                    </div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Teléfono*' style={inputStyle} />
                        </div>
                        {/* <div style={{ position: "absolute", top: "12px", left: "17px" }}><img width={18} height={14} src={Email} /></div> */}

                    </div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Dirección*' style={inputStyle} />
                        </div>
                        {/* <div style={{ position: "absolute", top: "12px", left: "17px" }}><img width={18} height={14} src={Email} /></div> */}

                    </div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Contraseña*' style={inputStyle} />
                        </div>
                        <div style={{ position: "absolute", top: "12px", right: "17px" }}><img width={18} height={14} src={Eye} /></div>

                    </div>
                    <div style={{ position: "relative", margin: "5px 0" }} >
                        <div >
                            <input type='text' placeholder='Repetir contraseña*' style={inputStyle} />
                        </div>
                        <div style={{ position: "absolute", top: "12px", right: "17px" }}><img width={18} height={14} src={Eye} /></div>

                    </div>

                    
                  
                <div style={btnStyle}>Registrarse</div>
                   
                    <div className='mb-2' style={redText} >Iniciar sesion</div>
                </div>

                {/* {"Use Google's locatio
                    n service?"} */}
            </DialogTitle>
            <br />






        </Dialog>
    </React.Fragment>
);
}

export default Signup;