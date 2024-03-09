import {
    Avatar, Box, Card, CardContent, Divider, List, ListItem, ListItemAvatar,
    ListItemButton, ListItemText, TextField, Typography
} from '@mui/material'
import React, { useState } from 'react'
import SearchSection from './SearchSection';

const FavoriteUserListSection = () => {
    const users = [1, 2, 3, 4, 5, 6]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = () => {
        console.log("handleListItemClick");
    }
    return (
        <Card>
            <CardContent>
            <SearchSection title={"Search Favorite People"} />
                {/* <Button size="medium" sx={{ float: 'right' }} variant="contained" startIcon={<IoPersonAdd />}>Create Group</Button> */}
                <Box sx={{ width: '100%', mt: 2, maxWidth: '100%', height: '400px', overflow: 'auto', bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders" >
                        <Divider />
                        {
                            users.map((user, index) => (
                                <>
                                    <ListItemButton

                                        key={user}
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index)}
                                    >
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/146355358?v=4" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={"Hello"}
                                            secondary={
                                                <>
                                                    {'this is last msg'}
                                                    <ListItem disableGutters secondaryAction={"1 day ago"} ></ListItem>
                                                </>
                                            }
                                        />
                                    </ListItemButton>
                                    <Divider />
                                </>
                            ))
                        }
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}

export default FavoriteUserListSection