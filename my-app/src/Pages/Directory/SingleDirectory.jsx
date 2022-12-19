import React from "react";
import "./Directory.css";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function SingleDirectory() {
  const [obj, setObj] = React.useState({});
  const {directoryId}=useParams()
  React.useEffect(() => {
    axios
      .get(`https://prakash-vercel-database.vercel.app/kindmealDirectory/${directoryId}`)
      .then((res) => setObj(res.data));
  }, []);

  return (
    <>
      <div className="speacer" ></div>
      <div className="directorybannersection">
        <div>
          <img height="320px" width="100%" src={obj.banner} alt="" />
        </div>
        <div className="logocontener">
          <div>
            <img src={obj.logo} alt="" />
          </div>
          <div className="bannerinformation">
            <div >
              <p className="directoryname">{obj.name}</p>
              <p>Overview</p>
            </div>
            <div>
              <p>Meal Deals</p>
            </div>
            <div>
              <p>Food Menu</p>
            </div>
            <div>
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="discriptiondirectory">
        <div>
          <img src={obj.img} alt="" />
        </div>
        <div className="discriptiondirectorysecond">
          <div>
            <p>Food Type</p>
            <p>Environment</p>
            <p>Website</p>
            <p>Meal Deals</p>
            <p>Food Menu</p>
            <p>Outlets</p>
          </div>
          <div>
            <p>{obj.foodtype}</p>
            <p>{obj.environment}</p>
            <a href={obj.fblink} target="_blank">
              {obj.fblink}
            </a>
            <p>
              <span>{obj.mealdeals}</span>
            </p>
            <p>
              <span>{obj.foodmenu}</span>
            </p>
            <p>
              <span>{obj.outlets}</span>
            </p>
            <button>Contact Shop</button>
          </div>
        </div>
      </div>
      <div className="discriptiondirectorylong">
        <p>Welcome To {obj.name}</p>
        <p>{obj.aboutlong}</p>
      </div>
      <div className="signlepagedirectoryimgs">
        {obj.images &&
          obj.images.map((ele) => <img key={ele} src={ele} alt="" />)}
      </div>
      <div className="bottombanner">
        <img src={obj.bannerbottom} alt="" />
      </div>
      <div className="directorylastdiv">
        <div>
          <p>Location</p>
          <p>{obj.name}</p>
          <p>{obj.address}</p>
          <p>{obj.opening}</p>
          <p>{obj.phone}</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rs7aymwVrL3EbEGji27PKp4r7seimGUtzbrW7EVl4ok1d1zYaz96zdqgAT2PwcyNdLU&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <div>
            <p>Comments</p>
            <p>Share Comments & Feedback</p>
            <p>
              Have any comments, enquiries or suggestions regarding Ador Cafe
              and their offerings? Post them here to share and discuss.
            </p>
            <br />
            <p>Please login first to share your comments</p>
          </div>
          <div>{obj.images && obj.images.map((ele) => <img src={ele} />)}</div>
        </div>
      </div>
    </>
  );
}
