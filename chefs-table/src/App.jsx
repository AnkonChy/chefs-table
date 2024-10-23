import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
const App = () => {
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
        <Recipes></Recipes>
        {/* sidebar  */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;
