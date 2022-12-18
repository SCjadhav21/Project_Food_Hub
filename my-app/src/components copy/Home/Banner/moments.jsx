import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./moments.css";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Moments = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/moments");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <Box p="0px 8%" pt={["60px", " ", "160px"]} className="moment">
        <div className="live">
          <h1>Yummyliciou Moments</h1>
          <h2 id="hot">
            <a href="">Secret Recipes</a>
            <a href="">Member Hot Picks</a>
          </h2>
        </div>
        <div className="mom">
          {data.map((items, title, add) => {
            return (
              <div>
                <div className="imgs">
                  <NavLink
                    state={{
                      img: items.url,
                      title: items.title,
                      add: items.add,
                    }}
                    to="/Moments"
                  >
                    <img src={items.url} alt="" />
                  </NavLink>
                </div>
                <h5>{items.title}</h5>
                <p>{items.add}</p>
              </div>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default Moments;
