const express = require("express");
const {
    run
} = require("./../controllers/geminirun.controller");
const geminirunRouter = express.Router();

geminirunRouter.get("/run",  run);

//apikeyRouter.get("/retrive", retrieveApiKey);
module.exports = geminirunRouter;
