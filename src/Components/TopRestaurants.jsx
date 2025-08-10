import { useState, useRef } from "react";
export default function TopRestaurants({ topRestro }) {
  const viewItems = 5;
  const maxIndex = Math.max(0, topRestro.length - viewItems);

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    const itemWidth = container.scrollWidth / topRestro.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 2 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };
  const goToNext = () => {
    const newIndex = currentIndex < maxIndex ? currentIndex + 2 : maxIndex;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <>
      <div className="top-restaurant">
        <h1 className="text-4xl font-bold pl-5 m-5">
          Top Restaurant in Your City{" "}
        </h1>
        <div className="">
          <div className="carousel-controls">
            <button onClick={goToPrevious}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={goToNext}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div
            className="top-res flex gap-10 overflow-auto py-20"
            ref={carouselRef}
          >
            {topRestro.map((top) => {
              console.log(top);

              return (
                <div
                  className="top w-1/3 md:w-1/4 border rounded-2xl overflow-hidden"
                  key={top.info.id}
                >
                  <div className="img-container">
                    <img
                      className="w-full"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${top.info.cloudinaryImageId}`}
                    />
                  </div>
                  <div className="p-3">
                    <span className="font-bold font-2xl">{top.info.name}</span>
                    <h1>{top.info.costForTwo}</h1>

                    <h3>
                      <i className="fa-solid fa-star"></i>
                      <span>{top.info.avgRating} </span>
                      <span>{top.info.sla.slaString}</span>
                    </h3>
                    <span>{top.info.locality}</span>
                    <div className="text-xs text-gray-400">
                      {top.info.cuisines.join(", ")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
