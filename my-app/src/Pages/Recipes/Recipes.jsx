import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../../style/Recipes.css";
import { AiOutlineClockCircle, AiTwotoneMessage } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import RecipesAndDirectoryPagination from "../../Components/RecipesAndDirectoryPagination";
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

export default function Recipes() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("text");
  const[loading ,setLoading]=useState(false)
  const [que, setQue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    setLoading(true)
    getData(
      `https://mock-server-app-pzg9.onrender.com/kindmealRecipes?_page=${page}&_limit=10&q=${que}`
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
          Food & Drinks{" "}
          <span style={{ color: "#888888" }}>| Yummy Meat-Free Recipes</span>
        </p>
        <p>
          Want to craft your own creative meat-free meals? Get inspiration from
          other food lovers, or share your own masterpieces!
        </p>
        <p>Transform into a master chef now.</p>
      </div>
      <div className="searchoptions">
        <input
          type="text"
          placeholder="Search Recipe or User Name"
          onChange={(e) => setText(e.target.value)}
        />
        <select onChange={(e) => handelSearchrecipes1(e.target.value)}>
          <option value="">All Calegories</option>
          <option value="Hokkaido Cheese Tart">Hokkaido Cheese Tart</option>
          <option value="Handy Zing Chopped Salad">Handy Zing Chopped Salad</option>
          <option value="The Rock">The Rock</option>
          <option value="Ceasar Dressing">Ceasar Dressing</option>
          <option value="EASY 10 Minute Dinner Recipes">EASY 10 Minute Dinner Recipes</option>
          <option value="Peanut Butter Cups">Peanut Butter Cups</option>
         
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
                <img src={ele.logo} alt="" />
                <p>{ele.channel}</p>
              </div>
              <div>
                <button>
                  <Link to={`/recipes/${ele.id}`}>View</Link>
                </button>
              </div>
            </div>
            <div>
              <img src={ele.img} alt="" />
              <p>{ele.name}</p>
            </div>
            <div>
              <div>
                <p>
                  <AiOutlineClockCircle color="#cccccc" /> {ele.time}
                </p>
              </div>
              <div>
                <p>
                  <BsFillHeartFill color="#cccccc" /> 0
                </p>
                <p>
                  <AiTwotoneMessage color="#cccccc" /> 0
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
