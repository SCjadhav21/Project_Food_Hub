import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Directory.css";
import axios from "axios";
import RecipesAndDirectoryPagination from "../../Components/RecipesAndDirectoryPagination";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Directory() {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  useEffect(() => {
    axios
      .get(
        `https://mock-server-app-pzg9.onrender.com/kindmealDirectory?_page=${page}&_limit=10&q=${que}`
      )
      .then((res) => setArr(res.data));
  }, [page, que]);

  const searchDirectory = () => {
    setQue(text);
    console.log(arr);
  };

  return (
    <>
      <div className="speacer">Speacer</div>
      <div className="directoryintro">
        <h1>Vegetarian Restaurants In Malaysia</h1>
        <p>
          Looking for even more delicious choices? Explore hundreds of
          vegetarian and vegan restaurants in Malaysia.
        </p>
        <p>
          Are you a restaurant or cafe owner? Boost your business with an
          attractive KindMeal profile and deals for FREE. Find out more or
          contact us now.
        </p>
      </div>
      <div className="searchdirectory">
        <input
          type="text"
          placeholder="Search Shop Name"
          onChange={(e) => setText(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setText(e.target.value)}>
          <option value="">All Shops In Malaysia</option>
          <option value="Selangor">Selangor</option>
          <option value="KualaLumpur">Kuala Lumpur</option>
          <option value="Johor">Johor</option>
          <option value="Penang">Penang</option>
          <option value="Kedah">Kedah</option>
          <option value="Melaka">Melaka</option>
          <option value="NegeriSembilan">Negeri Sembilan</option>
          <option value="Pahang">Pahang</option>
          <option value="Perak">Perak</option>
          <option value="Terengganu">Terengganu</option>
        </select>
        <button onClick={searchDirectory}>Search Shops</button>

        <Link to="/addShop">
          {" "}
          <Button
            style={{
              color: "white",
              padding: "0px 20px",
              borderRadius: "5px",
              fontWeight: 500,
              backgroundColor: "#04be5a",
            }}
          >
            Add a Shop{" "}
          </Button>
        </Link>
      </div>
      <div className="extrasearch">
        <p>Vegetarian Directory</p>
        <p>Featured Restaurants</p>
        <p>Food Menu</p>
        <p>Food Map</p>
      </div>
      <RecipesAndDirectoryPagination
        total={4}
        current={page}
        onchange={(value) => setPage(value)}
      />
      <div className="directorycontainer">
        {arr &&
          arr.map((ele) => (
            <div key={ele.id}>
              <h1>{ele.name}</h1>
              <p>{ele.aboutsort}</p>
              <p className="directoryheading">Address</p>
              <p>{ele.address}</p>
              <p className="directoryheading">Phone</p>
              <p>{ele.phone}</p>
              <p className="directoryheading">Opening Hours</p>
              <p>{ele.opening}</p>
              <img
                src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
                alt=""
              />
              <div>
                <Link to={`/directory/${ele.id}`}>Visit Website </Link>
                <a href={ele.directions} target="_blank">
                  {" "}
                  Get Directions
                </a>
                <Link to={`/directory/${ele.id}`}>Nearby Shops</Link>
              </div>
            </div>
          ))}
      </div>
      <RecipesAndDirectoryPagination
        total={4}
        current={page}
        onchange={(value) => setPage(value)}
      />
    </>
  );
}
