import React from "react";
import axios from "axios";
import {
  Box,
  Link,
  Text,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

let IntialData = {
  id: Date.now(),

  name: "",

  address: "",

  phone: "",

  email: "",

  opningHourse: "",
  webOrfp: "",
  about: "",
};
const AddShop = () => {
  let [shopData, setShopData] = useState(IntialData);

  let url = "https://mock-server-app-pzg9.onrender.com/kindmealRecipes";

  const handleChange = (e) => {
    let { value, name } = e.target;

    setShopData({ ...shopData, [name]: value });
  };

  const handleSubmit = () => {
    if (shopData.name && shopData.address) {
      //   axios
      //     .post("https://mock-server-app-pzg9.onrender.com/kindmealRecipes", {
      //       ...shopData,
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <Box w="100%">
      <Box
        display="flex"
        gap={5}
        justifyContent="center"
        justfyItems="center"
        // alignItems="center"

        flexDirection="column"
      >
        <Box bgColor="#F0F0F0" p="30px" pl="8%" w="100%">
          <Box>
            <Text fontSize={28} fontWeight="semibold">
              Add Vegetarian / Vegan Shop
            </Text>
          </Box>
          <Box mt="20px">
            <Text letterSpacing={0.5}>
              Know of a vegetarian or vegan shop not featured in our directory?
              List it now to share with more food lovers and encourage meat-free
              dining!
            </Text>
            <Text mt="10px">
              {" "}
              If you are the restaurant owner,{" "}
              <Link color="blue"> join KindMeal</Link> as a merchant now to
              feature your vegetarian promotions for FREE.
            </Text>
          </Box>
          <Box mt="20px" color="blue"></Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          mt="50px"
          p="0px 10px"
          alignItems="center"
          //   justfyItems="center"
          //   w={["90%", "", "70%"]}
        >
          <Box alignSelf="start" ml={["5%", "", "15%"]}>
            <Text fontSize={25} fontWeight="normal">
              Recipe Details
            </Text>
          </Box>
          <Box mt="20px" w={["90%", "", "70%"]}>
            <Box
              gap={5}
              display="flex"
              flexDirection="column"
              justifyItems="center"
              alignItems="center"
            >
              <FormControl
                display="flex"
                justifyContent="space-between"
                isRequired
              >
                <FormLabel w="30%">Shop Name</FormLabel>
                <Input
                  name="name"
                  onChange={handleChange}
                  width="70%"
                  value={shopData.name}
                  placeholder="Shop Name"
                  justifyContent="space-between"
                />
              </FormControl>

              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel w="30%">Shop Address </FormLabel>
                <Input
                  name="address"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  value={shopData.address}
                  placeholder="Full address, including zip, city & state"
                />
              </FormControl>
              <FormControl justifyContent="space-between" display="flex">
                <FormLabel w="30%">Phone (Optional)</FormLabel>
                <Input
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  width="70%"
                  value={shopData.phone}
                  placeholder="add phone"
                />
              </FormControl>
              <FormControl justifyContent="space-between" display="flex">
                <FormLabel w="30%">Shop Email (Optional)</FormLabel>
                <Input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  width="70%"
                  value={shopData.email}
                  placeholder="Enter Email "
                />
              </FormControl>
              <FormControl display="flex" justifyContent="space-between">
                <FormLabel w="30%">Opening Hours (Optional) </FormLabel>

                <Input
                  name="opningHourse"
                  onChange={handleChange}
                  type="email"
                  width="70%"
                  value={shopData.opningHourse}
                  placeholder="Example: Mon - Fri: 10am - 9pm; Sat - Sun: 10am - 10pm"
                />
              </FormControl>

              <FormControl justifyContent="space-between" display="flex">
                <FormLabel w="30%">
                  Website / Facebook Page (Optional)
                </FormLabel>

                <Input
                  name="webOrfp"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  value={shopData.webOrfp}
                  placeholder="Website url / Facebook Page id"
                />
              </FormControl>
              <FormControl justifyContent="space-between" display="flex">
                <FormLabel w="30%">About The Shop (Optional)</FormLabel>

                <Box w="70%">
                  <Textarea
                    type="url"
                    name="about"
                    onChange={handleChange}
                    height=" 150px"
                    borderRadius="10px"
                    value={shopData.about}
                    placeholder="Brief description of what the shop offers Submit Listing"
                  />
                  {/* <Input  /> */}
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box mt="30px" display="flex" w="full" justifyContent="flex-start">
            <Button
              onClick={handleSubmit}
              w="30%"
              alignSelf="center"
              m="auto"
              color="#fff"
              bgColor="#F53838"
            >
              Submit Listing
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddShop;
