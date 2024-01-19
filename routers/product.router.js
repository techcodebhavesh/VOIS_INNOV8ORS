const express = require("express");
const {
    createProductController
} = require("./../controllers/product.controller");
const productRouter = express.Router();

productRouter.post("/productadd",  createProductController);



module.exports = productRouter;
