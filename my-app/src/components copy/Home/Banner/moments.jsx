import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./moments.css";
import { NavLink } from "react-router-dom";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";

const Moments = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/moments");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <Box className="moment" p="20px" pb="auto">
        <div className="live">
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            Yummyliciou Moments
          </h1>
          <h2 id="hot">
            <a href="">Secret Recipes</a>
            <a href="">Member Hot Picks</a>
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
                className="imgs"
              >
                <NavLink
                  state={{
                    img: items.url,
                    title: items.title,
                    add: items.add,
                  }}
                  to="/Moments"
                >
                  <Img
                    // borderRadius="20px 20px 0px 0px"
                    src={items.url}
                    alt=""
                  />
                </NavLink>
                <Text align="center" color="black" p="0px 5px">
                  {items.title}
                </Text>
                <Text align="center" p="0px 5px" pb="5px">
                  {items.add}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Moments;
