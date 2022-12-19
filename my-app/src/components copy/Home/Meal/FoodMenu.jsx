import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./FoodMenu.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const FoodMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/foodmenu");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <Box p="0px 8%" pt={["60px", " ", "160px"]}>
        <div className="foodmenu">
          {data.map((items) => {
            return (
              <div className="food">
                <img src={items.url} alt="" />
                <h4>{items.title}</h4>
              </div>
            );
          })}
        </div>
      </Box>
      <Link to="/">Go Back</Link>
    </>
  );
};

export default FoodMenu;
