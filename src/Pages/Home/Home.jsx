import React from "react";
import { useData } from "../../Context/DataContext";
import RecipeBox from "../../Components/RecipeBox/RecipeBox";

import { AiOutlinePlusCircle } from "react-icons/ai";

import "./Home.css";
import RecipeModal from "../../Components/RecipeModal/RecipeModal";

const Home = () => {
  const {
    recipes,
    searchPair: { searchData, searchValue },
    isOpen,
    setIsOpen,
  } = useData();
  return (
    <>
      <div className="container">
        <h1 className="recipe-heading">
          {searchValue ? `Search Result For ${searchValue}` : "All Recipes:"}
        </h1>
        <div className="recipe-box-container">
          {searchValue && searchData?.length === 0 ? (
            <h1>No Result Found</h1>
          ) : searchData?.length > 0 ? (
            searchData?.map((recipe) => (
              <RecipeBox key={recipe.id} recipe={recipe} />
            ))
          ) : (
            recipes?.map((recipe) => (
              <RecipeBox key={recipe.id} recipe={recipe} />
            ))
          )}
          <div className="new-recipe-btn">
            <AiOutlinePlusCircle
              title="New Recipe"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      {isOpen && <RecipeModal />}
    </>
  );
};

export default Home;
