import React from "react";
import "./SingleRecipe.css";
import { useParams } from "react-router-dom";
import { useData } from "../../Context/DataContext";

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { recipes } = useData();

  const selectedRecipe = recipes.find(({ id }) => id === recipeId);
  console.log(selectedRecipe);
  const { ingredients, instruction, cuisine, name, image } = selectedRecipe;
  return (
    <div className="container single-page">
      <h1>{name}</h1>
      <div className="single-recipe-box">
        <div className="single-img">
          <img
            src={image}
            alt="https://tse4.mm.bing.net/th?id=OIP.3WcsoyLEZoaZmIMBvppt5QHaFj&pid=Api&P=0&h=180"
          />
        </div>
        <div className="s-recipe-detail">
          <h3>Cuisine:{cuisine}</h3>
          <div className="s-ingredients">
            <strong>Ingredients:</strong>
            <p>{ingredients}</p>
          </div>
          <div className="s-instruction">
            <h3>Instructions</h3>
            <div className="instr-main">
              <ol className="instruction-list">
                {instruction?.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
