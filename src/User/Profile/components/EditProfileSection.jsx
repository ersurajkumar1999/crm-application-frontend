import React, { useState } from 'react'
import { Grid, CardContent } from "@mui/material";
import AddressInformation from './AddressInformation';
import PersonalInformation from './PersonalInformation';
import SocialMediaInformation from './SocialMediaInformation';

const EditProfileSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handlePanelChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Grid container spacing={3}  >
            <Grid item xs={12} sm={12} md={12}>
                <CardContent>
                    <PersonalInformation expanded={expanded} handlePanelChange={handlePanelChange} />
                    <SocialMediaInformation expanded={expanded} handlePanelChange={handlePanelChange} />
                    <AddressInformation expanded={expanded} handlePanelChange={handlePanelChange} />
                </CardContent>

            </Grid>
        </Grid>
    )
}

export default EditProfileSection