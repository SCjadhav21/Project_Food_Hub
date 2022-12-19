import { Box } from "@chakra-ui/react";
import React from "react";
import "./Mobilapp.css";

export default function Mobilapp() {
  return (
    <>
    <div className="speacer" >Speacer</div>
      <div className="mobilappintro">
        <h1>KindMeal Mobile Apps on iOS & Android</h1>
        <p>
          Yummylicious food at irresistible prices. One click (alright, it's a
          tap) to grab a coupon, and just another click to use it. No waiting,
          no upfront payment.
        </p>
        <p>
          Share delicious moments and exhibit your camwhore skills. Follow
          foodies to discover great dining places.
        </p>
        <p>We know you're hungry. Time to download the app.</p>
        <p>Psst.. Save the cows, save the world!</p>
      </div>
      <div className="mobilappmainpic">
        <img src="https://www.kindmeal.my/images/mobile_app_large.png" alt="" />
      </div>
      <div className="mobilapplinks">
        <a
          href="https://apps.apple.com/my/app/kindmeal-my/id857891884?ls=1"
          target="_blank"
        >
          <img
            src="https://www.kindmeal.my/images/mobile_download_ios.png"
            alt=""
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.andykoh.KindMeal"
          target="_blank"
        >
          <img
            src="https://www.kindmeal.my/images/mobile_download_android.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
}
