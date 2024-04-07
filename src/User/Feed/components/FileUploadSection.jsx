import {
    Button, Divider, Grid, IconButton, Dialog, DialogActions, DialogContent,
    DialogTitle
} from '@mui/material'
import { IoCloseCircleOutline } from 'react-icons/io5';
import FileUpload from "./FileUpload";
import PostImageList from './PostImageList';
const FileUploadSection = ({ handleClose, handleSubmitPost, open, state, setState }) => {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="100%"
        >
            <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold', textAlign: 'center' }} id="customized-dialog-title">
                Images Editor
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <IoCloseCircleOutline />
            </IconButton>
            <Divider />
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <FileUpload
                            state={state}
                            setState={setState}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <PostImageList />
                    </Grid>

                </Grid>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose} variant="contained">Cancel</Button>
                <Button onClick={handleSubmitPost} autoFocus variant="contained">
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FileUploadSection