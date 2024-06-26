
import {
    Card, CardHeader, CardMedia, CardContent, CardActions,
    Avatar, IconButton, Typography, Button, Link, Divider
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
import { BiLike } from "react-icons/bi";

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
                            title={(post?.createdBY?.profile?.firstName + " " + post?.createdBY?.profile?.lastName)}
                            subheader={CalculateDateTime(post.createdAt)}
                        />
                        
                        <CardContent>
                            <Typography variant="body2" sx={{ textAlign: 'justify' }} color="text.secondary">
                                {shouldShowMore(post.content) && !isPostExpanded(index) ? `${post.content.split(' ').slice(0, MAX_CONTENT_LENGTH).join(' ')}...` : post.content}
                            </Typography>
                            {shouldShowMore(post.content) && (

                                <Link onClick={() => handleShowMoreClick(index)} component="button" variant="contained" color="text.secondary" >
                                    {isPostExpanded(index) ? "Show Less" : "Show More"}
                                </Link >
                            )}
                        </CardContent>
                        {
                            post.images.length > 0 && <PostImageSlider images={post.images} />
                        }
                        <CardActions disableSpacing>
                            <Link
                                sx={{ margin: '0 auto' }}
                                color="text.secondary"
                                component="button"
                                variant="contained"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                               4545
                            </Link>
                            <Link
                                sx={{ margin: '0 auto' }}
                                color="text.secondary"
                                component="button"
                                variant="contained"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                4 comments
                            </Link>
                            <Link
                                 sx={{ margin: '0 auto' }}
                                color="text.secondary"
                                component="button"
                                variant="contained"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                4 shares
                            </Link>
                        </CardActions>
                        <Divider />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" sx={{ margin: '0 auto' }}>
                                <BiLike sx={{ color: red[500] }}/>
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