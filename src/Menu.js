import { Link } from "react-router-dom";
import "./styles.css";
function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="nav1">
        Home
      </Link>
      <Link to="/Recipes" className="nav1">
        Recipes
      </Link>
      <Link to="/Categories" className="nav1">
        Categories
      </Link>
      <Link to="/About" className="nav1">
        About
      </Link>
      <Link to="/Contact" className="nav1">
        Contact
      </Link>
    </div>
  );
}
export default Menu;
