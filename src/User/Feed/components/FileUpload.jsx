import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Close as CloseIcon, } from '@mui/icons-material';
const FileUpload = ({state, setState}) => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [deleteFileIndex, setDeleteFileIndex] = useState(-1);


    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
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
                <List style={fileListStyle}>
                    {uploadedFiles.map((file, index) => (
                        <ListItem key={index}>
                            <img src={file.preview} alt={file.name} style={imagePreviewStyle} />
                            <ListItemText primary={file.name} secondary={`Size: ${(file.size / 1024).toFixed(2)} KB`} />
                            {file.dimensions && (
                                <ListItemText primary={`Dimensions: ${file.dimensions.width}x${file.dimensions.height}`} />
                            )}
                            <IconButton aria-label="Remove" onClick={() => handleRemoveFile(index)}>
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
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
