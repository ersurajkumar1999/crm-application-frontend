import {
    Box, Button, Card, CardHeader, Container, Grid, Typography,
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import { UserList } from "./components/UserList";


const Users = () => {
    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader
                                title={<Typography variant="h6" component="h6">User List</Typography>}
                                action={<Button variant="contained" startIcon={<AddIcon />} > Add</Button>} // include the header action here
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <UserList />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Users