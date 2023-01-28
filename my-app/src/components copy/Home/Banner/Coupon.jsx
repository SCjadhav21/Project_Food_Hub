import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../style//Coupon.css";
const Coupon = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      let res = await axios.get("https://reduxapi.onrender.com/coupon");
      console.log(res);
      setData(res.data);
    };
    getdata();
  }, []);

  return (
    <>
      <div className="finder">
        <div className="finders">
          <h2 style={{ fontSize: "30px" }}>
            Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
          </h2>
          <div className="brought">
            <h4 style={{ marginTop: "20px" }}>
              Brought to you by
              <img
                style={{ height: "50px", marginLeft: "120px" }}
                src="https://www.petfinder.my/images/logo-575x100.png"
              />
            </h4>
          </div>
          <h3 style={{ fontSize: "20px" }}>
            Instant coupon & dining. No upfront coupon payment, booking or
            printing.
          </h3>
        </div>
        <div className="coupon">
          {data.map((items, title, titles) => {
            return (
              <div className="coupons">
                <div className="anju">
                  <img src={items.url} alt="coupons" />
                  <h4>{items.title}</h4>
                  <p>{items.titles}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottomm">
          <h3>
            Any restaurant or cafe can join KindMeal, vegetarian or not, as long
            as the deals and menu featured are meat-free. Enjoy a great
            meat-free dining experience. Easily save animal lives, health,
            environment and money now!
          </h3>
        </div>
        <div className="button">
          <button style={{ marginBottom: "30px" }}>
            <h1>Join KindMeal Now </h1>
          </button>
        </div>
      </div>
      <div className="save">
        <img
          style={{ width: "100%" }}
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
        />
      </div>
    </>
  );
};

export default Coupon;
