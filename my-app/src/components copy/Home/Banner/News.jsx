import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./News.css";
import { Box, Img, Link, SimpleGrid, Text } from "@chakra-ui/react";
const News = () => {
  const data = [
    {
      id: 1,
      url: "https://www.kindmeal.my/photos/article/20/20346-l.jpg",
      title: "Amazing Wildlife Wins",
    },
    {
      id: 2,
      url: "https://www.kindmeal.my/photos/article/20/20350-l.jpg",
      title: "Farm Animals",
    },
    {
      id: 3,
      url: "https://www.kindmeal.my/photos/article/20/20333-l.jpg",
      title: "Sick Baby Cow",
    },
    {
      id: 4,
      url: "https://www.kindmeal.my/photos/article/20/20330-l.jpg",
      title: "The Best Air Fryre",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1-nk-jYaysldSsihdkZWO-qI9OgfhjIi1g&usqp=CAU",
      title: "Ladybug Wings",
    },
  ];

  return (
    <>
      <Box p="10px 30px" className="new">
        <div className="lives">
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            Latest News & Videos
          </h1>
          <h2 id="on">
            <a href="/kindmoments">Save Lives with your blogs</a>
            <a href="/article">News and Articles</a>
            <a href="">Follow on Facebook</a>
          </h2>
        </div>
        <SimpleGrid columns={[1, 3, 4, 5]} gap={7}>
          {data.map((items, index) => {
            return (
              <Link href="/article" w="full" h="full" ml={-2}>
                <Box
                  h="full"
                  borderRadius="20px"
                  alignItems="center"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  key={index}
                >
                  {" "}
                  <div className="img">
                    <Img
                      borderRadius="20px 20px 0px 0px"
                      src={items.url}
                      alt=""
                    />
                  </div>
                  <Text align="center" p="5px" alignSelf="center" w="100%">
                    {items.title}
                  </Text>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default News;
