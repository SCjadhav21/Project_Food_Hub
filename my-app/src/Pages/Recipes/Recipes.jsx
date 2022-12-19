import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Recipes.css";
import { AiOutlineClockCircle, AiTwotoneMessage } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import RecipesAndDirectoryPagination from "../../Components/RecipesAndDirectoryPagination";
import { Link } from "react-router-dom";

const getData = (url) => {
  return axios.get(url);
};

export default function Recipes() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);
  const [page, setpage] = useState(1);

  useEffect(() => {
    getData(
      `https://mock-server-app-pzg9.onrender.com/kindmealRecipes?_page=${page}&_limit=12&q=${que}`
    ).then((res) => setArr(res.data));
  }, [que, page]);


  const handelsearchrecipes = () => {
    setQue(text);
  };

  return (
    <>
      <div className="speacer">Speacer</div>
      <div className="recipesintro">
        <p>
          Food & Drinks{" "}
          <span style={{ color: "#888888" }}>| Yummy Meat-Free Recipes</span>
        </p>
        <p>
          Want to craft your own creative meat-free meals? Get inspiration from
          other food lovers, or share your own masterpieces!
        </p>
        <p>Transform into a master chef now.</p>
      </div>
      <div className="searchoptions">
        <input
          type="text"
          placeholder="Search Recipe or User Name"
          onChange={(e) => setText(e.target.value)}
        />
        <select onChange={(e) => setText(e.target.value)}>
          <option value="">All Calegories</option>
          <option value="appetizers">Appetizers</option>
          <option value="beverages">Beverages</option>
          <option value="breakfast">Breakfast</option>
          <option value="breads">Breads</option>
          <option value="condiments">Condiments</option>
          <option value="desserts">Desserts</option>
          <option value="snacks">Snacks</option>
          <option value="main Dishes">Main Dishes</option>
          <option value="salads">Salads</option>
          <option value="Side Dishes">Side Dishes</option>
          <option value="Soups">Soups</option>
        </select>
        <button onClick={handelsearchrecipes}>Search Recipes</button>
        <button>
          <Link to="/AddRacipes">Share My Recipe </Link>
        </button>
      </div>
      <div className="searchbtnsRecipe">
        <p>All Categories</p>
        <p>Appetizers</p>
        <p>Beverages</p>
        <p>Breakfast</p>
        <p>Breads</p>
        <p>Condiments</p>
        <p>Desserts</p>
        <p>Snacks</p>
        <p>Main Dishes</p>
        <p>Salads</p>
        <p>Side Dishes</p>
        <p>Soups</p>
      </div>
      <RecipesAndDirectoryPagination
        total={4}
        current={page}
        onchange={(value) => setpage(value)}
      />
      <div className="recipecontainer">
        {arr.map((ele) => (
          <div key={ele.id} className="recipecard">
            <div>
              <div>
                <img src={ele.logo} alt="" />
                <p>{ele.channel}</p>
              </div>
              <div>
                <button >
                  <Link to={`/recipes/${ele.id}`}>View</Link>
                </button>
              </div>
            </div>
            <div>
              <img src={ele.img} alt="" />
              <p>{ele.name}</p>
            </div>
            <div>
              <div>
                <p>
                  <AiOutlineClockCircle color="#cccccc" /> {ele.time}
                </p>
              </div>
              <div>
                <p>
                  <BsFillHeartFill color="#cccccc" /> 0
                </p>
                <p>
                  <AiTwotoneMessage color="#cccccc" /> 0
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RecipesAndDirectoryPagination
        total={4}
        current={page}
        onchange={(value) => setpage(value)}
      />
    </>
  );
}
