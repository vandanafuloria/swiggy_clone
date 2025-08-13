import React from "react";

export default function Everyone() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Delivering for Everyone
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Card
            img="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-one.webp"
            title="For Restaurants"
            desc="Grow your restaurant business by reaching new customers and boosting your sales."
          />
          <Card
            img="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Hdfc.webp"
            title="For Delivery Partners"
            desc="Earn on your own schedule and be a part of India’s largest delivery fleet."
          />
          <Card
            img="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Group-1000006480.webp"
            title="For Customers"
            desc="Order from your favourite restaurants and get food delivered to your doorstep."
          />
          <Card
            img="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/home-2-768x768.webp"
            title="For Corporates"
            desc="Simplify office meals and events with Swiggy’s corporate solutions."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, desc }) {
  return (
    <div className="img bg-[#f7f7f7] rounded-2xl shadow hover:shadow-4xl  transition flex flex-col items-center text-center p-6">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 object-contain mb-4"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
