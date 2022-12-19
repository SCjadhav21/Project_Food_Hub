import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./News.css";
const Heroes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/hero");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="new">
        <div className="lives">
          <h1 style={{ fontSize: "30px" }}>Amazing Superheroes</h1>
          <h2 id="on">
            <a href="">Latest Buzz</a>
            <a href="">Lifestyles Ambassadors</a>
          </h2>
        </div>
        <div className="news">
          {data.map((items, title) => {
            return (
              <div>
                <div className="img">
                  <img src={items.url} alt="" />
                </div>
                <p>{items.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Heroes;
