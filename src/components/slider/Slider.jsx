import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* eslint-disable react/prop-types */
import "./slider.scss";
import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (setImageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };
  // console.log("🚀 ~ Slider ~ images:", images);
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullslider">
          <div className="arrow">
            <ChevronLeft onClick={() => changeSlide("left")} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <ChevronRight onClick={() => changeSlide("right")} />
          </div>
          <div className="close">
            <X onClick={() => setImageIndex(null)} />
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
