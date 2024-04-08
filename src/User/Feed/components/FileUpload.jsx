import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { imageUpload } from '../../../services/ImageService';
const FileUpload = ({ state, setState }) => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [deleteFileIndex, setDeleteFileIndex] = useState(-1);


    const { getRootProps, getInputProps } = useDropzone({
        onDrop: async (acceptedFiles) => {
            const formData = new FormData();
            acceptedFiles.forEach(file => {
                formData.append('images', file);
            });
            formData.append('type', 'post');
            console.log("acceptedFiles", acceptedFiles);
            try {
                const response = await imageUpload(formData);
                // setState({ ...state, images: response?.data?.data ?? [] });
                setState(prevState => ({ ...prevState, images: [...prevState.images, ...response?.data?.data ?? []] }));
            } catch (error) {
                console.log("Error getting profile", error);
            }


            const filesWithPreview = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            setUploadedFiles(filesWithPreview);
            // Call your backend API endpoint to upload files
        },
    });














    const handleRemoveFile = (index) => {
        setDeleteFileIndex(index);
        setOpenDeleteDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDeleteDialog(false);
        setDeleteFileIndex(-1);
    };

    const handleConfirmDelete = () => {
        setUploadedFiles(uploadedFiles.filter((file, index) => index !== deleteFileIndex));
        setOpenDeleteDialog(false);
        setDeleteFileIndex(-1);
    };
    return (
        <>
            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <Typography variant="body1">Drag and drop files here or click to browse.</Typography>
                <Dialog open={openDeleteDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Delete File</DialogTitle>
                    <DialogContent>
                        Are you sure you want to delete this file?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleConfirmDelete} color="error">Delete</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

// Styles
const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '100px',
    textAlign: 'center',
    cursor: 'pointer',
};

const fileListStyle = {
    padding: '0',
};
const imagePreviewStyle = {
    width: '100px', // Adjust image preview width as needed
    height: 'auto',
    marginRight: '10px',
};

export default FileUpload;
