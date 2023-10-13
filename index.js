const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
const authRouter = require('./View/authRoutes');
app.use('/auth', authRouter);
app.listen(3000, function () {
    console.log("Listening on Port 3000");
})