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
import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login1 = () => {
  const toast = useToast();
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });
  const [show, setShow] = React.useState(false);
  const { auth, handleLogin } = React.useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await handleLogin(formState);
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
//   if (auth.isAuth) {
//     return <Navigate to="/" />;
//   }
  return (
    <Flex
      px="6"
      gap="3rem"
      w={{ base: "100%", lg: "60%" }}
      mx="auto"
      pt={"250px"}
    >
      <Show above="md">
        <Box
          w="45%"
          background="url(https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg)  bottom no-repeat #fffdf6"
        >
          <Heading color="#f16521" as="h4" fontSize="1.063rem">
            You Will Be Able To Track Your Order, Use Wishlist & More.
          </Heading>
        </Box>
      </Show>
      <Box w={{ base: "100%", md: "40%", lg: "55%" }}>
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
                    type="email"
                    placeholder="Enter  Your Email Here"
                    variant="flushed"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    focusBorderColor="#f16521"
                  />
                  <InputRightElement width="7rem">
                    <Button h="1.75rem" size="xs">
                      LOGIN USING OTP
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter  Your password Here"
                    variant="flushed"
                    value={formState.password}
                    onChange={(e) =>
                      setFormState({ ...formState, password: e.target.value })
                    }
                    focusBorderColor="#f16521"
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
                Login
              </Button>
            </form>
            <Link
              alignSelf="start"
              href="#"
              textDecoration="underline"
              color="#f16521"
            >
              Forgot Password
            </Link>
          </VStack>
          <VStack w="100%">
            <Box w="100%">
              <Button
                w="100%"
                color="#f16521"
                fontSize="0.9rem"
                variant="outline"
              >
                <NavLink to="/signup1">New to Kind Meal?Register Here</NavLink>
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

export default Login1;
