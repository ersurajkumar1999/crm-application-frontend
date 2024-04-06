import React, { useState } from 'react'
import {
    Avatar, Button, Divider, Grid, IconButton,
    TextField, Dialog, DialogActions, DialogContent,
    DialogTitle, CardHeader, Menu, MenuItem, Typography
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { red } from '@mui/material/colors';

const AddorUpdateMode = ({ open, handleClose, handleSubmitMode, state, setState }) => {
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
                    <Grid item xs={12} md={12}>
                        <TextField
                            color='secondary'
                            fullWidth
                            name='name'
                            id="outlined-multiline-flexible"
                            placeholder='Something type here...'
                            value={state.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            color='secondary'
                            fullWidth
                            name='emoji'
                            id="outlined-multiline-flexible"
                            placeholder='Something type here...'
                            value={state.emoji}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose} variant="contained">Cancel</Button>
                <Button onClick={handleSubmitMode} autoFocus variant="contained">
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddorUpdateMode