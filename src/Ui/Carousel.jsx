import React, { useState, useRef } from "react";
import { BANNER } from "../constants";

export default function Carousel({ items }) {
  console.log("this is imgae", items);
  const viewItems = 5;
  const maxIndex = Math.max(0, items.length - viewItems);

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    const itemWidth = container.scrollWidth / items.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 3 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };
  const goToNext = () => {
    const newIndex = currentIndex < maxIndex ? currentIndex + 3 : maxIndex;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button onClick={goToPrevious}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={goToNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="carousel">
        <div
          className="carousel-inner"
          ref={carouselRef}
          style={{
            transition: "transform 1s ease-in-out",
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-1/3 md:1/5">
              {" "}
              <img
                className="w-full"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
