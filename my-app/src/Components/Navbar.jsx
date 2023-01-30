import {
  Box,
  Button,
  Heading,
  Hide,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import Image from "../foodHub2.png";
import SignUp from "./Signup";
import "../style/Navbar.css";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const { auth, handleLogout } = useContext(AuthContext);

  return (
    <>
      <Show above="md">
        <Box zIndex={10} position="fixed" w="100%" bgColor="#fff">
          <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box style={{ padding: "0.75rem" }}>
              <Img src={Image} alt="Logo" w="250px" h="95px" />
            </Box>
            <Box style={{ display: "flex", gap: "2rem" }}>
              <a href="https://www.kindmeal.my/widget.htm">
                <RiLinksLine size={40} />
              </a>
              <a href="https://www.facebook.com/KindMeal.my">
                <FaFacebook size={40} />
              </a>
              <a href="https://twitter.com/KindMeal">
                <FaTwitter size={40} />
              </a>
            </Box>
            <Box>
              <Box
                display="flex"
                style={{
                  margin: "auto",
                  display: "flex",
                  columnGap: "30px",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {auth.isAuth ? (
                  <Button onClick={handleLogout}>Logout</Button>
                ) : (
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                )}

                <br />
                <SignUp />
              </Box>
              <Text
                style={{
                  paddingTop: "10px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >{`Welcome to kindmeal ${auth.username}`}</Text>
            </Box>
          </Box>
          <Box
            bgColor="#2bb673"
            style={{
              height: "45px",
              padding: "8px",
              gap: "1rem",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/meal"
            >
              Meal Deals
            </Link>
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/kindmoments"
            >
              Kind Moments
            </Link>

            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/recipes"
            >
              Recipes
            </Link>
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/directory"
            >
              Directory
            </Link>
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/article"
            >
              Articles
            </Link>
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/mobileapp"
            >
              Mobile App
            </Link>
            <Link
              style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
              to="/help"
            >
              Help
            </Link>
          </Box>
        </Box>
      </Show>
      <Hide above="md">
        <Box
          position="fixed"
          pr="10px"
          zIndex={10}
          bgColor="#fff"
          w="full"
          color="#fff"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          justifyItems="center"
        >
          <Box>
            <Img pl="30px" w="30%" src={Image} alt="Logo" />
          </Box>
          <Box>
            {" "}
            <Menu>
              <MenuButton
                margin="10px"
                as={IconButton}
                aria-label="Options"
                color="red"
                borderColor="#2BB673"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList
                p="10px"
                bgColor="#fff"
                width="300px"
                fontSize="20px"
                fontWeight="bold"
              >
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/">
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/meal">
                    KindMeal
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/kindmoments">
                    KindMoment
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/recipes">
                    Recipes
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/directory">
                    Directory
                  </NavLink>
                </MenuItem>

                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/article">
                    Articles
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/mobileapp">
                    Mobile App
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink className="navlink2" to="/help">
                    Help
                  </NavLink>
                </MenuItem>

                <MenuItem margin={1} bgColor="#2BB673">
                  {auth.isAuth ? (
                    <Button
                      onClick={handleLogout}
                      backgroundColor="#f3f4f6"
                      color={"black"}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button backgroundColor="#f3f4f6" color={"black"}>
                      <Link to="/login">Login</Link>
                    </Button>
                  )}
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <SignUp backgroundColor="#2BB673" />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Hide>
    </>
  );
};

export default Navbar;
