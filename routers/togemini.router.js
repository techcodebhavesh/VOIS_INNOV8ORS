const express = require("express");
const {
    processEntriesHandler
 // retrieveApiKey
} = require("./../controllers/togemini.controller");
const togeminiRouter = express.Router();

togeminiRouter.post("/processall",     processEntriesHandler);


//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = togeminiRouter;
