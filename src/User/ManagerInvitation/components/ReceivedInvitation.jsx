import {
    Box, Grid, List, ListItem, ListItemAvatar, ListItemText,
    Avatar, IconButton
} from '@mui/material';
import React from 'react'
import PreLoader from '../../../components/common/PreLoader';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
const ReceivedInvitation = () => {
    const loading = false;
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
                                        <>
                                            <IconButton edge="end" aria-label="delete" >
                                                <FaCheck />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete">
                                                <MdDelete />
                                            </IconButton>
                                        </>
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

export default ReceivedInvitation