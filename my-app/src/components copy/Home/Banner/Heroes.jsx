import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./News.css";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
const Heroes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/hero");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <Box p="20px" className="new">
        <div className="lives">
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            Amazing Superheroes
          </h1>
          <h2 id="on">
            <a href="">Latest Buzz</a>
            <a href="">Lifestyles Ambassadors</a>
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
                <div className="img">
                  <Img
                    borderRadius="20px 20px 0px 0px"
                    src={items.url}
                    alt=""
                  />
                </div>
                <Text p="5px" align={"center"}>
                  {items.title}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Heroes;
