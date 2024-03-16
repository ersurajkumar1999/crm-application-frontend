import { Skeleton, Stack } from '@mui/material'
const PreLoader = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={70} height={70} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
        </Stack>
    )
}

export default PreLoader