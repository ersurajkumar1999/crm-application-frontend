import { Alert } from '@mui/material'
import React from 'react'

export const ErrorMessage = ({ message, handlonCloseeMessage }) => {
    return (
        <Alert fullWidth severity="error" onClose={handlonCloseeMessage}>
            {message}
        </Alert>
    )
}
export const SuccessMessage = ({message, handlonCloseeMessage }) => {
    return (
        <Alert severity="success" onClose={() => { handlonCloseeMessage }}>
            {message}
        </Alert>
    )
}