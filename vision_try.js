require("dotenv").config({ path: "./.env" });
const vision = require("@google-cloud/vision");

// Create a Vision client
const client = new vision.ImageAnnotatorClient();

// Specify the image path
// const imagePath = "googlelogo.png";
const imagePaths = ["googlelogo.png", "shopping.webp", "bisleri-fake.jpg"];

// // Make a label detection request
// client
//   // .labelDetection(imagePath)
//   // .logoDetection(imagePath)
//   // .then((results) => {



//     // const logos = results[0].logoAnnotations;
//     // // Check if logos is defined
//     // if (logos && logos.length > 0) {
//     //   console.log("Logos detected:");
//     //   logos.forEach((logo) => {
//     //     console.log(logo.description + " (" + logo.score + ")");
//     //   });
//     // } else {
//     //   console.log("No logos detected.");
//     // }
    

//     .labelDetection(imagePath)
//   .then((labelResults) => {
//     const labels = labelResults[0].labelAnnotations;
//     console.log("Labels detected:");
//     labels.forEach((label) => {
//       console.log(label.description + " (" + label.score + ")");
//     });

//     // Make a separate logo detection request
//     return client.logoDetection(imagePath);
//   })
//   .then((logoResults) => {
//     const logos = logoResults[0].logoAnnotations;
//     console.log("Logos detected:");
//     logos.forEach((logo) => {
//       console.log(logo.description + " (" + logo.score + ")");
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });




// client
//   .labelDetection(imagePath)
//   .then((labelResults) => {
//     const labels = labelResults[0].labelAnnotations;
    
//     // Check if labels is defined and contains at least one label
//     if (labels && labels.length > 0) {
//       const topLabel = labels[0];
//       console.log("Top label detected:");
//       console.log(topLabel.description + " (" + topLabel.score + ")");
//     } else {
//       console.log("No labels detected.");
//     }

//     // Make a separate logo detection request
//     return client.logoDetection(imagePath);
//   })
//   .then((logoResults) => {
//     const logos = logoResults[0].logoAnnotations;
    
//     // Check if logos is defined and contains at least one logo
//     if (logos && logos.length > 0) {
//       const topLogo = logos[0];
//       console.log("Top logo detected:");
//       console.log(topLogo.description + " (" + topLogo.score + ")");
//     } else {
//       console.log("No logos detected.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


imagePaths.forEach((imagePath) => {
  client
    .labelDetection(imagePath)
    .then((labelResults) => {
      const labels = labelResults[0].labelAnnotations;
      if (labels && labels.length > 0) {
        const topLabel = labels[0];
        console.log(`Top label for ${imagePath}: ${topLabel.description} (${topLabel.score})`);
      } else {
        console.log(`No labels detected for ${imagePath}.`);
      }

      return client.logoDetection(imagePath);
    })
    .then((logoResults) => {
      const logos = logoResults[0].logoAnnotations;
      if (logos && logos.length > 0) {
        const topLogo = logos[0];
        console.log(`Top logo for ${imagePath}: ${topLogo.description} (${topLogo.score})`);
      } else {
        console.log(`No logos detected for ${imagePath}.`);
      }
    })
    .catch((error) => {
      console.error(`Error processing ${imagePath}:`, error);
    });
});