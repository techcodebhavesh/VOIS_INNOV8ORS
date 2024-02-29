const express = require("express");
const { webScraperController } = require("../controllers/scrape.controller");

const scrapeRouter = express.Router();
scrapeRouter.post("/", webScraperController);

module.exports = scrapeRouter;