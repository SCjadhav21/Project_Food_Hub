import {
  Button,
  FormControl,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import Image from "../foodHub2.png";
import { AuthContext } from "../Context/AuthContext";
import Login1 from "./Login1";

const Login = ({ text, user, setText, setUser }) => {
  console.log(text, user, setText, setUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth, handleLogout } = React.useContext(AuthContext);

  const handleUser = () => {
    setUser(text);
  };

  return (
    <>
      {auth.isAuth ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button onClick={onOpen}>
          <Link to="/login">Login</Link>
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Img src={Image} alt="Logo" />
            <Text ml="120px">Member Login</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login1 />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
