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
const AddRacipes = () => {
  let [input, setInput] = useState("");
  let [idData, setIdData] = useState(Date.now());

  let [racipeData, setRacipeData] = useState({
    id: idData,
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
    bannerII: "",
  });

  let j = input.trim().split("\n");
  let url = "https://prakash-vercel-database.vercel.app/kindmealRecipes";
  useEffect(() => {
    axios.get(url).then((res) => setIdData(res.data.length + 1));
  }, []);

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
                <Input width="70%" placeholder="Channel name" />
              </FormControl>
              <FormControl
                isRequired
                display="flex"
                justifyContent="space-between"
              >
                <FormLabel>Recipe Image </FormLabel>
                <Input type="url" width="70%" placeholder="Recipe Image Url" />
              </FormControl>
              <FormControl
                justifyContent="space-between"
                isRequired
                display="flex"
              >
                <FormLabel>Servings</FormLabel>
                <Input
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
                <FormLabel>Channel logo</FormLabel>
                <Input type="url" width="70%" placeholder="Channel logo url" />
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
                      onChange={(e) => setInput(e.target.value)}
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
                      onChange={(e) => setInput(e.target.value)}
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
            <Button w="50%" color="#fff" bgColor="#F53838">
              Create Racipe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddRacipes;
