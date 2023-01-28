import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Show,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const Signup1 = () => {
  const toast = useToast();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [show, setShow] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://naughty-pear-bream.cyclic.app/user/register",
        formState
      );

      toast({
        title: res.data.error == false ? "success" : "error",
        description: res.data.msg,
        status: res.data.error == true ? "error" : "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => setShow(!show);

  return (
    <Flex
      px="6"
      gap="3rem"
      mx="auto"
      w={{ base: "100%", lg: "60%" }}
      paddingTop={"200px"}
    >
      <Show above="md">
        <Box>
          <Box
            height={"200px"}
            border={"1px solid black"}
            p="30px"
            rowGap={"30px"}
            borderRadius="10px"
          >
            <Image
              src="https://www.kindmeal.my/images/join_normal.png"
              alt="sign up"
            />
          </Box>
          <br />
          <Box
            height={"250px"}
            border={"1px solid black"}
            p="30px"
            borderRadius="10px"
          >
            <Image
              src="https://www.kindmeal.my/images/join_shop.png"
              alt="sign up"
            />
          </Box>
        </Box>
      </Show>
      <Box w={{ base: "100%", md: "40%", lg: "55%" }}>
        <Heading>Food Lover? Sign Up Now or Login</Heading>
        <p>
          KindMeal is a fun, exciting and cool new way for you to show your
          compassion towards animals. We collaborate with kind restaurants and
          cafes across the nation to bring you delicious meat-free foods that
          will not only help save precious animal lives, but improve your health
          and save your money at the same time!
        </p>
        <VStack w="100%" rowGap="10rem">
          <VStack w="100%">
            <form
              style={{
                width: "100%",
                rowGap: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              onSubmit={handleSubmit}
            >
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter  Your Name Here"
                    name="name"
                    variant="flushed"
                    focusBorderColor="#f16521"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter  Your Mobile No Here"
                    name="mobile"
                    variant="flushed"
                    focusBorderColor="#f16521"
                    value={formState.mobile}
                    onChange={(e) =>
                      setFormState({ ...formState, mobile: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="email"
                    placeholder="Enter  Your Email Here"
                    variant="flushed"
                    focusBorderColor="#f16521"
                    name="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter  Your password Here"
                    variant="flushed"
                    focusBorderColor="#f16521"
                    name="password"
                    value={formState.password}
                    onChange={(e) =>
                      setFormState({ ...formState, password: e.target.value })
                    }
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      color="#f16521"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                width="100%"
                type="submit"
                variant="solid"
                _hover={{}}
                bg="#f16521"
                color={"white"}
              >
                Yeah! I Want Credits
              </Button>
            </form>
            <Box>
              By registering you agree to our
              <Link alignSelf="start" href="#" textDecoration="underline">
                Terms & Conditions
              </Link>
            </Box>
          </VStack>
          <VStack w="100%">
            <Box w="100%">
              <Button
                w="100%"
                color="#f16521"
                fontSize="0.9rem"
                variant="outline"
              >
                <NavLink to="/login1">Existing User? Log In</NavLink>
              </Button>
            </Box>
            <Box w="100%">
              <Button
                display="flex"
                w="100%"
                rightIcon={
                  <Image
                    w="40%"
                    h="100%"
                    src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                    alt="logo"
                  />
                }
                fontSize="0.9rem"
                variant="unstyled"
              >
                OR Continue with
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Signup1;
