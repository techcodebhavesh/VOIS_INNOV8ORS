import React from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const Phpdoc = () => {
  return (
    <div><div className="php-imp">
    <h1>Innovators API: Get started with PHP</h1>

    <TextField
      disabled
      id="outlined-basic"
      label="CODE EXAMPLE PHP

      "
      defaultValue={`<?php
      // Define your data
      $data = array(
          // Your data here
      );
      
      // Define the URL
      $url = 'http://example.com/api/togemini/processall';
      
      // Convert data to JSON string
      $data_string = json_encode(array('data' => $data));
      
      // Initialize cURL session
      $ch = curl_init($url);
      
      // Set the request method to POST
      curl_setopt($ch, CURLOPT_POST, true);
      
      // Set the request body
      curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
      
      // Set the content type header
      curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          'Content-Type: application/json',
          'Content-Length: ' . strlen($data_string))
      );
      
      // Return response instead of outputting it
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      
      // Execute the request
      $result = curl_exec($ch);
      
      // Check for errors
      if(curl_errno($ch)) {
          echo 'Error: ' . curl_error($ch);
        }

        // Close cURL session
        curl_close($ch);
        
        // Display the result
        echo $result;
        ?>
        
      `}
      variant="filled"
      multiline
      sx={{
        "& .MuiInputBase-input": {
          color: "black", // Change color as needed
        },
        "& .MuiInputLabel-root": {
          color: "blue", // Change color as needed
        },
      }}
      style={{ width: "80%", margin: "3%" }}
    />


  </div>
</div>
  )
}

export default Phpdoc