import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Recipes.css";
import {
  AiFillTwitterCircle,
  AiFillLike,
  AiFillStar,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function SignleRecipePage() {
  const [obj, setobj] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://prakash-vercel-database.vercel.app/kindmealRecipes/${recipeId}`
      )
      .then((res) => setobj(res.data));
  }, []);

  return (
    <>
      <div className="speacer">Speacer</div>
      <div className="bannerSectionRecipe">
        <img src={obj.banner} alt="" />
        <div>
          <img src={obj.logo} alt="" />
          <div>
            <div>
              <p>{obj.channel}</p>
              <p>{obj.followers} Followers</p>
            </div>
            <div>
              <button>+ Follow Member</button>
              <button>Contact Member</button>
            </div>
          </div>
        </div>
      </div>
      <div className="recipeimgdiscontainer">
        <p className="recipeimgheading">{obj.name}</p>
        <div className="recipeimgdis">
          <div>
            <img src={obj.img} alt="" />
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
        <div className="fullrecepi">
          <div>
            <h2>Secret Ingredients</h2>
            {obj.ingredients &&
              obj.ingredients.map((ele, i) => (
                <p type="number" key={ele}>
                  {i + 1}. {ele}
                </p>
              ))}
          </div>
          <div>
            <h2>Directions</h2>
            {obj.directions &&
              obj.directions.map((ele, i) => (
                <p type="number" key={ele}>
                  {i + 1}. {ele}
                </p>
              ))}
          </div>
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
      <div className="morerecipescontainer">
        <h1>More Yummy Recipes</h1>
        <div className="morepicsrecepies">
          {obj.morepics &&
            obj.morepics.map((ele, i) => <img key={i} src={ele} alt="" />)}
        </div>
      </div>
      <img className="bannerII" src={obj.bannerII} alt="" />
    </>
  );
}
