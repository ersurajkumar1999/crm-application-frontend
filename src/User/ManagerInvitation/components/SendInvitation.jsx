import {
    Box, Grid, List, ListItem, ListItemAvatar, ListItemText,
    Avatar, Button
} from '@mui/material';
import React from 'react'
import PreLoader from '../../../components/common/PreLoader';
import { MdRemoveCircle } from 'react-icons/md';

const SendInvitation = () => {
    const loading = false;
    const users = [1, 2, 3]
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    {loading && <PreLoader />}
                    <List>
                        {
                            users.map((user) => (
                                <ListItem
                                    key={user}
                                    secondaryAction={
                                        <Button variant="contained" startIcon={<MdRemoveCircle />}>Withdraw</Button>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={'Secondary text'}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SendInvitation