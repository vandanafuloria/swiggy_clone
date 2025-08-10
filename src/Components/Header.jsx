import { useState } from "react";
import Navigation from "../Ui/Navigation";
import Hamburger from "../Ui/Hamburger";

export default function Header() {
  const [hamberger, setisHamberger] = useState(false);

  const handleHambergerClick = () => {
    setisHamberger((prev) => !prev);
  };
  return (
    <div className="flex justify-between p-5 border">
      <div className="logo">
        <img
          className="w-3/4 overflow-hidden rounded-2xl md:w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s"
        />
      </div>{" "}
      <Navigation />
      {!hamberger && (
        <div className="block md:hidden">
          <i className="fa-solid fa-bars" onClick={handleHambergerClick}></i>
        </div>
      )}
      {hamberger && (
        <div>
          <Hamburger onClick={handleHambergerClick} />
        </div>
      )}
    </div>
  );
}
