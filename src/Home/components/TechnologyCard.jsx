import React from 'react';
import { Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import image from "./../../assets/image1.jpg";

const TechnologyCard = ({ technology }) => {
  return (
    <Box my={2}>
      <Box sx={{ padding: '0 10px', position: 'relative', zIndex: 1 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Paper
            elevation={0}
            sx={{
              height: '200px',
              width: '100%',
              borderRadius: 4,
              backgroundImage: `linear-gradient(to bottom, #6DD5FA, #2980B9)`,
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              position: 'relative',
              '&:hover': {
                transform: 'scale(1.1)',
                zIndex: 2,
              },
            }}
          >
            <img
              src={technology.image}
              style={{ width: '100%', height: '100%', display: 'block', margin: '0 auto', transition: 'transform 0.3s ease' }}
              sx={{
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          </Paper>
        </Link>
      </Box>
    </Box>
  );
};

export default TechnologyCard;
