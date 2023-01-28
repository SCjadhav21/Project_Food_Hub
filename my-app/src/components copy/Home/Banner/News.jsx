import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../../../style/News.css";
const News = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/news");
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="new">
        <div className="lives">
          <h1 style={{ fontSize: "30px" }}>Latest News & Videos</h1>
          <h2 id="on">
            <a href="">Save Lives with your blogs</a>
            <a href="">News and Articles</a>
            <a href="">Follow on Facebook</a>
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

export default News;
