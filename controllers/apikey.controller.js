  const express = require('express');
  const { runQuery } = require('../connection.sql.js');
  const { v4: uuidv4 } = require('uuid');

  const app = express();
//  const PORT = process.env.PORT || 5001;

  // parse JSON Middleware
  app.use(express.json());




  // Function to generate API Key and User ID
  const generateApiKeyAndUserId = async () => {
    const apiKey = uuidv4();
    const keyId = Math.floor(10000000 + Math.random() * 90000000); // Generate a random 8-digit number
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
    try {
      // Check if the API key already exists in the database
      const existingKeyResults = await runQuery('SELECT * FROM api_keys WHERE api_key = ?;', [apiKey]);
      if (existingKeyResults.length > 0) {
        // Handle the case where the key already exists
        console.log('API key already exists:', apiKey);
        return { error: 'API key already exists.' };
      }
  
      // Insert the new API key and user ID
      await runQuery('INSERT INTO api_keys (api_key, key_id, created_at) VALUES (?, ?, ?);', [apiKey, keyId, createdAt]);
      return { apiKey, keyId };
    } catch (err) {
      console.error('Error generating API key:', err);
      return { error: 'Error generating API key.' };
    }
  };
  
  // Generate API Key and User ID - POST method for /gen route

  const generate = async (req, res) => {
  
    try {
      const result = await generateApiKeyAndUserId();
  
      if (result.error) {
        return res.status(500).json({ error: result.error });
      }
  
      res.status(201).json(result);
    } catch (error) {
      console.error('Error in /gen route:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  
  
};
  
    

const authenticateApiKeycheck = async (apiKey) => {
  if (!apiKey) {
    return { error: 'API key is missing.' };
  }

  try {
    const results = await runQuery('SELECT * FROM api_keys WHERE api_key = ?;', [apiKey]);
    const row = results[0];

    if (!row) {
      return { error: 'Invalid API key.' };
    }

    return { apiKeyDetails: row };
  } catch (err) {
    console.error('Internal server error:', err);
    return { error: 'Internal server error.' };
  }
};

const authenticateApiKey = async (req, res) => {
  try {
    const apiKey = req.body['x-api-key'];
    const result = await authenticateApiKeycheck(apiKey);

    if (result.error) {
      return res.status(401).json({ error: result.error });
    }

    res.json({ message: 'Access granted!', apiKeyDetails: result.apiKeyDetails });
  } catch (err) {
    console.error('Error in /gen route:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


/*
  //if needed
  const retrieveApiKey = async () => {
  // Retrieve API Key - GET method
  app.get('/get-key', async (req, res) => {
    // Logic to retrieve an existing API key from the database (if requiredd)
  
    try {
      const results = await runQuery('SELECT api_key FROM api_keys LIMIT 1;');
      const apiKey = results[0].api_key;
      res.status(200).json({ apiKey });
    } catch (err) {
      console.error('Error retrieving API key:', err);
      return res.status(500).json({ error: 'Error retrieving API key.' });
    }
  });

      // Logic to retrieve an existing API key from the database (if requiredd)
    
      try {
        const results = await runQuery('SELECT api_key FROM api_keys LIMIT 1;');
        const apiKey = results[0].api_key;
        res.status(200).json({ apiKey });
      } catch (err) {
        console.error('Error retrieving API key:', err);
        return res.status(500).json({ error: 'Error retrieving API key.' });
      }
    
  }*/


  module.exports = {
      generateApiKeyAndUserId,
    authenticateApiKey,
    authenticateApiKeycheck,
    generate

   // retrieveApiKey
  };
