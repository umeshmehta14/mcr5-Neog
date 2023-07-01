import { createContext, useContext, useState } from "react";
import { recipeData } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(recipeData);
  const [isOpen, setIsOpen] = useState(false);
  const [editRecipe, setEditRecipe] = useState({});
  const [searchPair, setSearchPair] = useState({
    searchValue: "",
    searchData: [],
    searchType: "name",
  });
  const { searchValue, searchType } = searchPair;

  const HandleSearch = (value) => {
    setSearchPair({ ...searchPair, searchValue: value });
    if (searchValue === "") {
      setSearchPair({ ...searchPair, searchData: [] });
    }
    const searchedArr = recipes.filter((recipe) =>
      recipe[searchType].toLowerCase().includes(value.toLowerCase())
    );
    setSearchPair({ ...searchPair, searchData: searchedArr });
  };

  const HandleDelete = (delId) => {
    const deletedItem = recipes.filter(({ id }) => id !== delId);
    setRecipes(deletedItem);
  };

  return (
    <DataContext.Provider
      value={{
        recipes,
        recipeData,
        searchPair,
        HandleDelete,
        setSearchPair,
        HandleSearch,
        editRecipe,
        setEditRecipe,
        isOpen,
        setIsOpen,
        setRecipes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
