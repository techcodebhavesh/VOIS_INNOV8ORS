const express = require("express");
const {
    transportHandler
 // retrieveApiKey
} = require("./../controllers/transport.controller");
const transportRouter = express.Router();

transportRouter.post("/tran",     transportHandler);


//apikeyRouter.get("/retrive", retrieveApiKey);
    
module.exports = transportRouter;
