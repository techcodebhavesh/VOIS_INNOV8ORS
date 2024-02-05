require("dotenv").config({ path: "./.env" });
const vision = require("@google-cloud/vision");

// Create a Vision client
const client = new vision.ImageAnnotatorClient();

// Specify the image path
const imagePath = "German-Shepherd-dog-Alsatian.webp";

// Make a label detection request
client
  .labelDetection(imagePath)
  .then((results) => {
    const labels = results[0].labelAnnotations;
    console.log("Labels detected:");
    labels.forEach((label) => {
      console.log(label.description + " (" + label.score + ")");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
