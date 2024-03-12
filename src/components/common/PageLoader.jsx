import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material';
const PageLoader = ({isLoading = false}) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 999 }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default PageLoader