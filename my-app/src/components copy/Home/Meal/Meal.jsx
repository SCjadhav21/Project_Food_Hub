import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../../../style/Recipes.css";
import { AiOutlineClockCircle, AiTwotoneMessage } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import RecipesAndDirectoryPagination from "../../../Components/RecipesAndDirectoryPagination";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Skeleton, Stack } from "@chakra-ui/react";

const getData = (url) => {
  return axios.get(url);
};
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

export default function Meal() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("text");
  const[loading ,setLoading]=useState(false)
  const [que, setQue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    setLoading(true)
    getData(
      `https://reduxapi.onrender.com/meal?_page=${page}&_limit=10&q=${que}`
    ).then((res) => {setArr(res.data)
    setLoading(false)}).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [que, page]);
  useEffect(() => {
    console.log(que);
    if (que.length > 0) {
      setSearchParams({ page, que });
    } else {
      setSearchParams({ page });
    }
  }, [page, que]);

  const handelsearchrecipes = () => {
    setQue(text);
  };
  const handelSearchrecipes1 = (text1) => {
    setQue(text1);
  };
  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />

        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />

        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />

        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <>
      <div className="speacer">Speacer</div>
      <div className="recipesintro">
        <p>
          Meat-Free Deals{" "}
          <span style={{ color: "#888888" }}>| Restaurants In Malaysia</span>
        </p>
        <p>
          Browse delicious meat-free, vegetarian deals from top restaurants and
          cafes! Just click on "Get Free Coupon" to obtain instant discounts and
          dine at the restaurants. No upfront payment, booking or printing is
          needed. If you share it on social media, you'll even DOUBLE your
          discount!
        </p>
        <p>
          Download our mobile app now to easily get coupons and start dining in
          a few seconds. Effortlessly save lives, health, environment and money
          now!
        </p>
      </div>
      <div className="searchoptions">
        <input
          type="text"
          placeholder="Search Shop by Name"
          onChange={(e) => setText(e.target.value)}
        />
        <select onChange={(e) => handelSearchrecipes1(e.target.value)}>
          <option value="">All Calegories</option>
          <option value="Love Earth Cafe">Love Earth Cafe</option>
          <option value="Simple Good Food">Simple Good Food</option>
          <option value="The Rock">Something Bakery Cafe</option>
          <option value="Ring Zhi Vegetarian Restaurant">
            Ring Zhi Vegetarian Restaurant
          </option>
          <option value="All VegetrainMart">All VegetrainMart</option>
          <option value="Dining Bowl">Dining Bowl</option>
        </select>
        <button onClick={handelsearchrecipes}>Search Recipes</button>
        <button>
          <Link to="/AddRacipes">Share My Recipe </Link>
        </button>
      </div>

      <RecipesAndDirectoryPagination
        total={4}
        current={page}
        onchange={(value) => setPage(value)}
      />
      <div className="recipecontainer">
        {arr.map((ele) => (
          <div key={ele.id} className="recipecard">
            <div>
              <div>
                <img src={ele.url} alt="" />
                <p>{ele.channel}</p>
              </div>
              <div>
                <button>
                  <Link to={`/meal/${ele.id}`}>View</Link>
                </button>
              </div>
            </div>
            <div>
              <img src={ele.url} alt="" />
              <p>{ele.title}</p>
            </div>
            <div>
              <div>
                <p>
                  <AiOutlineClockCircle color="#cccccc" /> {ele.rate}
                </p>
              </div>
              <div>
                <p>
                  <BsFillHeartFill color="#cccccc" />
                  {ele.rate2}
                </p>
                <p>
                  <AiTwotoneMessage color="#cccccc" /> {ele.dis2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RecipesAndDirectoryPagination
        total={4}
        current={page}
        onchange={(value) => setPage(value)}
      />
    </>
  );
}
