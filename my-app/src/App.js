import logo from './logo.svg';
import './App.css';
import Home from './components copy/Home/Home';
import SigleUserPage from './components copy/Home/Meal/SigleUserPage';
import FoodMenu from './components copy/Home/Meal/FoodMenu';
import { Route, Routes } from 'react-router-dom';
import RestaurantSingle from './components copy/Home/Banner/RestaurantSingle/RestaurantSingle';

function App() {
  return (
    <div className="App">
      
     <Home/>
     {/* <FoodMenu /> */}
     
     <Routes>
      <Route path="/compo" element={<SigleUserPage/>} />
     <Route path="/rest" element={<RestaurantSingle />} />
     </Routes>
    </div>
  )
}

export default App;
