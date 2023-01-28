import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Restaurant.css";
import { NavLink } from "react-router-dom";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
const Restaurant = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/restaurants");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <Box p="20px" className="nam">
      <div className="livess">
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
          Discover Restaurants
        </h1>

        <h2 id="dir">
          <a href="/directory">Vegetarian Directory</a>
          <a href="/recipes">Restaurant Menu</a>
        </h2>
      </div>
      <SimpleGrid columns={[1, 3, 4, 5]} gap={7}>
        {data.map((items, index) => {
          return (
            <Box
              h="full"
              borderRadius="20px"
              alignItems="center"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              key={index}
            >
              <div className="imgg">
                <NavLink
                  state={{ img: items.url, title: items.title }}
                  to="/Moments"
                >
                  <img src={items.url} alt="" />
                </NavLink>
              </div>
              <Text p="5px" align="center">
                {items.title}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Restaurant;
