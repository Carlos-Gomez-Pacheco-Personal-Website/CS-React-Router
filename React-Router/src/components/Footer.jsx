import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3554/3554104.png"
          alt="Home"
        />
      </Link>
      <Link to="/blue">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
          alt="Blue"
        />
      </Link>
      <Link to="/red">
        <img
          src="https://cdn-icons-png.flaticon.com/128/14091/14091760.png"
          alt="Red"
        />
      </Link>

      {/* Add more links here */}
    </div>
  );
}
