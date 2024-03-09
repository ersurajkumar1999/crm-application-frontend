import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Grid, Card, Tabs, useMediaQuery, Tab, Divider
} from "@mui/material";
import UserChatListSection from './UserChatListSection';
import SearchUserListSection from './SearchUserListSection';
import FavoriteUserListSection from './FavoriteUserListSection';
import GroupListSection from './GroupListSection';

const ChatUserInformationSection = ({ activeUser }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid item xs={12} sm={6} md={4} sx={{ flexGrow: 1, display: isMobile ? activeUser ? 'none' : 'block' : 'block' }}>
                <Card>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        aria-label="profile tabs"
                        variant={isSmallScreen ? "scrollable" : "fullWidth"}
                    >
                        <Tab label="Chats" style={{ color: selectedTab === 0 ? 'green' : 'black' }} />
                        <Tab label="Seaech" style={{ color: selectedTab === 1 ? 'green' : 'black' }} />
                        <Tab label="Favorites" style={{ color: selectedTab === 2 ? 'green' : 'black' }} />
                        <Tab label="Group" style={{ color: selectedTab === 3 ? 'green' : 'black' }} />
                    </Tabs>
                    <Divider />
                    {
                        selectedTab == 0 && <UserChatListSection />
                    }
                    {
                        selectedTab == 1 && <SearchUserListSection />
                    }
                    {
                        selectedTab == 2 && <FavoriteUserListSection />
                    }
                    {
                        selectedTab == 3 && <GroupListSection />
                    }
                </Card>
            </Grid>
        </>
    )
}

export default ChatUserInformationSection