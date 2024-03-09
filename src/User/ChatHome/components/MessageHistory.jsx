import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const MessageHistory = () => {
    const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const userId  = 10;
    return (
        <List
            // ref={chatContainerRef}
            sx={{
                maxHeight: '50vh',
                overflowY: 'auto',
            }}
        >
            {messages.length > 0 && messages.map((message) => (
                <ListItem key={message.id} sx={{ justifyContent: message === 'user' ? 'flex-end' : 'flex-start' }}>
                    <ListItemText
                        primary={"message"}
                        secondary={"CalculateDateTime"}
                        primaryTypographyProps={{ variant: 'body1' }}
                        secondaryTypographyProps={{ color: 'text.secondary' }}
                        sx={{
                            textAlign: message?.sender?._id === userId ? 'right' : 'left',
                            bgcolor: message?.sender?._id === userId ? 'primary.main' : 'background.paper',
                            color: message?.sender?._id === userId ? 'primary.contrastText' : 'inherit',
                            borderRadius: 2,
                            padding: '8px 12px',
                        }}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default MessageHistory