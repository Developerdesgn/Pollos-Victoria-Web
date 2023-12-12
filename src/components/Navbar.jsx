import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../assets/logo.png"
import Cart from "../assets/cart.png"
import Icon from "../assets/icon.png"
import LoginModal from './LoginModal';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;
// const navItems = ['Inicio', 'Quienes somos', 'Maria Sanchez'];
const navItems = [{ name: 'Inicio', iconName: Cart }, { name: 'Quienes somos' }, { name: 'Iniciar sesión', icon: "true", iconName: "AccountCircleIcon" }];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const itemStyle = {
        color: 'var(--white-100, #FFF)',
        fontFamily: 'Gotham Black',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',

    }
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                height: "100vh",
                textAlign: 'center',
                backgroundColor: "rgb(235, 37, 45)",
                color: "var(--white-100, #FFF)"
            }}
        >
            <Typography sx={{ my: 2 }}>
                <img className='img-fluid' width={150} height={68} src={Logo} alt="logo" />
            </Typography>
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} style={{ padding: "0 20px 0 0" }}>
                        <ListItemButton sx={{ textAlign: "right" }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const cartStyle = {
        width: "50px",
        height: "60px",
        backgroundColor: "rgba(239, 239, 239, 1)",
        filter: 'drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.25))',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        cursor: "pointer"
    }
    const handleOpen = (item) => {
        if (item.name == "Iniciar sesión") setOpen(!open)
    }
    const container = window !== undefined ? () => window().document.body : undefined;
    const location = useLocation()

    return (
        <>
            <LoginModal value={open} />
            <Box className='mt-1' sx={{ display: 'flex', width: "100%", backgroundColor: location.pathname === "/" ? "" : "#EB252D", position: "absolute" }}>
                {/* // <Box sx={{ display: 'flex', width: "100%", backgroundColor: '#EB252D', }}>  */}
                <CssBaseline />
                <AppBar position='sticky' component="nav" style={{ padding: { sm: "0px", md: "5px 0px", lg: "5px 0" }, background: "transparent", border: "none", boxShadow: "none" }}>
                    {/* <AppBar position='sticky' component="nav" className='nav_Padding' style={{  backgroundColor: '#EB252D' }}> */}
                    <Toolbar className='toolbar' >


                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, height: '106px' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className='nav_image'
                            // variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block' } }}
                        >
                            <img className='img-fluid' width={320} height={91} src={Logo} alt="logo" />
                        </Typography>
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', sm: 'flex' }, alignItems: "center", justifyContent: "space-around" }}>
                            {navItems.map((item) => (
                                <Typography component="div" className='navItem' key={item} sx={itemStyle}>
                                    {item.icon ? <span onClick={() => handleOpen(item)}><img width={26.5} height={26.5} className='img-fluid' src={Icon} /> <span className='mx-2'>{item.name}</span></span> : item.name}
                                </Typography>
                            ))}
                            <Typography className='cart_img' component="div" >
                                <img width={70} height={70} src={Cart} />
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        anchor='right'
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>

            </Box>
        </>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
