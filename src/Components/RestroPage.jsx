import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RestroPage() {
  const [menu, setMenu] = useState([]);
  console.log(menu);

  const { restroId } = useParams();
  let json;
  useEffect(() => {
    const restroMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.308999&lng=78.0948064&restaurantId=${restroId}&submitAction=ENTER`
      );
      json = await data.json();
      console.log(json.data.cards);
      setMenu(json.data.cards);
    };
    restroMenu();
  }, [restroId]);

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center">
          {menu[0]?.card?.card?.text}
        </h1>
        <div className="about w-3/4 m-auto rounded-2xl p-3 flex flex-col gap-2 mt-12 mb-12">
          <div className="flex gap-4">
            {" "}
            <h1 className="res font-bold">
              {menu[2]?.card?.card?.info?.name}
            </h1>{" "}
            <h2>
              {" "}
              <span>⭐️ {menu[2]?.card?.card?.info?.avgRating} Rating</span>
            </h2>
          </div>

          <span className="text-sm text-gray-500">
            {menu[2]?.card?.card?.info?.areaName}{" "}
            {menu[2]?.card?.card?.info?.city}
          </span>
          <span> {menu[2]?.card?.card?.info?.costForTwoMessage}</span>

          <p> {menu[2]?.card?.card?.info?.cuisines.join(", ")}</p>

          <h1>🕣 {menu[2]?.card?.card?.info?.sla?.slaString}</h1>
        </div>
        <div className="offers flex gap-10  overflow-scroll">
          {menu[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
            (offer, i) => {
              return (
                <div
                  key={i}
                  className="offer border rounded-2xl p-2 md:p-4 text-white flex flex-col text-xs md:text-base]"
                >
                  <span className="font-stretch-normal">
                    {offer.info.couponCode}
                    {offer.info.description}
                  </span>

                  <span className="font-bold">{offer.info.header}</span>
                </div>
              );
            }
          )}
        </div>
        <hr />
        <div>
          {menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
            (card, i) => {
              return (
                <div key={i}>
                  {card?.card?.card?.itemCards ? (
                    <h1 className="text-center text-4xl font-bold ">
                      {" "}
                      {card?.card?.card?.title}
                    </h1>
                  ) : null}

                  <div className="dish border ">
                    {card?.card?.card?.itemCards?.map((c, i) => {
                      return (
                        <div
                          className="flex gap-4 m-auto w-3/4 border rounded-2xl p-3 mb-4 justify-between"
                          key={i}
                        >
                          <div>
                            <h1 className="font-stretch-50% font-bold text-lg ">
                              {c.card.info.name}{" "}
                              <span className="veg text-white px-2 rounded-md">
                                {" "}
                                {c.card.info.itemAttribute?.vegClassifier ===
                                "VEG"
                                  ? "🌱 "
                                  : " 🍗"}
                              </span>
                            </h1>
                            <p className="text overflow-y-auto text-gray-500">
                              {c.card.info.description}
                            </p>
                          </div>
                          <div>
                            <img
                              className="res-img"
                              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${c.card.info.imageId}`}
                              alt=""
                            />
                            <button className="bg-green-500 text-white font-bold w-full relative bottom-1/6">
                              ADD
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
