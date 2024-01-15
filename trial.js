const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

let text;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyC7ao58BJx37LlrX_J1HuG3nfiyjTGRNMg");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = `
  CATALOGUE:"
  
  Catalog Sample: Dove Hair Therapy Dry Scalp Care Collection
  
  1. Product Image: "provided below"
  
  2. Product Title:"*Title:* Dove Hair Therapy Dry Scalp Care Shampoo 380ml & Conditioner 380ml (Combo Pack)"
  
  3. Features and Benefits:"Deeply nourishes and moisturizes the scalp, Proven dry scalp relief formula,Enriched with natural ingredients for healthier hair,Two-in-one combo pack for complete care"
  
  4. Product Description: "64 GB ram fhd display"
  
  5. Additional Information:"*Manufacturer:* Dove, *Country of Origin:* United States, *Pricing:* $15.99"

  Evaluate the catalog for the "Dove Hair Therapy Dry Scalp Care Shampoo 380ml & Conditioner 380ml (Combo Pack)" provided by the seller. Provide ratings on a scale of 1 to 5 for the following aspects:
  Evaluate the product based on its category, features, and any additional information. Provide a comprehensive analysis and rating on a scale of 1 to 5, considering the overall quality and relevance of the catalog entry.
  Verify that all the given information points towards the same product category wise if not the score shall be reduced.
  Overall Score: Considering the individual ratings for image, title, features, product description, and additional information, provide an overall rating for the catalog on a scale of 1 to 5.
  
  Please use the provided scale where 1 is the lowest rating and 5 is the highest. Be thorough and considerate in your evaluation.feel free to give low rating.
  
  if any field is empty u can score it 0.
  you should check title field for its category from these (Electronics, Clothing and Fashion, Home and Furniture, Beauty and Personal Care, Health and Wellness, Books, Movies, and Music, Toys and Games, Automotive, Office Supplies and Stationery, Jewelry and Accessories, Food and Grocery, Pet Supplies, Crafts and Hobbies, Baby and Maternity, Travel and Luggage    ).
  important:check whether data from every field matched the category.if not rating should affect.
  important:check what the image represents ,and title ...if they dont reassemble similar product.rating should affect.mention the mismatched category.

  refer the title field ,and compare all other fields with the products descriptions available world-wide.then suggest changes in it.
  you can suggest the changes in image so that it looks more professional.
  `

  ;
  

  const imageParts = [
    fileToGenerativePart("dove-shampoo.webp", "image/webp"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  text = response.text();
  //console.log(text);
  // console.log(JSON.stringify(response));
}


async function run2() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = text + ` convert this in the below json format
  const obj = {
    title:{
        rating: "",
        suggestion:""
    },
    description:{
        rating: "",
        suggestion:""
    },
    image:{
        rating: "",
        suggestion:""
    },
    featuresAndBenefits:{
        rating: "",
        suggestion:""
    },
    additionalInformation:{
        rating: "",
        suggestion:""
    },
    overallScore:{
        rating: "",
        suggestion:""
    }
}
  
  `;
  const result = await model.generateContent([prompt]);
  const response = await result.response;
  const text1 = response.text();
  console.log(text1);
}

(async () => {
  await run();
  console.log(text);

  run2();
})();
/*  */