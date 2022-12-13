import { Box, Button, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";

const Navbar = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box style={{ padding: "0.75rem" }}>
          <Img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="Logo"
          />
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
        <Box
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
          <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=292733157519852&kid_directed_site=0&app_id=292733157519852&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fclient_id%3D292733157519852%26redirect_uri%3Dhttps%253A%252F%252Fwww.kindmeal.my%252Flogin.php%253Faction%253Dfacebook%26state%3D3bf3440d3f5b75a4740d6a6b38bea8cb%26display%3Dpopup%26scope%3Demail%252Cuser_birthday%252Cuser_location%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3cbbf0cb-ffc3-4c5b-8e98-d1ac7b590b75%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D3bf3440d3f5b75a4740d6a6b38bea8cb%23_%3D_&display=popup&locale=en_GB&pl_dbl=0">
            <Button ml="1rem" bgColor="#35619f" color="#fff">
              Facebook
            </Button>
          </a>
          <Button ml="1rem" bgColor="#666666" color="#fff">
            Email
          </Button>
          <SignUp />
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
          to="/mealdeals"
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
          to="/"
        >
          Hotpicks
        </Link>
        <Link
          style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
          to="/recipes"
        >
          Recipes
        </Link>
        <Link
          style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
          to="/"
        >
          Directory
        </Link>
        <Link
          style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
          to="/articles"
        >
          Articles
        </Link>
        <Link
          style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}
          to="/help"
        >
          Help
        </Link>
      </Box>
    </>
  );
};

export default Navbar;