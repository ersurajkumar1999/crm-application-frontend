import { Button, TextField } from '@mui/material'
import React from 'react'
import { IoPersonAdd } from 'react-icons/io5'

const SearchSection = ({ title, isGroup = false, handleClickOpen }) => {
    return (
        <>
            <TextField
                id="outlined-basic"
                label={title}
                value={''}
                color='secondary'
                name='user_search'
                variant="outlined"
                sx={{ width: '100%', mb: 1 }}
            />
            {
                isGroup && <Button
                    size="medium"
                    sx={{ float: 'right' }}
                    variant="contained"
                    onClick={handleClickOpen}
                    startIcon={<IoPersonAdd />}>Create Group</Button>
            }
        </>
    )
}

export default SearchSection