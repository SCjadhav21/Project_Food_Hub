import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Kind.css";
import {
  AiFillTwitterCircle,
  AiFillLike,
  AiFillStar,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export default function SingleKindPage() {
  const [obj, setobj] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://kindmeal-db.onrender.com/address/$`)
      .then((res) => setobj(res.data));
  }, [id]);

  return (
    <Box p="0px 8%" pt={["60px", " ", "160px"]}>
      <div className="bannerSectionRecipe">
        <img src={obj.foodimg} alt="food" />
      </div>
      <div className="recipeimgdiscontainer">
        <br /> <br /> <br /> <br />
        <p className="recipeimgheading">{obj.articletitle}</p>
        <div className="recipeimgdis">
          <div width="30px">
            <img src={obj.avtar} alt="articlesimg" />
          </div>
          <div>
            <div className="grid4">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
                  alt="articlesimg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                  alt="articlesimg"
                />
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
