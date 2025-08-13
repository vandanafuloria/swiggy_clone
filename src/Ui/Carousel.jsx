import React, { useState, useRef } from "react";
import { BANNER } from "../constants";

// Shimmer for banner items (round)
const BannerShimmer = () => (
  <div className="flex gap-3 md:gap-6 py-4 px-2">
    {Array(5)
      .fill("")
      .map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-full w-16 h-16 md:w-24 md:h-24"
        ></div>
      ))}
  </div>
);

export default function Carousel({ items }) {
  // Show shimmer if items are not loaded yet
  if (!items || items.length === 0) {
    return <BannerShimmer />;
  }

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
      <div className="carousel-controls ">
        <button onClick={goToPrevious} className="">
          <i className="fa-solid fa-arrow-left text-xs"></i>
        </button>
        <button onClick={goToNext} className="">
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>

      <div className="carousel pt-10">
        <div
          className="carousel-inner flex gap-3 md:gap-6"
          ref={carouselRef}
          style={{
            transition: "transform 1s ease-in-out",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
