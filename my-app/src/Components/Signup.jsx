import {
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const SignUp = () => {
  let [form, setForm] = React.useState({ email: "", password: "" });
  const [signup, setSignup] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function getData() {
    if (form.email !== "" && form.password !== "") {
      setSignup(true);
      return axios.post(
        "https://pacific-refuge-88537.herokuapp.com/api/signup",
        {
          email: form.email,
          password: form.password,
        }
      );
    } else {
      alert("please fill all data");
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  if (signup) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <>
        <Button
          style={{ marginLeft: "16px" }}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          Sign Up
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>
              <Img
                src="https://www.kindmeal.my/images/logo-kindmeal.png"
                alt="logo"
              />
              <Text
                style={{
                  fontSize: "25px",
                  fontFamily: "'Roboto', Arial",
                  color: "gray",
                  marginLeft: "20px",
                }}
              >
                Join KindMeal For FREE Now
              </Text>
              <Text style={{ fontSize: "15px", marginLeft: "27px" }}>
                Please select the type of membership to proceed
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Box w="100%" display="flex" justifyContent="center">
                  <Flex direction="column" justifyContent="center">
                    <Text m="10px">CREATE ACCOUNT</Text>

                    <Text marginLeft="10px" alignSelf="flex-start" mb="8px">
                      Email :
                    </Text>
                    <Input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      border="2px solid #000000"
                      placeholder="Enter Email"
                      m="0px 10px 10px 10px"
                    />
                    <Text marginLeft="10px" alignSelf="flex-start" mb="8px">
                      Password :
                    </Text>
                    <InputGroup w="full" m="0px 10px 10px 10px">
                      <Input
                        name="password"
                        onChange={handleChange}
                        border="2px solid #000000"
                        placeholder="Enter Password"
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Button
                      onClick={getData}
                      bg="black"
                      color="#FFF"
                      m="10px"
                      w="full"
                    >
                      Continue
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default SignUp;
