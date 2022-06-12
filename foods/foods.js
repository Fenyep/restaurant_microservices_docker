require("dotenv").config();
const express = require("express");
const FoodRouter = require('./Routers/foodRouter');
// connect
require('./db/db');

// creating an express app
const app = express();
// serving json data
app.use(express.json());

// some middlewares //
app.use('/foods', FoodRouter);

// listening the port
app.listen(process.env.PORT, () => {
    console.log(`Food service ready on port: ${process.env.PORT}`);
})