import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../../style/Meals.css";
import Pagination from "./Pagination";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getMeal } from "../../../Pages/Articles/api";

const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};
const Meals = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);
  const [find, setfind] = useState("");
  const [country, setCountry] = useState("");
  const fetchCitiesDataAndUpdate = (page, find, country) => {
    getMeal({ page, limit: 6, find, country })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page, find, country);
  }, [page, find, country]);

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  const getData = (el) => {
    setfind(el);
  };
  const getcount = (el) => {
    setCountry(el);
  };


  return (
    <>
      <br />
      <div style={{ margin: "auto", width: "70%" }}>
        <Pagination
          total={7}
          current={page}
          onChange={(value) => setPage(value)}
        />
        <br />
      </div>
      <div className="meals">
        {data.map((items) => {
          return (
            <div className="image">
              <div>
                <NavLink
                  state={{
                    img: items.url,
                    title: items.title,
                    title2: items.title2,
                    description: items.description,
                    rating: items.rating,
                    dis: items.dis,
                    rate: items.rate,
                    dis2: items.dis2,
                    rate2: items.rate2,
                  }}
                  to="/meals"
                >
                  <img src={items.url} alt="images" />
                </NavLink>
              </div>
              <h3 style={{ marginLeft: "20px", fontSize: "25px" }}>
                {items.title}
              </h3>

              <p style={{ marginLeft: "20px" }}>{items.title2}</p>

              <h5 style={{ marginLeft: "20px" }}>{items.description}</h5>
              <div className="img2">
                <button style={{ backgroundColor: "red" }}>GET FREE</button>
                <img
                  style={{ width: "80%", height: "80px" }}
                  src={items.rating}
                />

                <h5>{items.dis}</h5>
                <h3 style={{ color: "red" }}>{items.rate}</h3>
                <h5>{items.dis2}</h5>
                <h3 style={{ color: "red" }}>{items.rate2}</h3>
              </div>
            </div>
          );
        })}
        <Pagination
          total={6}
          current={page}
          onChange={(value) => setPage(value)}
        />
      </div>
    </>
  );
};

export default Meals;
