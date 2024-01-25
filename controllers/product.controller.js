const fs = require("fs");
const csv = require("csv-parser");

const express = require("express");
const { runQuery } = require("../connection.sql.js");

const app = express();
const PORT = process.env.PORT || 5001;

// parse JSON Middleware
app.use(express.json());

const generateRandomProductId = () => {
  return Math.floor(10000000 + Math.random() * 90000000);
};

const createProductController = async (req, res) => {
  try {
    const {
      name,
      title,
      description,
      image,
      featuresAndBenefits,
      additionalInformation,
    } = req.body;

    // Validate input (you may want to add more validation)
    if (
      !name ||
      !title ||
      !description ||
      !image ||
      !featuresAndBenefits ||
      !additionalInformation
    ) {
      return res.status(400).send("details are required");
    }

    const product_id = generateRandomProductId();
    // Insert the  product into the database

    await runQuery(
      "INSERT INTO products (product_id, name, title ,description ,image ,featuresAndBenefits ,additionalInformation) VALUES (?,?,?,?,?,?,?)",
      [
        product_id,
        name,
        title,
        description,
        image,
        featuresAndBenefits,
        additionalInformation,
      ]
    );

    console.log("Product created successfully");
    return res.status(201).send("Product created successfully");
  } catch (err) {
    console.error("Error in createProductController:", err);

    console.error("Error creating Product:", err);
    return res.status(500).send("Internal Server Error");
  }
};

// csv

function readCSV(filePath, callback) {
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      // Process each row of the CSV data
      results.push(data);
    })
    .on("end", () => {
      // Processing completed, invoke the callback with the results
      callback(null, results);
    })
    .on("error", (error) => {
      // Handle errors by invoking the callback with the error
      callback(error, null);
    });
}

module.exports = {
  createProductController,
  generateRandomProductId,
  readCSV,
};
