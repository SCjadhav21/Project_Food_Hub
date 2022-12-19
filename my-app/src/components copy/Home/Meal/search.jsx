import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  // let dispatch=useDispatch();
  const [state, setstate] = useState("");
  const handleChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <div id="inputtags">
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search Shop "
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="" id="">
          <option value="All Categories">All Categories</option>
          <option value="Pasta">Pasta</option>
          <option Value="Burger">Burger</option>
          <option value="Break Fast">Break Fast</option>
          <option Value="Salad">Salad</option>
          <option value="Bakery">Bakery</option>
          <option value="Tea & Dessert">Tea & Dessert</option>
          <option value="Local & Delights">Local & Delights</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
      <div>
        <select name="" id="">
          <option value="">All Locations</option>
          <option value="">Kuala Lumpur</option>
          <option value="">Petaling Jaya</option>
          <option value="">Ampang</option>
          <option value="">Bangsar</option>
          <option value="">Bangsar South</option>
          <option value="">Banting</option>
          <option value="">Bukit Bintang</option>
          <option value="">Cheras</option>
          <option value="">Damansara Heights</option>
        </select>
      </div>
      <div>
        <button
          style={{ backgroundColor: "green", width: "130px" }}
          className="Deal"
        >
          Search Deal
        </button>
      </div>
      <div>
        <button className="browse">
          <Link to="/directory">Browser Restaurant</Link>
        </button>
      </div>
    </div>
  );
};

export default Search;
