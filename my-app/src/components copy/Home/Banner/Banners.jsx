import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Banners.css";
import { Box, Img, SimpleGrid } from "@chakra-ui/react";
const Banners = () => {
  const data = [
    "https://www.kindmeal.my/photos/deal/7/719-5142-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/711-4936-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/725-5225-m.jpg",
    "https://www.kindmeal.my/photos/deal/2/271-519-m.jpg",
    "https://www.kindmeal.my/photos/deal/3/369-3697-m.jpg",
  ];

  return (
    <Box mt="10px">
      <SimpleGrid columns={[2, 3, 4, 5]} gap={7}>
        {data.map((items, index) => {
          return (
            <Box
              borderRadius="20px"
              border="1px solid black"
              key={index}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              className="images"
            >
              <Img borderRadius="20px" src={items} alt="" />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Banners;
