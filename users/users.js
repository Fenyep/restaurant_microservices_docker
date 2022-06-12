require("dotenv").config();
const express = require('express');
const UserRouter = require('./Routers/userRouter')

// connecting
require('./db/db');

// creating exress app
const app = express();
// serving json data
app.use(express.json());

// Some middlewares //
app.use('/users', UserRouter);

app.listen(process.env.PORT, () => {
    console.log(`User service running on port ${process.env.PORT}`);
})