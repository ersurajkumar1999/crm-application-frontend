import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
const ServiceSection = () => {
    const services = [
        { id: 1, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
        { id: 2, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
        { id: 3, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
        { id: 4, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
        { id: 5, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
        { id: 6, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
    ]
    return (
        <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
            <Typography variant="h4" fontWeight={`500`} color={`black`} fontFamily={'Rubik'}>
                A Perfect fit for everyone
            </Typography>

            <Grid container spacing={3} my={2} justifyContent="center">
                {services.length > 0 && services.map((service) => (
                    <Grid key={service.id} item xs={12} sm={6} md={4}>
                        <Paper
                            sx={{
                                padding: 3,
                                width: '100%',
                                borderRadius: 4,
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                position: 'relative',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    zIndex: 2,
                                    border: '1px solid #c3b3b3'
                                },
                            }}
                        >
                            <Stack spacing={3}>
                                <Typography sx={{
                                    height: '150px',
                                    width: '100%',
                                }}>
                                    <img height={'100%'} width={'100%'} src='https://jamtechtechnologies.com/assets/images/index-images/IT%20webservices.webp' />
                                </Typography>
                                <Typography variant="h5" >Social Media Free 11</Typography>
                                {/* <ServiceCard service={service} /> */}
                                <Typography sx={{ textAlign: 'justify' }} variant="body2">For individuals, solopreneurs and freelance designers
                                    who want unlimited access to premium content, to create professional designs with ease and scale their productivity.
                                    For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity. </Typography>
                                <Button variant="contained" color="secondary">Get More Informetion</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
const ServiceCard = ({ service }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    const truncatedDescription = service.description.split(' ').slice(0, 30).join(' ');
    const fullDescription = service.description;

    const handleShowMore = () => {
        setShowFullContent(true);
    };

    return (
        <Paper
            sx={{
                padding: 3,
                width: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                position: 'relative',
                '&:hover': {
                    transform: 'scale(1.05)',
                    zIndex: 2,
                    border: '1px solid #c3b3b3'
                },
            }}
        >
            <Stack spacing={3}>
                <Typography sx={{ textAlign: 'justify' }} variant="body2">
                    {showFullContent ? fullDescription : truncatedDescription}
                </Typography>
                {!showFullContent && (
                    <Button variant="contained" color="secondary" onClick={handleShowMore}>
                        Show More
                    </Button>
                )}
            </Stack>
        </Paper>
    );
};

export default ServiceSection