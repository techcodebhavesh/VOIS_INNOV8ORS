const express = require('express');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5003;

// MySQL Database Setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'password', 
  database: 'ondc1', 
});

//  parse JSON Middleware
app.use(express.json());

// authenticate API key  Middleware
const authenticateApiKey = (req, res, nexqt) => {
  const apiKey = req.header('x-api-key');
  if (!apiKey) {
    return res.status(401).json({ error: 'API key is missing.' });
  }

  db.query('SELECT * FROM api_keys WHERE key_value = ?', [apiKey], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error.' });
    }

    const row = results[0];
    cp

    if (!row) {
      return res.status(401).json({ error: 'Invalid API key.' });
    }

    // Attach the API key details to the request for further use
    req.apiKeyDetails = row;
    next();
  });
};
// Generate API Key - POST method
app.post('/generate-key', (req, res) => {
    const apiKey = uuidv4();
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format the date
  
    db.query('INSERT INTO api_keys (key_value, created_at) VALUES (?, ?)', [apiKey, createdAt], (err) => {
      if (err) {
        console.error('Error generating API key:', err);
        return res.status(500).json({ error: 'Error generating API key.' });
      }
  
      res.status(201).json({ apiKey });
    });
  });
  
  // Generate API Key - GET method
  app.get('/get-key', (req, res) => {
    const apiKey = uuidv4();
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format the date
  
    db.query('INSERT INTO api_keys (key_value, created_at) VALUES (?, ?)', [apiKey, createdAt], (err) => {
      if (err) {
        console.error('Error generating API key:', err);
        return res.status(500).json({ error: 'Error generating API key.' });
      }
  
      res.status(201).json({ apiKey });
    });
  });
  

// protected route    (as of now)
app.get('/protected', authenticateApiKey, (req, res) => {
  res.json({ message: 'Access granted!', apiKeyDetails: req.apiKeyDetails });
});

// server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
