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
import Mastercard from "../assets/Mastercard.png"
import Plus from "../assets/plusCircle.png"
import Right from "../assets/circleright.png"
// import { makeStyles } from '@material-ui/core';

import Map from "../assets/map.png"
import BannerShort from "../assets/banner_Short.png"



function TimeModal() {
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
        color: 'var(--Medium_grey, #646982)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',    
        margin:"5px"   
    }
    const smallText = {

        color: ' var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: ' 16px',
        fontStyle: 'normal',
        fontWeight: '500',
   
        lineHeight: "normal"
  
    }
    const btnStyle = {
        width: '325px',
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
        // marginBotton:"px"
    }

    const boxStyle = {
        width: '327px',
        height: '82px',
        background: 'var(--Light_Blue, #F0F5FA)',
        border: "2px solid var(--Basic_Red, #E52823)",
        borderRadius: '15px',
        padding:"13px 27px"
        
    }
    const boxStyle1={
        width: '327px',
        height: '82px',
        background: 'var(--Light_Blue, #F0F5FA)',
        // border: "2px solid var(--Basic_Red, #E52823)",
        borderRadius: '15px',
        padding:"13px 27px"

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
                        height:"836px"
                        // Add any other styles you want to apply
                    },
                }}
            // style={{ borderRadius: "28px", background: 'var(--white-100, #FFF)', boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)' }}
            >


                <DialogTitle id="responsive-dialog-title" style={{ padding: "0px", position: 'relative', }}>
                    <div>
                        <img className='img-fluid' src={BannerShort} />
                    </div>
                    <div style={{ position: 'absolute', top: "20px", right: "20px" }}>
                        <img className='img-fluid' style={{ cursor: "pointer" }} onClick={handleClose} width={27} height={27} src={Cross} alt="cross" />

                    </div>
                    {/* {"Use Google's location service?"} */}
                </DialogTitle>
                <br />
                <DialogContent >
                    <div className='d-flex justify-content-center'>
                        <div style={{ width: "85px",position:"relative", height: "72px", background: 'var(--Light_Blue, #F0F5FA)', borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",border:"2px solid var(--Basic_Red, #E52823)" }}>
                            <div>
                            <img className='img-fluid' src={Visa} alt="Visa" />

                            </div>
                            <div style={{position:"absolute",right:"1px" ,top:"-13px"}}>
                                <img width={24} height={24} src={Right} alt='' />
                            </div>
                        </div>

                        <div style={{ width: "85px", height: "72px", background: 'var(--Light_Blue, #F0F5FA)', borderRadius: "10px", margin: "0px 15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img className='img-fluid' src={Mastercard} alt="Visa" />
                        </div>
                    </div>
                    <br />
                    <div className='d-flex justify-content-center'>
                        <div style={boxStyle}>
                            <div className='my-1'>
                                <div style={smallText}>Mastercard</div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div><img width={28} height={28} src={Mastercard} /></div>
                                <div style={smallText}>*************</div>
                                <div style={smallText}>436</div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <div style={boxStyle1}>
                            <div className='my-1'>
                                <div style={smallText}>Mastercard</div>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <div><img width={28} height={28} src={Mastercard} /></div>
                                <div style={smallText}>*************</div>
                                <div style={smallText}>436</div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <div style={btnStyle}>Proceder al pago</div>
                    </div>

                <div className='d-flex justify-content-center mt-2'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img width={25} height={25} src={Plus} alt='plus' />
                        </div>
                        <div style={textStyle}>Agregar Método de Pago</div>
                    </div>

                </div>
                </DialogContent>






            </Dialog>
        </React.Fragment>
    );
}

export default TimeModal;