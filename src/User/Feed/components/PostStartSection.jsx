import React, { useState } from 'react'
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {
    Card, CardHeader, CardActions,
    Avatar, IconButton, TextField
} from "@mui/material";
import CreatePostSection from './CreatePostSection';
import PageLoader from '../../../components/common/PageLoader';
import { createPost } from '../../../services/CommonServices';
// import { createPost } from '../../../services/ApiService';
const PostStartSection = ({ handlePostReset }) => {
    const [open, setOpen] = useState(false);

    const [state, setState] = useState({
        status: 1,
        content: null,
        isLoading: false,
        titel: 'titel'
    });

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        setState({ ...state, content: null });
    };


    const handleSubmitPost = async () => {
        setState({ ...state, isLoading: true });
        try {
            const response = await createPost(state);
            console.log("response==>", response);
            if (response.status) {
                handlePostReset(response?.data?.data ?? null);
            }
        } catch (error) {
            console.log("error===>", error);
            setState({ ...state, isLoading: false });
        } finally {
            setOpen(false);
            setState({ ...state, isLoading: false, content: null });
        }
    }
    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title={<TextField
                        id="oldPassword"
                        variant="outlined"
                        fullWidth
                        placeholder='Start the post'
                        color='secondary'
                        name="oldPassword"
                        onClick={handleClickOpen}
                    />}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ margin: '0 auto' }}>
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <CreatePostSection
                handleClose={handleClose}
                handleSubmitPost={handleSubmitPost}
                open={open}
                state={state}
                setState={setState}
            />
            <PageLoader isLoading={state.isLoading} />
        </>
    )
}

export default PostStartSection