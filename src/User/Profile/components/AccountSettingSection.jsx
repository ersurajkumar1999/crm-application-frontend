import React, { useState } from 'react';
import {
    Grid, CardContent,
} from "@mui/material";
import CheckEmail from './CheckEmail';
import CheckUserName from './CheckUserName';
import ChangePassword from './ChangePassword';

const AccountSettingSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handlePanelChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
                <CardContent>
                    <CheckUserName expanded={expanded} handlePanelChange={handlePanelChange} />
                    <CheckEmail expanded={expanded} handlePanelChange={handlePanelChange} />
                    <ChangePassword expanded={expanded} handlePanelChange={handlePanelChange} />
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default AccountSettingSection;
