import React from 'react';
import TextField from "@mui/material/TextField";

const Jquerydoc = () => {
  return (
    <div><div className="jQuery-imp">
    <h1>Innovators API: Get started with JQuery</h1>

    <TextField
      disabled
      id="outlined-basic"
      label="Exaample using Jquery"
      defaultValue='
      // Define your data
var data = {
// Your data here
};

// Define the URL
var url = "http://example.com/api/togemini/processall";

// Perform HTTP POST request
$.ajax({
url: url,
type: "POST",
contentType: "application/json",
data: JSON.stringify({ data: data }),
success: function(response) {
    console.log("Request successful");
    console.log(response);
    // Process response data here
},
error: function(xhr, status, error) {
    console.error("Request failed:", error);
}
});

      
'
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

  </div></div>
  )
}

export default Jquerydoc