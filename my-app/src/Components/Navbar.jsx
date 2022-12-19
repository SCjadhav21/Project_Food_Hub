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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import Image from "../foodHub2.png";
import SignUp from "./Signup";

const Navbar = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
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
                  padding: "1rem",
                }}
              >
                <Login
                  ml="1rem"
                  text={text}
                  user={user}
                  setUser={setUser}
                  setText={setText}
                />

                <SignUp />
              </Box>
              <Text
                style={{
                  paddingTop: "10px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >{`Welcome to kindmeal ${user}`}</Text>
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
          // style={{backgroundColor:back=="black"?"#5C6471:""}}
          position="fixed"
          pr="10px"
          zIndex={10}
          bgColor="#fff"
          w="full"
          color="#fff"
          //   style={{
          //     backgroundColor: back === 1 ? "#151716" : "",
          //     height: back === 1 ? "80px" : "100px",
          //   }}
          // border="1px solid black"
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
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(1)}
                    // style={{ color: linkno === 1 ? "red" : "" }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(2)}
                    // style={{ color: linkno === 2 ? "red" : "" }}
                    to="/meal"
                  >
                    KindMeal
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(2)}
                    // style={{ color: linkno === 2 ? "red" : "" }}
                    to="/kindmoments"
                  >
                    KindMoment
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(2)}
                    // style={{ color: linkno === 2 ? "red" : "" }}
                    to="/recipes"
                  >
                    Recipes
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(3)}
                    // style={{ color: linkno === 3 ? "red" : "" }}
                    to="/directory"
                  >
                    Directory
                  </NavLink>
                </MenuItem>

                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(4)}
                    // style={{ color: linkno === 4 ? "red" : "" }}
                    to="/article"
                  >
                    Articles
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(5)}
                    // style={{ color: linkno === 5 ? "red" : "" }}
                    to="/mobileapp"
                  >
                    Mobile App
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="#2BB673" margin={1}>
                  <NavLink
                    className="navlink2"
                    // onClick={() => handelClick(5)}
                    // style={{ color: linkno === 5 ? "red" : "" }}
                    to="/help"
                  >
                    Help
                  </NavLink>
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
