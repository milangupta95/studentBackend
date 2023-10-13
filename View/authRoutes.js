const {signup, login} = require('../Controller/AuthController');
const express = require('express');
const authRouter = express.Router();
authRouter.post("/signup",signup);
authRouter.post("/login",login);
module.exports = authRouter;