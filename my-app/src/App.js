import React from "react";
import Meal from "./components copy/Home/Meal/Meal";
import Navbar from "./Components/Navbar";

import Directory from "./Pages/Directory/Directory";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
