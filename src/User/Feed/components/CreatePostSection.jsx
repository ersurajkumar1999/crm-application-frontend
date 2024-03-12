import React, { useState } from 'react'
import {
    Avatar, Button, Divider, Grid, IconButton,
    TextField, Dialog, DialogActions, DialogContent,
    DialogTitle, CardHeader, Menu, MenuItem, Typography
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { red } from '@mui/material/colors';
import { FaLock } from 'react-icons/fa';
import { MdPublic } from "react-icons/md";
const CreatePostSection = ({ handleClose, handleSubmitPost, open, state, setState }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const types = [
        { id: 0, name: "Only Me", icon: <FaLock style={{ marginRight: '5px' }} /> },
        { id: 1, name: "Anyone", icon: <MdPublic style={{ marginRight: '5px' }} /> },
    ]

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenuClick = () => setAnchorEl(null);

    const handleMenuItemClick = (event, value) => {
        setAnchorEl(null);
        setState({ ...state, status: value });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold', textAlign: 'center' }} id="customized-dialog-title">
                Create post
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <IoCloseCircleOutline />
            </IconButton>
            <Divider />
            <DialogContent>
                <Grid container spacing={2}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader={
                            <div>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    {types.find(type => type.id === state.status).icon}
                                    <Typography variant="body" fontWeight={'bold'}>
                                        {types.find(type => type.id === state.status).name}
                                    </Typography>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="card-header-menu"
                                        aria-haspopup="true"
                                        onClick={handleMenuClick}
                                        size="small"
                                        style={{ marginLeft: '5px' }}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </span>
                                <Menu
                                    id="card-header-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleCloseMenuClick}
                                >
                                    {
                                        types.map((type) => (
                                            <MenuItem key={type.id} onClick={(event) => handleMenuItemClick(event, type.id)} >{type.icon} {type.name}</MenuItem>
                                        ))
                                    }
                                </Menu>
                            </div>
                        }
                    />
                    <Grid item xs={12} md={12}>
                        <TextField
                            color='secondary'
                            fullWidth
                            name='content'
                            id="outlined-multiline-flexible"
                            placeholder='Something type here...'
                            multiline
                            rows={4} // You can adjust the number of rows as needed
                            maxRows={8} // Optionally, you can set a maximum number of rows
                            value={state.content}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose} variant="contained">Cancel</Button>
                <Button onClick={handleSubmitPost} autoFocus variant="contained">
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreatePostSection