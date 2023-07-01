import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import SingleRecipe from "./Pages/Single Recipe/SingleRecipe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
