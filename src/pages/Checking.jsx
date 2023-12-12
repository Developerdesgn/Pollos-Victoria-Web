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
import Personalize from './Personalize';
import drawerIcon from '../assets/drawer-icon-1.svg';
import settingIcon from '../assets/settings.svg';
import chevronIcon from '../assets/chevron-left.svg'
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

function Checking() {

    const [state, setState] = React.useState(false);

    return (
        <div>
            {/* <Navbar /> */}
            <React.Fragment key={'right'}>
                <div
                    style={{
                        position: "relative",
                        cursor: "pointer"
                    }}
                >
                    <div
                        onClick={() => setState(true)}
                        style={{
                            position: "absolute",
                            backgroundColor: "red",
                            borderRadius: "100%",
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            top: 20,
                            right: 20,
                            zIndex: 1000
                        }}>
                        <img src={settingIcon} />
                    </div>
                </div>
                <div>
                    <Personalize />
                </div>
                <Sidebar state={state} setState={setState} />
            </React.Fragment>
        </div>
    );
}

export default Checking;