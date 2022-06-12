require('dotenv').config();
const express = require('express');
const OrderRouter = require('./Routers/orderRouter');
// connecting
require('./db/db');

// creating express app
const app = express();
// serving json data
app.use(express.json());

// Some Middlewares //
app.use('/orders', OrderRouter)

app.listen(process.env.PORT, () => {
    console.log(`Order service running on port ${process.env.PORT}`)
})