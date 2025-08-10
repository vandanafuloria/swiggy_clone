export default function Hamburger({ onClick }) {
  return (
    <>
      <div className="hamburger  border absolute">
        <span
          className="absolute right-2 cursor-pointer text-gray-500"
          onClick={onClick}
        >
          X
        </span>
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Our Business</a>
        </div>
        <div>
          <a href="">Delivering for Everyone</a>
        </div>
        <div>
          <a href="">Contact us</a>
        </div>
        <div>
          <a href="">Cart</a>
        </div>
      </div>
    </>
  );
}
