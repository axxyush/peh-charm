import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.route.js";

const PORT = 4001;
const URI = "mongodb://localhost:27017/pehcharm";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

//Defining routes
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Pehcharm listening on port ${PORT}`);
});
