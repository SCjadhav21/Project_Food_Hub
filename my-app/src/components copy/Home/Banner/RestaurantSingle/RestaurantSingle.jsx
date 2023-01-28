import { Box, SimpleGrid, Text } from "@chakra-ui/react";
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
    <Box p="0px 8%" pt={["90px", " ", "160px"]}>
      <Box p="10px" style={{ backgroundColor: "red" }}>
        <Link to="/">Go Back</Link>
      </Box>
      <Box pt="20px" className="main">
        <div>
          <img
            style={{ height: "250px" }}
            src="https://www.kindmeal.my/photos/shop/5/583-c.jpg"
            alt=""
          />
        </div>
        <Box
          // className="single"
          p="10px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          justifyItems="center"
          mb="20px"
          alignItems="center"
        >
          <img
            style={{ width: "60%", height: "350px" }}
            src={location.state.img}
            alt=""
          />
          <Text fontSize="20px" fontWeight="bold">
            {" "}
            {location.state.title}
          </Text>
        </Box>
        <SimpleGrid gap={10} columns={[2, null, 3]}>
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
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default RestaurantSingle;
