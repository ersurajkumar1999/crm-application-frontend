import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TechnologyCard from './TechnologyCard';
import image1 from "./../../assets/image1.jpg";
import image2 from "./../../assets/image2.jpg";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5,
//       slidesToSlide: 1,
//       partialVisibilityGutter: 40
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 4,
//       slidesToSlide: 1 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 // optional, default to 1.
//     }
//   };

const TechnologiesSection = () => {
    const technologies = [
        { id: 1, name: "ABC", description: 'description', image: image1 },
        { id: 2, name: "ABC", description: 'description', image: image2 },
        { id: 3, name: "ABC", description: 'description', image: image1 },
        { id: 4, name: "ABC", description: 'description', image: image2 },
        { id: 5, name: "ABC", description: 'description', image: image1 },
        { id: 6, name: "ABC", description: 'description', image: image2 },
        { id: 7, name: "ABC", description: 'description', image: image1 },
        { id: 8, name: "ABC", description: 'description', image: image2 },
        { id: 9, name: "ABC", description: 'description', image: image1 },
        { id: 10, name: "ABC", description: 'description', image: image2 },
        { id: 11, name: "ABC", description: 'description', image: image1 },
        { id: 12, name: "ABC", description: 'description', image: image2 },
        { id: 13, name: "ABC", description: 'description', image: image1 },
        { id: 14, name: "ABC", description: 'description', image: image2 },
        { id: 15, name: "ABC", description: 'description', image: image1 },
        { id: 16, name: "ABC", description: 'description', image: image2 },
        { id: 17, name: "ABC", description: 'description', image: image1 },
        { id: 18, name: "ABC", description: 'description', image: image2 },
        { id: 19, name: "ABC", description: 'description', image: image1 },
        { id: 20, name: "ABC", description: 'description', image: image2 },
        { id: 21, name: "ABC", description: 'description', image: image1 },
        { id: 22, name: "ABC", description: 'description', image: image2 },
        { id: 23, name: "ABC", description: 'description', image: image1 },
        { id: 24, name: "ABC", description: 'description', image: image2 },
        { id: 25, name: "ABC", description: 'description', image: image1 },
        { id: 26, name: "ABC", description: 'description', image: image2 },
        { id: 27, name: "ABC", description: 'description', image: image1 },
        { id: 28, name: "ABC", description: 'description', image: image2 },
        { id: 29, name: "ABC", description: 'description', image: image1 },
        { id: 30, name: "ABC", description: 'description', image: image2 },
    ]
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            mouseTracking={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            autoPlay={true}
        >
            {
                technologies.map((technology) => (
                    <TechnologyCard key={technology.id} technology={technology} />
                ))
            }

        </Carousel>
    )
}

export default TechnologiesSection