import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Img } from "@chakra-ui/react";

const Banner = () => {
  const [data0, setData0] = useState(
    "https://www.kindmeal.my/photos/shop/5/546-c.jpg"
  );
  let data = [
    "https://www.kindmeal.my/photos/item/0/486-5993-l.jpg",
    "https://www.kindmeal.my/photos/deal/7/719-5142-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/725-5225-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/711-4936-m.jpg",
    "https://www.kindmeal.my/photos/deal/2/271-519-m.jpg",
    "https://www.kindmeal.my/photos/deal/3/369-3697-m.jpg",
    "https://www.kindmeal.my/photos/deal/7/707-4819-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/546-c.jpg",
  ];
  useEffect(() => {
    let a = -1;
    setInterval(() => {
      if (a === 7) {
        a = 0;
      } else {
        a = a + 1;
      }

      setData0(data[a]);
    }, 3000);
  }, []);
  return (
    <>
      <Box className="banner">
        <Img
          borderRadius="20px"
          border="1px solid black"
          style={{ width: "100%", height: "300px" }}
          src={data0}
          alt="banner"
        />
      </Box>
    </>
  );
};

export default Banner;
