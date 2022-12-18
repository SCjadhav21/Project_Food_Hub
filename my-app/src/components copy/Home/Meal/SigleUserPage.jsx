import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SigleUserPage.css";
const SigleUserPage = () => {
  const location = useLocation();

  return (
    <Box p="0px 8%" pt={["60px", " ", "160px"]}>
      <div className="page">
        <div>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://www.kindmeal.my/photos/shop/6/604-c.jpg"
            />
          </div>

          <div className="buttons">
            <button>
              <Link to="/meal">Meal Deal</Link>
            </button>

            <button>
              <Link to="/foodmenu">Food Menu</Link>
            </button>
          </div>

          <div className="location">
            <img src={location.state.img} />
            <div>
              <h1>{location.state.title}</h1>
              <p>{location.state.title2}</p>
              <h5>{location.state.description}</h5>
              <img src={location.state.rating} />
              <h5 style={{ marginLeft: "80px" }}>{location.state.dis}</h5>
              <h3 style={{ marginLeft: "80px", color: "red" }}>
                {location.state.rate2}
              </h3>
              <h5 style={{ marginLeft: "80px" }}>{location.state.dis2}</h5>
              <h3 style={{ marginLeft: "80px", color: "red" }}>
                {location.state.rate2}
              </h3>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <h1>Delicious Details</h1>
            <p>
              Inspired by the love for animals and the planet, Hainan Village
              Kopitiam is an advocate of neat-free,egg & plant-based diet.And
              yes,our outdoor dining area is pet-friendly
            </p>{" "}
            <br />
            <p>Select any Items from our delicous menu:</p> <br />
            <p>Signature Nasi Lemak</p>
            <p>Special Curry Mee Hoon & Noodles</p>
            <p>Hainan Coffe</p>
            <br />
            <h4>Rice Set</h4>
            <p>
              • Signature Hainan Roasted VChicken Rice <br />
              • Signature Hainan White VChicken Rice <br />
              • Signature VChar Siew Rice <br />
              • Nasi Lemak Biasa <br />
              • Signature Nasi Lemak with Rendang VChicken <br />
              • Nasi Lemak with Rendang VMutton <br />
              • Curry Mixed Vege Rice <br />
              • Curry Vchicken Potato with Turmeric Rice <br />
              • Lei Cha with Brown Rice <br />
              • Special Sambal Petai Fried Rice <br />
              • Hainan Mui's Golden Garlic Fried Rice <br />
            </p>
            <br />
            <h4>NOODLES</h4>
            <p>
              • Stir-Fried Nyonya Sambal Petai Meehoon <br />
              • Pangkor Laksa
              <br />
              • Special Curry Mee Hoon & Noodles
              <br />
              • Claypot Lou Shu Fun
              <br />
              • Cantonese Style Yuen Yong Noodles
              <br />
              • Stir-Fried Chee Cheong Fun with XO Sauce
              <br />
              • White Radish Pepper Soup Meehoon
              <br />
              • Special Fu Chuk Clear Soup Meehoon
              <br />
            </p>
            <br />
            <h4>All Day Breakfast</h4>
            <p>
              • Hainanese Butter & Kaya Toast <br />
              • Butter & Kaya Crunchy Peanut Bun <br />
              • Curry Potato with Steamed Bun <br />• Half-boiled Kampung Egg (2
              eggs)
            </p>
            <br />
            <h4>DRINKS</h4>
            <p>***Note***</p>
            <p>
              1. Discount is not valid for delivery. <br />
              2. Discount is not valid for promotional items. <br />
              3. Discount is not valid for Kuih. <br />
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tOUgOPNFBmHz9io7df_qMGM5O_w1lNAt4g&usqp=CAU" />
          </div>
          {/* ****************** */}

          <div className="right">
            <h3>Location</h3>
            <p>
              3G ,Jalan Temenggung 25/9 ,Bandar Mahota Vheras,43200 Cheras
              Selangor. <br />
              Open:Tue-Sun:9am-ppm; Mon:Closed <br />
              Tel:012-2192622
            </p>

            <h3>Terms & Conditions</h3>
            <h4>Coupon Validity</h4>
            <p>Must use Coupon by Dec 21st,2022</p>
            <h4>Exclusivity</h4>
            <p>Valid with other KindMeal.my coupons only</p>
            <h4>Reservation</h4>
            <p>Not required</p>
            <h4>Dining Terms</h4>
            <p>
              1.Additional Service Charge applicable <br />
              3.2.There is no SST <br />
              4. Discount is not valid for delivery <br />
              5. Discount is not valid for promotional items <br />
              6. Discount is not valid for Kuih <br />
              7. Outdoor dining area is pet-friendly <br />
            </p>
          </div>
        </div>
        <div className="bottom2">
          <img src="https://www.kindmeal.my/photos/deal/7/709-4939-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/711-4936-m.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/709-4941-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/709-4942-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/709-4945-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/709-4946-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/709-4948-s.jpg" />
          <img src="https://www.kindmeal.my/photos/deal/7/709-4949-s.jpg" />
        </div>

        <img src="https://www.kindmeal.my/images/banner_directory.jpg" />
      </div>
    </Box>
  );
};

export default SigleUserPage;
