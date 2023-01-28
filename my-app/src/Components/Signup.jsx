import {
  Modal,
  ModalContent,
  ModalHeader,

  ModalCloseButton,
  useDisclosure,
  Button,Box,Image, Heading,Text

} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
      <>

      <Button mt={4} onClick={onOpen} marginTop={"1"} bg="transparent" color="black" >
        Signup
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent  margin="auto" textAlign="center" justifyConten="center" paddingBlock={5}>
          <ModalHeader>
              <Image src="https://www.kindmeal.my/images/logo-kindmeal.png"alt="logot"paddingLeft={120}/>
              <Heading size="lg">Join KindMeal For FREE Now</Heading>
              <Text>Please select the type of membership to proceed</Text>


              <Link to="/Signup1">
              <Box border="1px solid gray" borderRadius="15px" margin="40px" textAlign="left" display="flex" onClick={onClose} padding={6} columnGap="5" rowGap={5}>
                  <Box width="40%">
                      <Image src="https://www.kindmeal.my/images/join_normal.png" alt="ss"/>

                  </Box>
                  <Box width="60%">
                      <Heading size="md" marginBottom={2}>Food Lover</Heading>
                      <Text fontSize="17" color="gray">Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>

                  </Box>

              </Box>
              </Link>
              <Link to="/Help">
              <Box border="1px solid gray"textAlign="left" borderRadius="15px" margin="40px" display="flex" onClick={onClose} padding={6} columnGap="5">
                  <Box width="40%">
                      <Image src="https://www.kindmeal.my/images/join_shop.png" alt="ss"/>

                  </Box>
                  <Box width="60%">
                      <Heading size="md" marginBottom={2}>Restaurant / Shop Owner</Heading>
                      <Text fontSize="17" color="gray">List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</Text>
                  </Box>

              </Box>
              </Link>
                  
                  <Box display="flex" paddingTop={10} justifyContent="space-between">
                      <Text>Forgot password?</Text>
                      <Text>Not a member? Sign up FREE!</Text>
                  </Box>
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  )
}
export default Signup
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
