export default function BestRestaurants({ cities }) {
  return (
    <>
      <div className="cities border p-10 flex gap-2 flex-wrap md:justify-evenly">
        {cities.map((city, i) => {
          return (
            <div key={i} className="border p-1 rounded-2xl">
              <a href={city.link} className="text-xs md:text-sm">
                {city.text}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
