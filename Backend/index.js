const express = require("express");
require("dotenv").config();
const { connect } = require("./configs/db");
const cors = require("cors");

const { userRouter } = require("./routes/users.routes");
const { cartRouter } = require("./routes/cart.routes");
const { orderedRoutes } = require("./routes/order.routes");
const { authenticate } = require("./middleware/auth.middleware");

const app = express();
app.use(cors());
app.use(express.json());

//routes


//auth routes
app.use("/user", userRouter);

//order routes


//cart routes
app.use(authenticate);


app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to data base");
  } catch (err) {
    console.log(`err while starting the  port on ${process.env.port}`);
  }

  console.log(`connected to server on  ${process.env.port}`);
});
