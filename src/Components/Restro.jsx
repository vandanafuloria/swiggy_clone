import { useEffect, useState } from "react";
import Carousel from "../Ui/Carousel";
import Search from "./Search";
import { BANNER, RESTAURANT_TYPE, BEST } from "../constants";
import TopRestaurants from "./TopRestaurants";
import veg from "../assets/veg.png";
import nonVeg from "../assets/non-veg.png";
import Best from "./Best";

const Shimmer = () => (
  <div className="flex flex-wrap gap-10 p-10">
    {Array(8)
      .fill("")
      .map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-2xl w-1/5 h-80 m-auto border-2 border-blue-100 flex flex-col justify-center items-center"
        >
          <div className="bg-gray-300 rounded-xl w-4/5 h-40 mb-4"></div>
          <div className="bg-gray-300 h-6 w-3/5 mb-2 rounded"></div>
          <div className="bg-gray-300 h-4 w-2/5 mb-2 rounded"></div>
          <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>
          <div className="bg-gray-300 h-8 w-4/5 rounded"></div>
        </div>
      ))}
  </div>
);

const Restro = () => {
  const [restro, setRestro] = useState([]);
  const [filter, setFilter] = useState([]);
  const [banner, setBanner] = useState([]);
  const [topRestro, setTopRestro] = useState([]);
  const [bestPlaces, setBestPlaces] = useState([]);
  const [keyword, setKeyword] = useState("");
  console.log("best places", bestPlaces);

  useEffect(() => {
    const data = fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3584024&lng=78.0965691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((swiggy) => {
        const newData = swiggy.json();
        return newData;
      })
      .then((data) => {
        const cards = data.data.cards;

        // extracting restraws from response
        for (let card of cards) {
          card = card.card.card;
          const type = card["@type"];

          switch (type) {
            case RESTAURANT_TYPE:
              setRestro(card.gridElements.infoWithStyle.restaurants);
              setFilter(card.gridElements.infoWithStyle.restaurants);
              break;
            case BANNER:
              setBanner(card.gridElements.infoWithStyle.info);
              break;
          }
        }

        data;

        setTopRestro(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setBanner(data.data.cards[0].card.card.gridElements.infoWithStyle.info);
        // setLoading(false);

        setBestPlaces(cards[7].card.card.brands);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  }, []);

  const handleFilter = (value) => {
    setKeyword(value);

    const filtered = restro.filter((item) =>
      item.info.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilter(filtered); // assuming you have a state like setFilter
  };

  return (
    <>
      <div>
        <Search keyword={keyword} onChange={handleFilter} />
      </div>
      <div>
        <Carousel items={banner} />
      </div>
      <TopRestaurants topRestro={topRestro} />

      <h1 className="text-2xl font-bold p-3 pl-4 ">
        Restaurants which are delivering in your city ?{" "}
      </h1>

      <div className="restro flex gap-10 flex-wrap ">
        {filter.map((res, i) => {
          const resInfo = res.info;
          return (
            <div
              key={resInfo.id}
              className=" p-4 border text w-4/5 min-w-[200px] md:w-1/4 m-auto text-left rounded-2xl"
            >
              <img
                className="m-auto rounded-2xl w-full "
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`}
              />
              <h1 className="text-center font-bold text-lg">{resInfo.name}</h1>
              <div className="flex gap-3 justify-around">
                {" "}
                <span>{resInfo.costForTwo}</span>
                <span>{resInfo.sla.slaString}</span>
                <span>⭐️{resInfo.avgRating}</span>
              </div>

              <div className="text-xs text-gray-400">
                {resInfo.cuisines.join(",")}
              </div>

              <p className="text-sm text-gray-400">
                {resInfo.areaName}, {resInfo.locality}
              </p>
            </div>
          );
        })}
        <div>
          <h1>Best Places to visit across cities </h1>
          <Best cities={bestPlaces} />
        </div>
      </div>
    </>
  );
};
export default Restro;
