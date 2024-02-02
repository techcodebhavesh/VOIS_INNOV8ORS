const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const fs = require('fs');
const transportHandler = async (req, res) => {
    const data = req.body.data;

    if (!data) {
        res.status(400).json({ error: 'Missing data in request body' });
        return;
    }

    send_data(data, (error, ratingsObject) => {
        if (!error) {
            res.json({ ratings: ratingsObject });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
};

const send_data = async (jsonArray, callback) => {
    if (!jsonArray) {
        callback(new Error('Missing jsonArray'), null);
        return;
    }
    
    // Parse the JSON string into a JSON object
    const parsedJsonArray = JSON.parse(jsonArray);
    
    const ratingsObject = {};
    
    for (const key of Object.keys(parsedJsonArray)) {
        const entry = parsedJsonArray[key];
        try {
            const entryRatingsArray = Object.entries(entry).map(([parameter, jsonObject], index) => {
                if (jsonObject && jsonObject.hasOwnProperty('rating')) {
                    console.log(parameter + ' rating:', jsonObject.rating);
                    return jsonObject.rating;
                } else {
                    console.error('Missing rating for parameter at index', index, ':', parameter);
                    return null;
                }
            });
    
            ratingsObject[key] = entryRatingsArray;
        } catch (error) {
            console.error('Error processing entry:', error);
        }
    }
    callback(null, ratingsObject);
};



//     fs.readFile('cleaned_data.json', 'utf-8', (error, data) => {
//         if (error) {
//             console.error('Error reading JSON file:', error);
//             callback(error, null);
//             return;
//         }

//         try {
//             const jsonData = JSON.parse(data);

//             const ratingsArray = jsonArray.map((jsonObject) => {
//                 const parameter = jsonObject.parameter;
//                 if (jsonData.hasOwnProperty(parameter) && jsonData[parameter].hasOwnProperty('rating')) {
//                     console.log(parameter + ' rating:', jsonData[parameter].rating);
//                     return jsonData[parameter].rating;
//                 } else {
//                     console.error('Invalid parameter or missing rating for:', parameter);
//                     return null;
//                 }
//             });

//             callback(null, ratingsArray);
//         } catch (jsonError) {
//             console.error('Error parsing JSON:', jsonError);
//             callback(jsonError, null);
//         }
//     });
// }
// // Example usage with a callback
// // Example usage without a callback
// const inputArray = [
//     { parameter: 'title' },
//     { parameter: 'image' },
//     { parameter: 'featuresAndBenefits' },
//     { parameter: 'additionalInformation' },
//     { parameter: 'overallScore' }
    
//     // Add more objects as needed
// ];

// send_data(inputArray, (error, ratingsArray) => {
//     if (!error) {
//         console.log('Ratings:', ratingsArray);
//     } else {
//         console.error('Error:', error);
        
//     }
// });


module.exports = {
    transportHandler
    // retrieveApiKey
};
