require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const connectionString = process.env.CONNECTION_STRING;
const requestRoute = require("./routes/Request");


//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/request", requestRoute);
  

//MONGODB CONNECTION
const connectDb = () => {
        try {
            mongoose.connect(connectionString);
            console.log("Connected to database successfully");
        } catch (error) {
            console.log(error);
            console.log("Could not connect database!");
        }
    };
connectDb();

//PORT SETUP
const port = 5151;
app.listen(port, () => console.log(`App is listening on port ${port}`));