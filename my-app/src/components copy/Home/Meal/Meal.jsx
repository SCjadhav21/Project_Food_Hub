import React from "react";
import Search from "./search";
import "./Meal.css";
import Meals from "./Meals";
import { Box } from "@chakra-ui/react";

const Meal = () => {
  return (
    <Box pt={["60px", " ", "160px"]}>
      <div className="meal">
        <div className="type">
          <h2 style={{ fontSize: "30px" }}>
            "pizza" In Meat-Free Deals | Restaurants In Ampang{" "}
          </h2>
          <p>
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </p>
          <br />
          <p>
            Download our mobile app now to easily get coupons and start dining
            in a few seconds. Effortlessly save lives, health, environment and
            money now!
          </p>
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="jane">
        <img src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" />
      </div>
      <Meals />
    </Box>
  );
};

export default Meal;
