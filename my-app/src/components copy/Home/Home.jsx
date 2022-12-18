import React from "react";
import Banner from "./Banner/Banner";
import Banners from "./Banner/Banners";
import Heroes from "./Banner/Heroes";
import Moments from "./Banner/moments";
import News from "./Banner/News";
import Restaurant from "./Banner/Restaurant";
import Meal from "./Meal/Meal";
import Meals from "./Meal/Meals";
import "./Home.css";
import Coupon from "./Banner/Coupon";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p="0px 8%" pt={["60px", " ", "160px"]} className="home">
      <Banner />
      <Banners />
      <News />
      <Moments />
      <Restaurant />
      <Heroes />
      <Coupon />
    </Box>
  );
};

export default Home;
