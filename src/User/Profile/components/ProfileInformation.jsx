import { Divider, Grid, Stack, Typography } from '@mui/material';
import PreLoader from '../../../components/common/PreLoader';
import { useSelector } from 'react-redux';

const ProfileInformation = () => {
    const {profileData, isLoading} = useSelector((state) => state.profile);
    console.log("profileData==>",profileData.profile.firstName);
    const bannerImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/KsrVAKsM9bH38aMVNsuSX5Fn8Gx7ym5ZOgYtfE8n.jpg";
    const profileImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/ew0pzkUKnYUMr6ukvIyjrcgztGyCjEicw1jETe9n.jpg";
    return (
        <>
            {isLoading && <PreLoader />}
            {!isLoading && (
                <>
                    <Grid item xs={12} sm={6} md={12}>
                        <Stack sx={{
                            height: '200px',
                            width: '100%'
                        }}>
                            <img height={'100%'} width={'100%'} src={bannerImage} alt="" />
                            {/* <Button variant="contained" > <FaCamera color='black' /></Button> */}
                        </Stack>
                        <Stack sx={{
                            // height: '150px',
                            width: '150px',
                            margin: '0 auto',
                            borderRadius: 4
                        }}>
                            <img style={{
                                borderRadius: '50%',
                                height: '100%',
                                width: '100%',
                                marginTop: '-50%',
                                border: '10px solid white'
                            }} src={profileImage} alt="" />

                        </Stack>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={6} md={12}>
                        <Stack >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{profileData.profile?.firstName} {profileData.profile?.lastName}</Typography>
                            <Typography variant="body1">{profileData.profile?.about??'N/A'}</Typography>
                        </Stack>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={6} md={12}>
                        <Stack >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>BIO</Typography>
                            <Typography >At BYO Shami Inn in Manali, guests can choose from deluxe rooms and superior double rooms.
                                Each room offers either a mountain view or a city view.</Typography>
                        </Stack>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} sm={6} md={12}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Social Information</Typography>
                        <Stack >
                            <Typography >At BYO Shami Inn in Manali, guests can choose from deluxe rooms and superior double rooms.
                                Each room offers either a mountain view or a city view.</Typography>
                        </Stack>
                    </Grid>
                    <Divider />
                </>
            )}
        </>
    );
};

export default ProfileInformation;
