const mysql = require('mysql');
const { testSQL } = require('../models/test/test.queries.sql');
const { runQuery } = require('../connection.sql.js');

// Create a MySQL connection pool

const createUserController = async (req, res) => {
  try {
    const{ name, email, password}= req.body;
   

    // Validate input (you may want to add more validation)
    if (!name || !email || !password) {
      return res.status(400).send('Name, email, and password are required');
    }

    // Insert the user into the database

   
   
   await runQuery('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name,email,password]);

    

      console.log('User created successfully');
      return res.status(201).send('User created successfully');
  
  } catch (err) {
    console.error('Error in createUserController:', err);
    console.error('Error creating user:', err);
    return res.status(500).send('Internal Server Error');
  }
};

const loginUserController = async (req, res) => {
  try {
    const {email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }

    // Check if the user exists in the database
    const users = await runQuery('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

    // Check if the user was found
    if (users.length === 0) {
      return res.status(404).send('User not found');
    } else {
      // User found, you might want to do further checks on the password
      // For security, you should use a secure password hashing library instead of comparing plain text passwords
      console.log('Login successful');
      return res.status(200).send('Login successful');
    }

  } catch (error) {
    console.error('Error in loginUserController:', error);
    return res.status(500).send('Internal Server Error');
  }
};

//
/*const validateUser = async (uItem) => {
  try {
    if (!uItem.Name || !uItem.email) {
      return 0;
    }

    if (!await validateEmail(uItem.email)) {
      return 0;
    }

    const existUser = /* Logic to check if user exists based on uItem.Name  
//    const existUser2 = /* Logic to check if user exists based on uItem.email 

    if (existUser == -1 || existUser2 == -1) {
      return -1;
    } else if (existUser || existUser2) {
      return -2;
    }

    return 1;
  } catch (error) {
    console.error('Error in validateUser:', error);
    return -1;
  }
};
*/
async function validateEmail(email) {
  try {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      return false;
    }

    const queryResult = await new Promise((resolve, reject) => {
      con.query(
        `SELECT * FROM users WHERE email = '${email}';`,
        function (err, result, fields) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    if (queryResult[0]) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error in validateEmail:', error);
    return false;
  }
}








module.exports = {
  createUserController,
  loginUserController,
};
