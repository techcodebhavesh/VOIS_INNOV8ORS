



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


const { run } = require('./geminirun.controller.js');

const processEntriesHandler = async (req, res) => {
    try {
        const inputData = req.body.data;

        if (!inputData || !Array.isArray(inputData)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const results = {};

        for (const entry of inputData) {
            try {
                const textResult = await run(entry);

                const cleanedText = textResult.substring(8, textResult.length - 3);


                // Log the content of textResult before parsing
                console.log('Text Result:', cleanedText);

                // Convert the text result to JSON
                const resultObject = JSON.parse(cleanedText);
                results[entry.ProductID] = resultObject;
            } catch (error) {
                console.error('Error processing entry:', error);
                // results.push({ status: 'error', error: 'An error occurred processing the entry' });
            }
        }

        res.status(200).json({ data: results });
    } catch (error) {
        console.error('Error processing entries:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    processEntriesHandler
    // retrieveApiKey
};
