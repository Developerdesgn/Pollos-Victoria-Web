import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import drawerIcon from '../assets/drawer-icon-1.svg';
import settingIcon from '../assets/settings.svg';
import chevronIcon from '../assets/chevron-left.svg'
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Checking({ state, setState }) {

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(false);
    };

    const [activeLink, setActiveLink] = useState("")
    const navigate = useNavigate()

    function handleSelect(link) {
        setActiveLink(link)
        navigate(`/${link === "Datos Personales" ? "personalize" : link === "Mis pedidos" ? "pedidos" : link === "Métodos de pago" ? "Metados" : link === "Ubicaciones guardadas" ? "Ubicaciones" : "" }`)
    }

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List style={{ margin: "30px 0" }}>
                <div
                    onClick={() => setState(false)}
                    style={{ display: "flex", alignItems: "center", margin: "0 0 15px 10px" }}>
                    <img src={chevronIcon} alt="" />
                    <img src={settingIcon} alt="" />
                    <p style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "700",
                        margin: "0 0 0 10px"
                    }}>Configuración</p>
                </div>
                {['Datos Personales', 'Mis pedidos', 'Métodos de pago', 'Ubicaciones guardadas'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                        onClick={() => handleSelect(text)} style={{
                            backgroundColor: activeLink === text ? "#F9B8B9" : "",
                        }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={drawerIcon} alt="" />
                            </ListItemIcon>
                            <ListItemText primary={text} style={{ color: activeLink === text ? "#E52823 !important" : "white", }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {/* <Navbar /> */}
            <React.Fragment key={'right'}>
                <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer}
                    className='mt-5'
                    hideBackdrop={false}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default Checking;