const express = require('express');
const { runQuery } = require('../connection.sql.js');

const app = express();
const PORT = process.env.PORT || 5001;

// parse JSON Middleware
app.use(express.json());






const generateRandomProductId = () => {
    return Math.floor(10000000 + Math.random() * 90000000);
};

const createProductController = async (req, res) => {
    try {

        
        const name= req.body['name'];
      const title = req.body['title'];
      const description = req.body['description'];
      const image = req.body['image'];
      const featuresAndBenefits = req.body['featuresAndBenefits'];
      const additionalInformation= req.body['additionalInformation'];




      
      // Validate input (you may want to add more validation)
      if (!name || !title || !description|| !image || !featuresAndBenefits || !additionalInformation) {
        return res.status(400).send('details are required');
      }
  

      const product_id = generateRandomProductId();
      // Insert the  product into the database
  
     
     
     await runQuery('INSERT INTO products (product_id, name, title ,description ,image ,featuresAndBenefits ,additionalInformation) VALUES (?,?,?,?,?,?,?)', [product_id,name,title,description,image,featuresAndBenefits,additionalInformation]);
  
      
  
        console.log('Product created successfully');
        return res.status(201).send('Product created successfully');
    
    } catch (err) {

      console.error('Error in createProductController:', err);
      
      console.error('Error creating Product:', err);
      return res.status(500).send('Internal Server Error');
    }
  };


  module.exports = {
    createProductController,
    generateRandomProductId
  };
  