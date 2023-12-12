import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme,} from '@mui/material/styles';
import Cross from "../assets/cut.png"
// import { makeStyles } from '@material-ui/core';

import Map from "../assets/map.png"
import Text from './Text';
import Location from "../assets/location.png"
import LightLocation from "../assets/lightLocation.png"

function Modal() {
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
        color: ' #EB2830',
        fontFamily: 'var(--font-gotham-black)',
        fontSize: ' 22px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '22px', /* 100% */
        margin: "15px 70px"
    }
    const smallText = {

        color: ' var(--Dark_Grey, #32343E)',
        fontFamily: 'var(--font-gotham)',
        fontSize: ' 14px',
        fontStyle: 'normal',
        fontWeight: '400',
        // textAlign: 'center',
        width: "438px",
        margin: " 5px",
        lineHeight: "normal"
    }
    const btnStyle = {
        width: '353px',
        height: '57px',
        borderRadius: '100px',
        background: '#EB252D',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // marginBotton:"px"
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
                // style={{ borderRadius: "28px", background: 'var(--white-100, #FFF)', boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)' }}
            >
                
                <DialogTitle className='d-flex justify-content-end cursor-pointer' id="responsive-dialog-title">
                    <img className='img-fluid' style={{ cursor: "pointer" }} onClick={handleClose} width={27} height={27} src={Cross} alt="cross" />
                    {/* {"Use Google's location service?"} */}
                </DialogTitle>
                <DialogContent style={{ padding: "0px",height:"312px" }}>
                    <img className='w-100 h-100' src={Map} />

                </DialogContent>
                <DialogContentText>
                    <div style={textStyle}>
                        Para retirar
                    </div>
                    <div className='d-flex  justify-content-center align-items-center mb-3'>
                        <div><img src={Location} /></div>
                        <div className='mt-3' style={smallText}>
                            PLAZA CUADRA, San Isidro. Av. Rafael Tomas Fernández Dominguez, Santo Domingo este.
                        </div>
                    </div>
                    <div className='d-flex  justify-content-center align-items-center mb-3'>
                        <div><img src={LightLocation} /></div>
                        <div className='mt-2' style={smallText}>
                            Avn. John F. Kennedy esquina Tiradentes, estación de combustible Sunix
                            {/* PLAZA CUADRA, San Isidro. Av. Rafael Tomas Fernández Dominguez, Santo Domingo este. */}
                        </div>
                    </div>
                    <div className='d-flex  justify-content-center align-items-center mb-3'>
                        <div><img src={LightLocation} /></div>
                        <div style={smallText}>
                            Av. 27 de Febrero casi esq. Caonabo.
                        </div>
                    </div>
                    <div className='d-flex  justify-content-center align-items-center mb-3'>
                        <div><img src={LightLocation} /></div>
                        <div style={smallText}>
                            Galería 360, Food Court.
                        </div>
                    </div>

                    <div className='d-flex  justify-content-center align-items-center mb-3'>
                        <div><img src={LightLocation} /></div>
                        <div style={smallText}>
                            Jumbo Av. Luperón, Food Court.
                        </div>
                    </div>
                    <div className='d-flex  justify-content-center align-items-center mb-3'>
                        <div><img src={LightLocation} /></div>
                        <div style={smallText}>
                            Av. Luperón, estación Total
                        </div>
                    </div>



                </DialogContentText>


                <DialogActions className='d-flex justify-content-center mb-3'>
                    <div style={btnStyle}>
                        <div><img width={29} height={29} src={LightLocation} /></div>
                        <div style={{
                            color: 'var(--white-100, #FFF)',
                            fontFamily: 'var(--font-gotham )',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                        }}>Guardar ubicación </div>
                    </div>
                

                    {/* <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button> */}
                </DialogActions>
                {/* <br /> */}
            </Dialog>
        </React.Fragment>
    );
}

export default Modal;