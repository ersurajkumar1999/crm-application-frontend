import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { SlMenu } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts } from "react-icons/md";

import { Divider, ListItemIcon, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import logo from "../../../assets/images/logo.svg";
function ResponsiveAppBar({handleUserLogout}) {
    const { profileData } = useSelector((state) => state.profile);

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = useState(false);
    const logo = "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg";
    const profile = "https://i.pravatar.cc/150?img=3";


    const toggleDrawer = (newOpen) => setOpen(newOpen);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            onClick={() => toggleDrawer(true)}
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                        >
                            <SlMenu onClick={() => toggleDrawer(true)} sx={{ display: { xs: 'none', md: 'flex' } }} />
                            <img src={logo} alt='...' style={{ marginLeft: '15px' }} />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => toggleDrawer(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={logo} alt='...' />
                        </Typography>
                        <Box sx={{ flexGrow: 0, ml: 3, position: 'absolute', right: '5%' }}>
                            <Stack direction="row" spacing={2} sx={{ float: 'right', display: { xs: 'none', md: 'block' } }}>
                                <IconButton edge="start" size="medium" color="inherit" aria-label="menu">
                                    <IoMdNotificationsOutline />
                                </IconButton>
                                <IconButton edge="start" size="medium" color="inherit" aria-label="menu">
                                    <IoSettingsOutline />
                                </IconButton>
                            </Stack>
                        </Box>
                        <Box sx={{ flexGrow: 0, ml: 3, position: 'absolute', right: '0' }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={profile} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Stack direction={`row`} gap={2} flex={true} alignItems={'center'} justifyItems={'center'} p={2}>
                                    <Avatar alt="Remy Sharp" src={profile} />
                                    <Stack>
                                        <Typography variant="body" fontWeight={'bold'}>{profileData?.profile?.firstName} {profileData?.profile?.lastName}</Typography>
                                        <Typography variant="caption">{profileData?.email}</Typography>
                                    </Stack>
                                </Stack>
                                <Divider />
                                <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                                    <ListItemIcon >
                                        <CgProfile fontSize={'40px'} />
                                    </ListItemIcon>
                                    <Typography marginLeft={'15px'}>Profile</Typography>
                                </MenuItem>
                                <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                                    <ListItemIcon >
                                        <MdOutlineManageAccounts fontSize={'40px'} />
                                    </ListItemIcon>
                                    <Typography marginLeft={'15px'}> My account</Typography>
                                </MenuItem>
                                <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                                    <ListItemIcon >
                                        <CiSettings fontSize={'40px'} />
                                    </ListItemIcon>
                                    <Typography marginLeft={'15px'}> Settings</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleUserLogout} >
                                    <ListItemIcon >
                                        <IoLogOutOutline fontSize={'40px'} />
                                    </ListItemIcon>
                                    <Typography marginLeft={'15px'}> Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Sidebar open={open} toggleDrawer={toggleDrawer} handleUserLogout={handleUserLogout}/>
        </>
    );
}
export default ResponsiveAppBar;