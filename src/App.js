import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Recipes from "./Recipes";
import Menu from "./Menu";
import Categories from "./Categories";
import "./styles.css";
export default function App() {
  return (
    <>
      {/* heading section */}
      <div className="heading">
        <p>EASY MEALS</p>
      </div>
      {/* Route section */}
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Recipes" element={<Recipes />}></Route>
          <Route path="/Categories" element={<Categories />}></Route>
        </Routes>
      </div>

      {/* side bar & menu section */}
      <div className="sidebar">
        <aside className="sidebar1">
          <h3>Filter Recipes:</h3>
          <p className="p1">
            Check multiple boxes below to narrow <br /> recipe search results:
          </p>
          <p></p>
          <div className="sesson">
            <h3>By Season:</h3>
            <input type="checkbox" className="p1"></input>Spring
            <br />
            <input type="checkbox" className="p1"></input>Summer
            <br />
            <input type="checkbox" className="p1"></input>Winter
            <br />
            <input type="checkbox" className="p1"></input>Autumn
            <br />
          </div>
          <div className="Diet">
            <h3>By Dietary Perferance:</h3>
            <input type="checkbox" className="p1"></input>Dairy Free
            <br />
            <input type="checkbox" className="p1"></input>Egg Free
            <br />
            <input type="checkbox" className="p1"></input>Healthy
            <br />
            <input type="checkbox" className="p1"></input>Quick & Easy
            <br />
          </div>
          <div>
            <h3>By Meal:</h3>
            <input type="checkbox" className="p1"></input>Breakfast
            <br />
            <input type="checkbox" className="p1"></input>Dessart
            <br />
            <input type="checkbox" className="p1"></input>Dinner
            <br />
            <input type="checkbox" className="p1"></input>Holidays
            <br />
          </div>
        </aside>
      </div>
    </>
  );
}
