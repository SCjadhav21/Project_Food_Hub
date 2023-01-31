import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../style/Directory.css";
import axios from "axios";
import RecipesAndDirectoryPagination from "../../Components/RecipesAndDirectoryPagination";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const getData = (url) => {
  return axios.get(url);
};
const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};
export default function Directory() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState();

  const [que, setQue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    getData(
      `https://mock-server-app-pzg9.onrender.com/kindmealDirectory?_page=${page}&_limit=10&q=${que}`
    ).then((res) => setArr(res.data));
  }, [que, page]);
  useEffect(() => {
    console.log(que);
    if (que.length > 0) {
      setSearchParams({ page, que });
    } else {
      setSearchParams({ page });
    }
  }, [page, que]);

  const handelsearchrecipes = () => {
    setQue(text);
  };
  const handelSearchrecipes1 = (text1) => {
    setQue(text1);
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
        <select onChange={(e) => handelSearchrecipes1(e.target.value)}>
          <option value="">All Calegories</option>
          <option value="Ador Cafe">Ador Cafe</option>
          <option value="Alam N-Ion">Alam N-Ion</option>
          <option value="TBeyond Veggie - TTDI Branch">
            Beyond Veggie - TTDI Branch
          </option>
          <option value="Boye Vegetarian Cafe">Boye Vegetarian Cafe</option>
          <option value="Cabana Acai Bar">Cabana Acai Bar</option>
          <option value="Alice Kitchen By Yishensu">
            Alice Kitchen By Yishensu
          </option>
        </select>

        <button onClick={handelsearchrecipes}>Search Shops</button>

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
      {/* <div className="extrasearch">
        <p>Vegetarian Directory</p>
        <p>Featured Restaurants</p>
        <p>Food Menu</p>
        <p>Food Map</p>
      </div> */}
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
