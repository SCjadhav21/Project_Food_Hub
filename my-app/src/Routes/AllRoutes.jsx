import { Routes, Route } from "react-router-dom";
import AddRacipes from "../Backend/Racepes/AddRacipes";
import RestaurantSingle from "../components copy/Home/Banner/RestaurantSingle/RestaurantSingle";
import Home from "../components copy/Home/Home";
import FoodMenu from "../components copy/Home/Meal/FoodMenu";
import Meal from "../components copy/Home/Meal/Meal";
import SigleUserPage from "../components copy/Home/Meal/SigleUserPage";
import Article from "../Pages/Articles/Articles";
import SingleArticlePage from "../Pages/Articles/Single";
import Directory from "../Pages/Directory/Directory";

import NearbyShops from "../Pages/Directory/NearbyShops";
import SingleDirectory from "../Pages/Directory/SingleDirectory";
import Help from "../Pages/Help/Help";
import Kind from "../Pages/kind/Kind";
import SingleKindPage from "../Pages/kind/SingleKind";
import Mobilapp from "../Pages/mobileapp/Mobilapp";
import Recipes from "../Pages/Recipes/Recipes";
import SignleRecipePage from "../Pages/Recipes/SignleRecipePage";
import AddShop from "../Backend/Directory/AddShop";
function AllRoutes() {
  return (
    <Routes>
      {/* anju */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/Moments" element={<RestaurantSingle />}></Route>
      <Route path="foodmenu" element={<FoodMenu />}></Route>

      <Route path="/meal" element={<Meal />}></Route>
      <Route path="/meals" element={<SigleUserPage />}></Route>

      {/* prakash */}
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/recipes/:recipeId" element={<SignleRecipePage />}></Route>
      <Route path="/directory" element={<Directory />}></Route>
      <Route path="/mobileapp" element={<Mobilapp />}></Route>
      <Route
        path="/directory/:directoryId"
        element={<SingleDirectory />}
      ></Route>
      <Route path="/directory/:nearbyshope" element={<NearbyShops />}></Route>
      <Route path="/help" element={<Help />}></Route>

      {/* pooja */}
      <Route path="/article" element={<Article />}></Route>
      <Route path="/article/:id" element={<SingleArticlePage />}></Route>
      <Route path="/kindmoments" element={<Kind />}></Route>
      <Route path="/kindmoments/:id" element={<SingleKindPage />}></Route>

      {/* suraj */}
      <Route path="/AddRacipes" element={<AddRacipes />}></Route>

      <Route path="/addShop" element={<AddShop />}></Route>
    </Routes>
  );
}

export { AllRoutes };
