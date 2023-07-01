import React, { useState } from "react";
import "./RecipeModal.css";
import { useData } from "../../Context/DataContext";
import { v4 as uuidv4 } from "uuid";

const RecipeModal = () => {
  const { setRecipes, recipes, setIsOpen, isOpen, editRecipe, setEditRecipe } =
    useData();
  const [formData, setFormData] = useState(
    editRecipe?.name
      ? editRecipe
      : {
          id: uuidv4(),
          name: "",
          cuisine: "",
          ingredients: "",
          instruction: [],
          image: "",
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "instruction" ? value.split(",") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editRecipe?.name) {
      const updatedRecipe = recipes.map((recipe) =>
        recipe.id === editRecipe.id ? { ...recipe, ...formData } : recipe
      );
      setRecipes(updatedRecipe);
    } else {
      setRecipes((prevRecipes) => [...prevRecipes, formData]);
      setFormData({
        name: "",
        cuisine: "",
        instruction: "",
        ingredients: [],
        image: "",
      });
    }
    setIsOpen(!isOpen);
    setEditRecipe({});
  };
  return (
    <div className="outer-body">
      <div className="modal-main">
        <h1>{editRecipe?.name ? "Edit Recipe" : "Create New Recipe"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="recipe-inp">
            <input
              type="text"
              name="name"
              className="modal-inp"
              placeholder="Recipe Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cuisine"
              className="modal-inp"
              placeholder="Cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="instruction"
            placeholder="Instructions"
            value={formData.instruction}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ingredients"
            className="modal-inp"
            placeholder="Ingredients (comma-separated)"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            className="modal-inp"
            placeholder="Image URL"
            value={formData?.image}
            onChange={handleChange}
            required
          />
          <div className="btn-box">
            <button type="submit">
              {editRecipe?.name ? "Save Recipe" : " Add Recipe"}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              style={{ backgroundColor: "red" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeModal;
