import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../Ui/Carousel";
import Search from "./Search";
import { BANNER, RESTAURANT_TYPE, BEST } from "../constants";
import TopRestaurants from "./TopRestaurants";
import veg from "../assets/veg.png";
import nonVeg from "../assets/non-veg.png";
import BestRestaurants from "./Best";
console.log(BestRestaurants);

const Shimmer = () => (
  <div className="flex flex-wrap gap-4 md:gap-10 p-2 md:p-10 justify-center">
    {Array(8)
      .fill("")
      .map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-2xl w-full sm:w-[48%] md:w-1/5 h-64 md:h-80 m-auto border-2 border-blue-100 flex flex-col justify-center items-center mb-4"
        >
          <div className="bg-gray-300 rounded-xl w-4/5 h-24 md:h-40 mb-4"></div>
          <div className="bg-gray-300 h-4 md:h-6 w-3/5 mb-2 rounded"></div>
          <div className="bg-gray-300 h-3 md:h-4 w-2/5 mb-2 rounded"></div>
          <div className="bg-gray-300 h-3 md:h-4 w-1/2 mb-2 rounded"></div>
          <div className="bg-gray-300 h-6 md:h-8 w-4/5 rounded"></div>
        </div>
      ))}
  </div>
);

const Restro = () => {
  const [restro, setRestro] = useState([]);
  const [filter, setFilter] = useState(restro);
  const [banner, setBanner] = useState([]);
  const [topRestro, setTopRestro] = useState([]);
  const [bestPlaces, setBestPlaces] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3584024&lng=78.0965691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((swiggy) => swiggy.json())
      .then((data) => {
        const cards = data.data.cards;

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

        setTopRestro(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setBanner(data.data.cards[0].card.card.gridElements.infoWithStyle.info);

        setBestPlaces(cards[7].card.card.brands);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleFilter = (value) => {
    setKeyword(value);

    const filtered = restro.filter((item) =>
      item.info.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilter(filtered);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="px-2 md:px-4">
        <Search keyword={keyword} onChange={handleFilter} />
      </div>
      <div className="px-2 md:px-4">
        <Carousel items={banner} />
      </div>
      <div className="px-2 md:px-4">
        <TopRestaurants topRestro={topRestro} />
      </div>

      <h1 className="text-lg md:text-xl  font-bold p-2 md:p-3 md:pl-4">
        Restaurants which are delivering in your city?
      </h1>

      <div className="restro flex flex-wrap gap-4 md:gap-10 justify-center px-2 md:px-4">
        {filter.map((res, i) => {
          const resInfo = res.info;
          return (
            <div
              key={resInfo.id}
              className="p-2 md:p-4 border w-full sm:w-[48%] md:w-1/4 m-auto text-left rounded-2xl mb-4 bg-white shadow-sm"
              onClick={() => navigate(`/restaurant/${resInfo.id}`)}
            >
              <img
                className="m-auto rounded-2xl w-full h-40 md:h-52 object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`}
                alt={resInfo.name}
              />
              <h1 className="text-center font-bold text-base md:text-lg mt-2">
                {resInfo.name}
              </h1>
              <div className="flex gap-2 md:gap-3 justify-around text-xs md:text-base mt-1">
                <span>{resInfo.costForTwo}</span>
                <span>{resInfo.sla.slaString}</span>
                <span>⭐️{resInfo.avgRating}</span>
              </div>

              <div className="text-xs text-gray-400 mt-1 truncate">
                {resInfo.cuisines.join(", ")}
              </div>

              <p className="text-xs md:text-sm text-gray-400 mt-1">
                {resInfo.areaName}, {resInfo.locality}
              </p>
            </div>
          );
        })}
      </div>
      <div className="px-2 md:px-4 mt-4">
        <h1 className="text-base md:text-xl font-semibold mb-2">
          Best Places to visit across cities
        </h1>
        <BestRestaurants cities={bestPlaces} />
      </div>
    </>
  );
};
export default Restro;
