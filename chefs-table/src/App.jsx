import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipes from "./components/OurRecipes";
const App = () => {
  return (
    <div className="container mx-auto">
      {/* Header  */}
      <Header></Header>
      {/* Banner  */}
      <Banner></Banner>
      {/* Our Recipes  */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;
