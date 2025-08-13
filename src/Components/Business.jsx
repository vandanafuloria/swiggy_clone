import { arr } from "../constants";

export default function Business() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] py-8 px-2 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-gray-800">
          Partner with Swiggy
        </h1>
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          Join India’s largest food delivery network and grow your business with
          us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {arr.map((card, i) => (
          <Card
            key={card.id || i}
            title={card.title}
            des={card.description}
            image={card.imagePlaceholder}
          />
        ))}
      </div>
      <div className="more max-w-4xl mx-auto mt-10 text-center ">
        <a
          href="https://partner-with-us.swiggy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  text-white font-semibold py-3 px-8 rounded-full text-lg shadow transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

const Card = ({ title, des, image }) => (
  <div className="card bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
    <img
      className="w-20 h-20 object-contain mb-4"
      src={image}
      alt={title}
      loading="lazy"
    />
    <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-600 text-sm">{des}</p>
  </div>
);
