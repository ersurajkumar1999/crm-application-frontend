import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { BiHome, BiFolderPlus, BiGridAlt, BiHeartCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaNetworkWired } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { MdChat, MdLocalPostOffice } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = ({ open, toggleDrawer, handleUserLogout }) => {
    const { profileData } = useSelector((state) => state.profile);
    console.log("profileData==>", profileData?.email);
    const profile = "https://i.pravatar.cc/150?img=3";
    const menus = [
        { name: 'Dashboard', link: '/dashboard', icon: <BiHome /> },
        { name: 'Profile', link: '/profile', icon: <CgProfile /> },
        { name: 'Feed', link: '/feed', icon: <MdLocalPostOffice /> },
        { name: 'My Network', link: '/mynetwork', icon: <FaNetworkWired /> },
        { name: 'Chat', link: '/chat', icon: <MdChat /> },
        { name: 'Like Mode', link: '/mode', icon: <MdChat /> },
        { name: 'User List', link: '/user-list', icon: <MdChat /> },
    ]
    return (
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
                <Stack direction={`row`} gap={2} flex={true} alignItems={'center'} justifyItems={'center'} p={2}>
                    <Avatar alt="Remy Sharp" src={profile} />
                    <Stack>
                        <Typography variant="body" fontWeight={'bold'}>{profileData?.profile?.firstName} {profileData?.profile?.lastName}</Typography>
                        <Typography variant="caption">{profileData?.email}</Typography>
                    </Stack>
                </Stack>
                <Divider />
                <List>
                    {menus.map((menu, index) => (
                        <ListItem key={menu.name} disablePadding>
                            <ListItemButton component={Link} to={menu.link} sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '35px', fontSize: '20px' }}>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText sx={{ fontWeight: 'bold' }} primary={menu.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleUserLogout}>
                            <ListItemIcon sx={{ minWidth: '35px', fontSize: '20px' }}>
                                <IoLogOutOutline />
                            </ListItemIcon>
                            <ListItemText sx={{ fontWeight: 'bold' }} primary={'Logout'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar