import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Banners.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
const Banners = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/banners");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <Box mt="10px">
      <SimpleGrid columns={[2, 3, 4, 5]} gap={7}>
        {data.map((items) => {
          return (
            <Box
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              className="images"
            >
              <img src={items.url} alt="" />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Banners;
