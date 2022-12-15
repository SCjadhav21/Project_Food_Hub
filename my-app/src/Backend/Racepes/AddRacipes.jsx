import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AddRacipes = () => {
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
            <Link>Manage My Coupons</Link>
            <Link>Manage My Recipes</Link>
            <Link>Update Profile</Link>
            <Link>Account Settings</Link>

            <Link>Logout</Link>
          </Box>
        </Box>
      </Box>
      <Box pl="20px" border="2px solid green" w={["100%", "", "70%"]}>
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
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddRacipes;
