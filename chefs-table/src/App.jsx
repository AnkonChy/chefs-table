import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const [preparedRecipe, setPreparedRecipe] = useState([]);

  const [totalTime, setTotalTime] = useState(0);

  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      const newRecipe = [...recipeQueue, recipe];
      setRecipeQueue(newRecipe);
    } else {
      alert("Already Added");
    }
  };

  const handleRemove = (id) => {
    //find which recipe to remove
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    //remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  return (
    <div className="container mx-auto">
      {/* Header  */}
      <Header></Header>
      {/* Banner  */}
      <Banner></Banner>
      {/* Our Recipes  */}
      <OurRecipes></OurRecipes>
      {/* recipe card section  */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* card section  */}
        <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
        {/* sidebar  */}
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
