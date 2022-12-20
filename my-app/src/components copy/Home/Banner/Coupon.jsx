import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Coupon.css";
const Coupon = () => {
  const data = [
    {
      id: 1,
      url: "https://www.kindmeal.my/images/intro_deal.png",
      title: "Get Great Deals",
      forwordTo: "/directory",
      titles: "Show our FREE digital coupons to instantly enjoy exciting deals",
    },
    {
      id: 2,
      url: "https://www.kindmeal.my/images/intro_kindmoment.png",
      title: "Share KindMoments",
      forwordTo: "/kindmoments",
      titles: "Spread the joy by sharing your yummy dining moments",
    },
    {
      id: 3,
      url: "https://www.kindmeal.my/images/intro_menu.png",
      title: "Discover Delicious Food",
      forwordTo: "/recipes",
      titles: "Explore the latest exquisite offerings and creative menus",
    },
    {
      id: 4,
      url: "https://www.kindmeal.my/images/intro_friends.png",
      title: "Meet Food Lovers",
      forwordTo: "/kindmoments",
      titles: "Make new, compassionate friends and share great food tips",
    },
  ];

  return (
    <>
      <Box p="20px" className="finder">
        <div className="finders">
          <h2 style={{ fontSize: "30px" }}>
            Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
          </h2>
          <div className="brought">
            <h4 style={{ marginTop: "20px" }}>
              Brought to you by
              <img
                style={{ height: "50px", marginLeft: "120px" }}
                src="https://www.petfinder.my/images/logo-575x100.png"
              />
            </h4>
          </div>
          <h3 style={{ fontSize: "20px" }}>
            Instant coupon & dining. No upfront coupon payment, booking or
            printing.
          </h3>
        </div>
        <SimpleGrid columns={[2, "", 4]} mt="10px" gap={7}>
          {data.map((items, index) => {
            return (
              <Link pl="10px" width="full" to={items.forwordTo}>
                <Box
                  key={index}
                  h="full"
                  pb="10px"
                  borderRadius="20px"
                  alignItems="center"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  className="coupons"
                >
                  <Box className="anju">
                    <Img align="center" m="5px" src={items.url} alt="coupons" />
                    <Text p="5px" color={"black"}>
                      {items.title}
                    </Text>
                    <p>{items.titles}</p>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
        <div className="bottomm">
          <h3>
            Any restaurant or cafe can join KindMeal, vegetarian or not, as long
            as the deals and menu featured are meat-free. Enjoy a great
            meat-free dining experience. Easily save animal lives, health,
            environment and money now!
          </h3>
        </div>
        <div className="button">
          <button style={{ marginBottom: "30px" }}>
            <h1>Join KindMeal Now </h1>
          </button>
        </div>
      </Box>
      <div className="save">
        <img
          style={{ width: "100%" }}
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
        />
      </div>
    </>
  );
};

export default Coupon;
