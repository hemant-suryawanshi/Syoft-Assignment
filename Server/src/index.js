const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.options("*", cors());
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.yswkt.mongodb.net/${process.env.MONGO_DB_DATABSASE}`
  )
  .then(() => {
    console.log("Database Conected");
  });

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("conected to 4800");
});
