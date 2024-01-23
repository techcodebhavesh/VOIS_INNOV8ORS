const express = require("express");
const {
    generateApiKeyAndUserId,
  authenticateApiKey,

  generate
 // retrieveApiKey
} = require("./../controllers/apikey.controller");
const apikeyRouter = express.Router();

apikeyRouter.get("/gen",  generate);

apikeyRouter.post("/auth", authenticateApiKey);

//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = apikeyRouter;
