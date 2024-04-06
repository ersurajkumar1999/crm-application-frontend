import {
    Box, Button, Card, CardHeader, Container, Grid, Typography,
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import ModeList from "./components/ModeList";
import { useState } from "react";
import AddorUpdateMode from "./components/AddorUpdateMode";


const Mode = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmitMode = () => {
        console.log("handleSubmitMode==>");
    }
    const [state, setState] = useState({
        id: null,
        name: null,
        emoji: null,
        isLoading: false,
    });
    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader
                                title={<Typography variant="h6" component="h6">Invitations</Typography>}
                                action={<Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}> Add</Button>} // include the header action here
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <ModeList />
                        <AddorUpdateMode
                            open={open}
                            handleClose={handleClose}
                            handleSubmitMode={handleSubmitMode}
                            state={state}
                            setState={setState}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Mode