const getSenderName = (users, loginUserId) => {
    return users[0]._id === loginUserId ? users[1].username : users[0].username;
}
const getSenderlatestMessage = (user) => {
    return user.latestMessage?.message.length > 30
        ? user.latestMessage?.message.slice(0, 30) + "..."
        : user.latestMessage?.message;
}
export { getSenderName, getSenderlatestMessage }