import ImageSlider from '../components/ImageSlider'
import { Grid, CardContent, Card
} from '@mui/material';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import TechnologiesSection from '../components/TechnologiesSection';

const Home = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Card sx={{ marginTop: '10px' }}>
            <CardContent>
              <ImageSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card sx={{ marginTop: '10px' }}>
            <CardContent>
              <ServiceSection />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card sx={{ marginTop: '10px' }}>
            <CardContent>
              <AboutSection />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card sx={{ marginTop: '10px' }}>
            <CardContent>
              <TechnologiesSection />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Home