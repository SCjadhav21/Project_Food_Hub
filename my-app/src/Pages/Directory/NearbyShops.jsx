import React from "react";
import { useEffect } from "react";
import "./Directory.css";
import axios from "axios";
import { useState } from "react";

export default function NearbyShops() {
  const [obj, setObj] = useState({});
  useEffect(() => {
    axios
      .get(`https://prakash-vercel-database.vercel.app/kindmealDirectory/${1}`)
      .then((res) => setObj(res.data));
  }, []);
  return (
    <div>
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
        <input type="text" placeholder="Search Shop Name" />
        <select name="" id="">
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
        <button>Search Shops</button>
        <button>Add a Shop</button>
      </div>
      <div className="extrasearch">
        <p>Vegetarian Directory</p>
        <p>Featured Restaurants</p>
        <p>Food Menu</p>
        <p>Food Map</p>
      </div>
      <div className="nearbyshopcontainer">
        <div>
          <p>{obj.name}</p>
          <p>{obj.aboutlong}</p>
          <p className="nearbyshopHeading">Address</p>
          <p>{obj.address}</p>
          <p className="nearbyshopHeading">Phone</p>
          <p>{obj.phone}</p>
          <p className="nearbyshopHeading">Opening Hours</p>
          <p>{obj.opening}</p>
          <img
            src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
            alt=""
          />
          <br />
          <button>Get KindMeal Deals</button>
          <button>
            <a href={obj.directions} target="_blank">
              Get Directions
            </a>
          </button>
        </div>
        <div>
          <p>Featured Deals</p>
          {obj.images &&
            obj.images.map((ele) => <img key={ele} src={ele} alt="" />)}
        </div>
      </div>
    </div>
  );
}
