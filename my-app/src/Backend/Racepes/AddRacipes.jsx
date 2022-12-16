import React from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Link,
  Text,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
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
  ingredients: [],
  directions: [],
  morepics: [],
  bannerII: "https://www.kindmeal.my/images/banner_recipe.jpg",
};
const AddRacipes = () => {
  let [input, setInput] = useState("");
  let [idData, setIdData] = useState(Date.now());
  console.log(idData);
  let [racipeData, setRacipeData] = useState(IntialData);
  console.log(racipeData);

  let j = input.trim().split("\n");
  let url = "https://prakash-vercel-database.vercel.app/kindmealRecipes";
  useEffect(() => {
    axios.get(url).then((res) => setIdData(res.data.length + 1));
  }, []);

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
    setRacipeData({ ...racipeData, [name]: value });
  };

  const handleSubmit = () => {
    setRacipeData({ ...racipeData, id: idData });
    setRacipeData({ ...racipeData, banner: racipeData.logo });
    console.log(racipeData, idData);
  };

  return (
    <Box
      mt="30px"
      w="100%"
      p="0px 8%"
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
            <Link>Manage My Recipes</Link>
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
            <Link>◀ Return To My Recipes</Link>
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
                <FormLabel>Recipe Name</FormLabel>
                <Input
                  name="name"
                  onChange={handleChange}
                  width="70%"
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
                  placeholder="Channel name"
                />
              </FormControl>
              <FormControl
                isRequired
                display="flex"
                justifyContent="space-between"
              >
                <FormLabel>Recipe Image </FormLabel>
                <Input
                  name="img"
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
                <FormLabel>Servings</FormLabel>
                <Input
                  name="servings"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  placeholder="Quantity of items produced, i.e. '5 Cupcakes'"
                />
              </FormControl>
              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel>Time Taken</FormLabel>
                <Input
                  name="time"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  placeholder="Time to make racepi in min"
                />
              </FormControl>
              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel>Channel logo</FormLabel>
                <Input
                  name="logo"
                  onChange={handleChange}
                  type="url"
                  width="70%"
                  placeholder="Channel logo url"
                />
              </FormControl>
              <FormControl
                display="flex"
                justifyContent="space-between"
                isRequired
              >
                <FormLabel>Ingredients</FormLabel>
                <Box w="70%">
                  <Text>
                    One item per line{" "}
                    <Textarea
                      name="ingredients"
                      onChange={handleChange}
                      height=" 150px"
                      borderRadius="10px"
                      type="text"
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
                <FormLabel>Directions</FormLabel>
                <Box w="70%">
                  <Text>
                    One step per line{" "}
                    <Textarea
                      name="directions"
                      onChange={handleChange}
                      height=" 150px"
                      borderRadius="10px"
                      type="text"
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
                <FormLabel>Add more pics</FormLabel>

                <Box w="70%">
                  <Text>
                    One Image per line{" "}
                    <Textarea
                      name="morepics"
                      onChange={handleChange}
                      height=" 150px"
                      borderRadius="10px"
                      type="url"
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
