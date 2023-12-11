import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currentImageIndex, setCurrentImage] = useState(0);

    const handelNext = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }

    const handelPrev = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const currentImage = images[currentImageIndex];

    return (
        <div className="Container">
            <ArrowBackIosIcon onClick={handelPrev} className="arrow-icon" />
            <div className="image-cont">
                <img src={currentImage.img} alt={currentImage.title} className="carousel-img" />
                <div className="sub-cont">
                    <h2>{currentImage.title}</h2>
                    <p>{currentImage.subtitle}</p>
                </div>
            </div>
            <ArrowForwardIosIcon onClick={handelNext} className="arrow-icon" />
        </div>
    )
}

export default Carousel;