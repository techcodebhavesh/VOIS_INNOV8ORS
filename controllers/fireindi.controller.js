const express = require('express');
const multer = require('multer');
const app = express();
//const port = 3000;

const admin = require('firebase-admin');
const serviceAccount = require('../fireservicekeyindi.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://ondch-a7319.appspot.com',
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const handleFileUpload = async (req, res) => {
  // Assuming you have a product number in the request body or query parameter
  const productNumber = req.body.productNumber || req.query.productNumber || '1'; // Default to '1' if not provided

  console.log(`Uploading images for product number: ${productNumber}`);
  const bucket = admin.storage().bucket();

  // Use upload.array directly in the route handler
  upload.array('images', 5)(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error uploading files!');
    }

    const files = req.files;
    const folderName = `product_${productNumber}`;
    let uploadedFilesCount = 0;

    for (const file of files) {
      const filePath = `${folderName}/${file.originalname}`;
      const blob = bucket.file(filePath);
      const blobStream = blob.createWriteStream();

      blobStream.on('error', (error) => {
        console.error(error);
        res.status(500).send('Error uploading file!');
      });

      blobStream.on('finish', () => {
        // File upload successful
        uploadedFilesCount++;

        // Check if all files have been uploaded
        if (uploadedFilesCount === files.length) {
          res.status(200).send('All files uploaded!');
        }
      });

      blobStream.end(file.buffer);
    }
  });
};


// app.post('/upload', upload.array('images', 5), handleFileUpload);

module.exports = {
    handleFileUpload
    // retrieveApiKey
};
