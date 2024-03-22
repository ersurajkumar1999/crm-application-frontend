import React from 'react';
import {
    Typography, Box, Accordion,
    AccordionSummary, AccordionDetails, Paper
} from "@mui/material";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import SocialMediaList from './SocialMediaList';

const SocialMediaInformation = ({ expanded, handlePanelChange }) => {

    return (
        <Accordion elevation={1} sx={{ mb: 2 }} expanded={expanded === 'panel2'} onChange={handlePanelChange('panel2')}>
            <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Social Media Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <Paper elevation={3}>
                    <Box sx={{ paddingTop: 2 }}>
                        <SocialMediaList />
                    </Box>
                </Paper>
            </AccordionDetails>
        </Accordion>
    )
}

export default SocialMediaInformation;