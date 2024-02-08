/*

const {
    "data":[{


        "ProductID":"${productID}",
       "SKU":"${sku}",  
        "ProductTitle":"${productTitle}",
       "ProductDescription":"${productDescription}",
        "ProductImage":"${productImage}",
        "ProductFeatures":"${productFeatures}",
        "ProductInfo":"${productInfo}",
        
    }
        
    
    ]
        
    
  } = req.body;


  {
    "data":[
  {
    "ProductID": "1",
    "SKU": "",
    "ProductTitle":" Dove Hair Therapy Dry Scalp Care Shampoo 380ml & Conditioner 380ml (Combo Pack)",
    "ProductDescription": "pure cotton, 10 devices connectivity",
    "ProductImage": "https://m.media-amazon.com/images/I/61H0g3Y1KAL.SL1500.jpg",
    "ProductFeatures": "Deeply nourishes and moisturizes the scalp, Proven dry scalp relief formula,Enriched with natural ingredients for healthier hair,Two-in-one combo pack for complete care",
    "ProductInfo": "Manufacturer: Dove, Country of Origin: United States, Pricing: $15.99"
  }
]
}
*/

const { run } = require("./geminirun.controller.js");
const logger = require("../logger");

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const processEntriesHandler = async (req, res) => {
  logger("Processing entries...");
  try {
    const inputData = req.body.data;
    // console.log("Input Data:", inputData[0]);

    if (!inputData || !Array.isArray(inputData)) {
      return res.status(400).json({ error: "Invalid data format" });
    }

    const results = {};

    for (const entry of inputData) {
      try {
        let resultObject;
        let resultValidated = false;
        let i = 0;
        while (!resultValidated) {
          if (i >= 5) {
            logger(`Error processing entry: ${entry.ProductID}`);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          const textResult = await run(entry);
          i++;

          let cleanedText;
          if (textResult.includes("```json"))
            cleanedText = textResult.substring(8, textResult.length - 3);
          else cleanedText = textResult;

          // Log the content of textResult before parsing
          console.log("Text Result:", cleanedText);

          if (isJsonString(cleanedText)) {
            resultValidated = true;
          } else {
            resultValidated = false;
            continue;
          }

          // Convert the text result to JSON
          resultObject = validateAndConvertRating(JSON.parse(cleanedText));

          if (resultObject === null) {
            resultValidated = false;
            continue;
          }
          resultObject["data"] = entry;
        }
        results[entry.ProductID] = resultObject;
      } catch (error) {
        logger(`Error processing entry: ${error}`);
        console.error("Error processing entry:", error);
        // results.push({ status: 'error', error: 'An error occurred processing the entry' });
      }
    }

    res.status(200).json(results);
  } catch (error) {
    logger(`Error processing entries: ${error}`);
    console.error("Error processing entries:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

function validateAndConvertRating(obj) {
  // Check if the object contains all required fields
  if (
    obj.hasOwnProperty("title") &&
    obj.hasOwnProperty("description") &&
    obj.hasOwnProperty("image") &&
    obj.hasOwnProperty("featuresAndBenefits") &&
    obj.hasOwnProperty("additionalInformation") &&
    obj.hasOwnProperty("overallScore") &&
    obj.title.hasOwnProperty("rating") &&
    obj.description.hasOwnProperty("rating") &&
    obj.image.hasOwnProperty("rating") &&
    obj.featuresAndBenefits.hasOwnProperty("rating") &&
    obj.additionalInformation.hasOwnProperty("rating") &&
    obj.overallScore.hasOwnProperty("rating") &&
    !isNaN(parseInt(obj.title.rating)) &&
    !isNaN(parseInt(obj.description.rating)) &&
    !isNaN(parseInt(obj.image.rating)) &&
    !isNaN(parseInt(obj.featuresAndBenefits.rating)) &&
    !isNaN(parseInt(obj.additionalInformation.rating)) &&
    !isNaN(parseInt(obj.overallScore.rating)) &&
    obj.title.hasOwnProperty("suggestion") &&
    obj.description.hasOwnProperty("suggestion") &&
    obj.image.hasOwnProperty("suggestion") &&
    obj.featuresAndBenefits.hasOwnProperty("suggestion") &&
    obj.additionalInformation.hasOwnProperty("suggestion") &&
    obj.overallScore.hasOwnProperty("suggestion")
  ) {
    // Convert ratings to integers
    obj.title.rating = parseInt(obj.title.rating);
    obj.description.rating = parseInt(obj.description.rating);
    obj.image.rating = parseInt(obj.image.rating);
    obj.featuresAndBenefits.rating = parseInt(obj.featuresAndBenefits.rating);
    obj.additionalInformation.rating = parseInt(
      obj.additionalInformation.rating
    );
    obj.overallScore.rating = parseInt(obj.overallScore.rating);
  } else {
    // Return null if any required field is missing or ratings are invalid
    console.log("Invalid data:", obj);
    return null;
  }

  // Return the validated data
  return obj;
}

module.exports = {
  processEntriesHandler,
  // retrieveApiKey
};
