
import {
    Card, CardHeader, CardMedia, CardContent, CardActions,
    Avatar, IconButton, Typography, Button, Link
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import CreatePostSection from './CreatePostSection';
import { useState } from 'react';
import { CalculateDateTime } from '../../../helpers/CalculateDateTime';
import PostImageSlider from './PostImageSlider';
import { FcLike } from "react-icons/fc";

const MAX_CONTENT_LENGTH = 50;

export default function PostCardInformation({ posts }) {
    const [expandedPosts, setExpandedPosts] = useState([]);

    const shouldShowMore = (content) => {
        return content.split(' ').length > MAX_CONTENT_LENGTH;
    };

    const handleShowMoreClick = (index) => {
        if (expandedPosts.includes(index)) {
            setExpandedPosts(expandedPosts.filter(item => item !== index));
        } else {
            setExpandedPosts([...expandedPosts, index]);
        }
    };

    const isPostExpanded = (index) => {
        return expandedPosts.includes(index);
    };
    const postUserName = (post) => {
        return (post?.createdBY?.profile?.firstName + " " + post?.createdBY?.profile?.lastName) ?? 'N/A';
    }
    return (
        <>
            {
                posts.length > 0 && posts.map((post, index) => (
                    <Card key={index}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={postUserName(post)}
                            subheader={CalculateDateTime(post.createdAt)}
                        />
                        {
                            post.images.length > 0 && <PostImageSlider images={post.images} />
                        }
                        <CardContent>
                            <Typography variant="body2" sx={{ textAlign: 'justify' }} color="text.secondary">
                                {shouldShowMore(post.content) && !isPostExpanded(index) ? `${post.content.split(' ').slice(0, MAX_CONTENT_LENGTH).join(' ')}...` : post.content}
                            </Typography>
                            {shouldShowMore(post.content) && (

                                <Link href="#" onClick={() => handleShowMoreClick(index)} variant="contained" color="text.secondary" >
                                    {isPostExpanded(index) ? "Show Less" : "Show More"}
                                </Link >
                            )}
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                                <FaRegHeart />
                                {/* <FcLike /> */}
                            </IconButton>
                            <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                                <FaRegComment />
                            </IconButton>
                            <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                                <BiRepost />
                            </IconButton>
                            <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                                <FaShare />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    );
}