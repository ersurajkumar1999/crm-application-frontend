import React, { useEffect, useRef, useState } from 'react';
import {
    Grid, Container, Box
} from "@mui/material";
import ChatWindow from './components/ChatWindow';
import ChatUserInformationSection from './components/ChatUserInformationSection';
import { useSelector } from 'react-redux';
import { fetchAllChats } from '../../services/ChatService';


const ChatHome = () => {
    const activeUser = true;
    const { profileData } = useSelector((state) => state.profile);
    // const userName = "Hello User";
    // // const [searchResults, setSearchResults] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [search, setSearch] = useState("")


    // const handleSearchUser = (event) => {
    //     const { value } = event.target;
    //     setSearch(value);
    // }

    // useEffect(() => {
    //     const userSearching = async () => {
    //         setIsLoading(true)
    //         try {
    //             const { data } = await searchUsers({ search });
    //             console.log("data==>", data);
    //             setSearchResults(data)
    //         } catch (error) {

    //         }
    //         setIsLoading(false)
    //     }
    //     userSearching();
    // }, [search])
    // const { user } = useContext(AuthContext);
    const loginUserId = profileData?._id;
    const [state, setState] = useState({
        users: [],
        data: [],
        loading: true,
        page: 1,
        pageSize: 15,
    });
    const { users, data, loading, page, pageSize } = state;
    const observer = useRef(null);

    useEffect(() => {
        const getAllChats = async () => {
            setState(prevState => ({ ...prevState, loading: true }));

            try {
                const { data } = await fetchAllChats({ page, pageSize });
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false }));
            }
        };

        getAllChats();
    }, [page, pageSize]);

    // const lastUserElementRef = useCallback((node) => {
    //     if (loading) return;
    //     if (observer.current) observer.current.disconnect();
    //     observer.current = new IntersectionObserver((entries) => {
    //         if (entries[0].isIntersecting && data.length > 0) {
    //             setState((prevState) => ({
    //                 ...prevState,
    //                 page: prevState.page + 1
    //             }));
    //         }
    //     });
    //     if (node) observer.current.observe(node);
    // }, [loading, data.length]);
    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <ChatUserInformationSection activeUser={activeUser} />
                    <ChatWindow activeUser={activeUser} />
                </Grid>
            </Box>
        </Container>
    );
}
export default ChatHome;
