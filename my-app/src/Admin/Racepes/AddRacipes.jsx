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

// import { Link } from "react-router-dom";
let IntialData = {
  id: Date.now(),
  channel: "",
  name: "",
  followers: Math.floor(Math.random() * 50),
  img: "",
  logo: "",
  banner: "",
  time: "",
  servings: "",
  rating: Math.floor(Math.random() * 5),
  ingredients: "",
  directions: "",
  morepics: "",
  bannerII: "https://www.kindmeal.my/images/banner_recipe.jpg",
};
const AddRacipes = () => {
  let [racipeData, setRacipeData] = useState(IntialData);

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (name === "directions") {
      value = value.trim().split("\n");
    }
    if (name === "ingredients") {
      value = value.trim().split("\n");
    }
    if (name === "morepics") {
      value = value.trim().split("\n");
    }
    if (name === "logo") {
      setRacipeData({ ...racipeData, banner: value });
    }
    setRacipeData({ ...racipeData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      racipeData.name &&
      racipeData.channel &&
      racipeData.img &&
      racipeData.servings &&
      racipeData.time &&
      racipeData.logo &&
      racipeData.channel &&
      racipeData.img &&
      racipeData.ingredients &&
      racipeData.directions &&
      racipeData.morepics
    ) {
      axios
        .post("https://mock-server-app-pzg9.onrender.com/kindmealRecipes", {
          ...racipeData,
        })

        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <Box
      p="0px 8%"
      pt={["60px", " ", "160px"]}
      w="100%"
      display="flex"
      gap={5}
      flexDirection={["column", "", "row"]}
    >
      <Box w={["100%", "", "30%"]} display="flex" justifyContent="center">
        <Box
          alignItems="center"
          w={["50%", "", "80%"]}
          borderRadius="10px 10px 0px 0px"
        >
          <Box
            h="35px"
            borderRadius="10px 10px 0px 0px"
            display="grid"
            alignItems="center"
            fontWeight="bold"
            textAlign="center"
            bgColor="red"
            color="#fff"
            border="1px solid red"
          >
            Member Function
          </Box>
          <Box
            border="1px solid black"
            p="0 10% 3%"
            flexDirection="column"
            display="flex"
          >
            <Link pt="8px">Manage My Coupons</Link>
            <Link href="/recipes">Manage My Recipes</Link>
            <Link pt="8px">Update Profile</Link>
            <Link>Account Settings</Link>

            <Link pt="8px" pb="5px">
              Logout
            </Link>
          </Box>
        </Box>
      </Box>
      <Box pl="20px" w={["100%", "", "70%"]}>
        <Box>
          <Box>
            <Text fontSize={28} fontWeight="semibold">
              Create New Recipe
            </Text>
          </Box>
          <Box mt="20px">
            <Text letterSpacing={0.5}>
              Share delicious recipes with food lovers to encourage creative
              meat-free dining. Please include sufficient details and directions
              so food lovers can accurately reproduce your masterpiece.
            </Text>
          </Box>
          <Box mt="20px" color="blue">
            <Link href="/recipes">◀ Return To My Recipes</Link>
          </Box>
        </Box>
        <Box mt="50px" p="0px 10px">
          <Box>
            <Text fontSize={25} fontWeight="normal">
              Recipe Details
            </Text>
          </Box>
          <Box mt="20px">
            <Box
              gap={5}
              display="grid"
              justifyItems="center"
              alignItems="center"
            >
              <FormControl
                display="flex"
                justifyContent="space-between"
                isRequired
              >
                <FormLabel w="30%">Recipe Name</FormLabel>
                <Input
                  name="name"
                  onChange={handleChange}
                  width="70%"
                  value={racipeData.name}
                  placeholder="Recipe name"
                  justifyContent="space-between"
                />
              </FormControl>
              <FormControl
                display="flex"
                justifyContent="space-between"
                isRequired
              >
                <FormLabel>Channel name</FormLabel>
                <Input
                  name="channel"
                  onChange={handleChange}
                  width="70%"
                  value={racipeData.channel}
                  placeholder="Channel name"
                />
              </FormControl>
              <FormControl
                isRequired
                display="flex"
                justifyContent="space-between"
              >
                <FormLabel w="30%">Recipe Image </FormLabel>
                <Input
                  name="img"
                  value={racipeData.img}
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  placeholder="Recipe Image Url"
                />
              </FormControl>
              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel w="30%">Servings</FormLabel>
                <Input
                  name="servings"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  value={racipeData.servings}
                  placeholder="Quantity of items produced, i.e. '5 Cupcakes'"
                />
              </FormControl>
              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel w="30%">Time Taken</FormLabel>
                <Input
                  name="time"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  value={racipeData.time}
                  placeholder="Time to make racepi in min"
                />
              </FormControl>
              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel w="30%">Channel logo</FormLabel>
                <Input
                  name="logo"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  value={racipeData.logo}
                  placeholder="Channel logo url"
                />
              </FormControl>
              <FormControl
                display="flex"
                justifyContent="space-between"
                isRequired
              >
                <FormLabel w="30%">Ingredients</FormLabel>
                <Box w="70%">
                  <Text>
                    One item per line{" "}
                    <Textarea
                      name="ingredients"
                      onChange={handleChange}
                      height=" 150px"
                      borderRadius="10px"
                      type="text"
                      // value={racipeData.ingredients}
                      placeholder="List the quantity & ingredients needed"
                    />
                    {/* <Input  /> */}
                  </Text>
                </Box>
              </FormControl>

              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel w="30%">Directions</FormLabel>
                <Box w="70%">
                  <Text>
                    One step per line{" "}
                    <Textarea
                      name="directions"
                      onChange={handleChange}
                      height=" 150px"
                      borderRadius="10px"
                      type="text"
                      // value={racipeData.directions}
                      placeholder="List the steps to create the meal"
                    />
                  </Text>
                </Box>
              </FormControl>
              <FormControl
                isRequired
                justifyContent="space-between"
                display="flex"
              >
                <FormLabel w="30%">Add more pics</FormLabel>

                <Box w="70%">
                  <Text>
                    One Image per line{" "}
                    <Textarea
                      type="url"
                      name="morepics"
                      onChange={handleChange}
                      height=" 150px"
                      borderRadius="10px"
                      // value={racipeData.morepics}
                      placeholder="Recipe Image Url"
                    />
                    {/* <Input  /> */}
                  </Text>
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box mt="30px" display="flex" w="full" justifyContent="flex-start">
            <Button
              onClick={handleSubmit}
              w="50%"
              color="#fff"
              bgColor="#F53838"
            >
              Create Racipe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddRacipes;
