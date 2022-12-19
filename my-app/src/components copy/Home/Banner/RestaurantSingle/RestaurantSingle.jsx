import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RestaurantSingle.css";

const RestaurantSingle = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        "https://reduxapi.onrender.com/restaruntsingle"
      );
      setData(res.data);
    };
    getData();
  });

  return (
    <>
      <Box p="0px 8%" pt={["60px", " ", "160px"]} className="main">
        <div>
          <img
            style={{ height: "250px" }}
            src="https://www.kindmeal.my/photos/shop/5/583-c.jpg"
            alt=""
          />
        </div>
        <div className="single">
          <img
            style={{ width: "60%", height: "350px" }}
            src={location.state.img}
            alt=""
          />
          <h4 style={{ marginLeft: "350px" }}>{location.state.title}</h4>
        </div>
        <div className="restro">
          {data.map((items, title, title2) => {
            return (
              <div>
                <div className="mains">
                  <img src={items.url} alt="single" />
                </div>
                <h4>{items.title}</h4>
                <p>{items.title2}</p>
              </div>
            );
          })}
          <div style={{ backgroundColor: "red" }}>
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </Box>
    </>
  );
};

export default RestaurantSingle;
