const express = require("express");
const { handleFileUpload,
   
    
 // retrieveApiKey
} = require("./../controllers/fireindi.controller");
const fireindiRouter = express.Router();

fireindiRouter.post("/upload",   handleFileUpload);




//apikeyRouter.get("/retrive", retrieveApiKey);

module.exports = fireindiRouter;
