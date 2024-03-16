import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";
import { CardMedia, Typography, useMediaQuery } from "@mui/material";

const PostImageSlider = ({ images }) => {

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <Typography
                className={className}
                style={{
                    display: "block", marginRight: '10%', zIndex: 1
                }}
                onClick={onClick}
            />
        );
    };

    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <Typography variant="h5" component="h2"
                className={className}
                style={{ display: "block", marginLeft: '10%', zIndex: 1 }}
                onClick={onClick}
            />
        );
    };
    const settings = {
        customPaging: function (i) {
            return (
                <Typography variant="h5" component="h2">
                    {/* {"*"} */}
                    {/* <img
                        src={data[i]}
                        alt=""
                        style={{
                            height: "50px",
                            width: "50px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    /> */}
                </Typography>
            );
        },
        dots: true,
        cssEase: "linear",
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 2000, // Set the speed for auto-scrolling in milliseconds (e.g., 3000 ms = 3 seconds)
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const SingelImage = ({image}) => {
        return (
            <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
        )
    }
    const MultiImages = (images) => {
        return (
            <Slider {...settings}>
                {data.map((item) => (
                    <Typography
                        sx={{
                            height: isSmallScreen ? '300px' : '500px',
                            width: '100%'
                        }}>
                        <img
                            src={item}
                            alt=""
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Typography>
                ))}
            </Slider>
        )
    }
    return (
        <>
            {
                images.length == 1 ? (<SingelImage image={images[0]} />) : (<MultiImages images={images} />)
            }
        </>
    )
}

export default PostImageSlider