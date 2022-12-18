import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Articles.css";
import {
  AiFillTwitterCircle,
  AiFillLike,
  AiFillStar,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export default function SingleArticlePage() {
  const [obj, setobj] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://kindmeal-db.onrender.com/address/${id}`)
      .then((res) => setobj(res.data));
  }, [id]);

  return (
    <Box p="0px 8%" pt={["60px", " ", "160px"]}>
      <div className="bannerSectionRecipe">
        <img
          src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="food"
        />
      </div>
      <div className="recipeimgdiscontainer">
        <p className="recipeimgheading">{obj.articletitle}</p>
        <div className="recipeimgdis">
          <div>
            <img src={obj.articlesimg} alt="articlesimg" />
          </div>
          <div>
            <div className="grid4">
              <div>
                <p>Time</p>
                <span>{obj.time}</span>
              </div>
              <div>
                <p>Servings</p>
                <span>{obj.servings}</span>
              </div>
              <div>
                <p>
                  Diet Restriction &nbsp;{" "}
                  <AiFillQuestionCircle color="#898989" />
                </p>
                <p>---</p>
              </div>
              <div>
                <p>Rating</p>
                <p>
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                </p>
                <p>1 Vote</p>
              </div>
            </div>
            <div>
              <p>
                <AiFillLike color="blue" /> <span>MarionSeow likes this</span>
              </p>
              <p>
                <MdOutlineFacebook color="#3b5998" />
                <AiFillTwitterCircle color="#00aced" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="morerecipescontainer">
        <h1>Description</h1>
        <div className="morepicsrecepies">
          <Text size={"15px"}>{obj.description}</Text>
        </div>
      </div>
      <div className="CandRecip">
        <div>
          <h2>Rate This Recipe</h2>
          <p>What do you think of this recipe?</p>
          <p>
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
          </p>
          <button>Submit Rating</button>
        </div>
        <div>
          <h2>Comments</h2>
          <p>
            Be the first to comment on this delicious recipe{" "}
            <span>No Comments</span>{" "}
          </p>
          <input type="text" name="" id="" placeholder="Enter comment.." />
          <br />
          <button>Comment</button>
        </div>
      </div>

      <img className="bannerII" src={obj.articlesimg} alt="" />
    </Box>
  );
}
