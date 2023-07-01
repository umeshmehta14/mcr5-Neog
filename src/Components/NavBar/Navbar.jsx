import React from "react";

import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { useData } from "../../Context/DataContext";

const Navbar = () => {
  const location = useLocation();

  const { searchPair, setSearchPair, HandleSearch } = useData();
  const { searchType } = searchPair;

  if (location?.pathname.includes("/recipe")) {
    return null;
  }
  return (
    <div className="navbar">
      <form action="">
        <input
          type="text"
          placeholder="Search Here..."
          onChange={(e) => HandleSearch(e.target.value)}
        />
        <h3>Filters:</h3>
        <div className="filter-radio-btn">
          <div className="radio-box">
            <input
              type="radio"
              checked={searchType === "name"}
              name="name"
              id="name"
              onChange={(e) =>
                setSearchPair({ ...searchPair, searchType: "name" })
              }
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="radio-box">
            <input
              type="radio"
              checked={searchType === "cuisine"}
              id="Cuisine"
              onChange={(e) =>
                setSearchPair({ ...searchPair, searchType: "cuisine" })
              }
            />
            <label htmlFor="Cuisine">Cuisine</label>
          </div>
          <div className="radio-box">
            <input
              type="radio"
              checked={searchType === "ingredients"}
              name="ingredients"
              id="Ingredients"
              onChange={(e) =>
                setSearchPair({ ...searchPair, searchType: "ingredients" })
              }
            />
            <label htmlFor="Ingredients">Ingredients</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
