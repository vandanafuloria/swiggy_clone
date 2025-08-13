import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div className="w-4/5 px-4 py-2  md:w-2/3 hidden md:block">
        <nav>
          <ul className="w-full text-black flex gap-3 justify-between ">
            <li className="text-xs md:text-sm">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/idea">Our Business</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery For Everyone</Link>
            </li>

            <li>
              <a className="text-xs md:text-sm" href="">
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
