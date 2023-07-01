import React from "react";

import "./RecipeBox.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useData } from "../../Context/DataContext";
import RecipeModal from "../RecipeModal/RecipeModal";

const RecipeBox = ({ recipe }) => {
  const { HandleDelete, isOpen, setIsOpen, setEditRecipe } = useData();
  const { cuisine, name, image, id } = recipe;

  const navigate = useNavigate();

  return (
    <>
      <div className="recipe-box">
        <div className="edit-delete">
          <AiOutlineEdit
            title="Edit"
            onClick={() => {
              setEditRecipe(recipe);
              setIsOpen(!isOpen);
            }}
          />
          <BsTrash title="Delete" onClick={() => HandleDelete(id)} />
        </div>
        <div className="recipe-img">
          <img
            src={image}
            alt="https://tse4.mm.bing.net/th?id=OIP.3WcsoyLEZoaZmIMBvppt5QHaFj&pid=Api&P=0&h=180"
          />
        </div>
        <h2 className="recipe-name">{name}</h2>
        <div className="recipe-detail">
          <section>
            <strong>Cuisine Type:</strong>
            <p>{cuisine}</p>
          </section>
          <section>
            <strong>Ingredients:</strong>
            <p onClick={() => navigate(`/recipe/${id}`)} className="s-link">
              See Recipe
            </p>
          </section>
          <section>
            <strong>Instructions:</strong>
            <p onClick={() => navigate(`/recipe/${id}`)} className="s-link">
              See Recipe
            </p>
          </section>
        </div>
      </div>
      {isOpen && <RecipeModal />}
    </>
  );
};

export default RecipeBox;
