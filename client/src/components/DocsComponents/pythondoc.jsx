import React from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const pythondoc = () => {
  return (
    <div><div className="pythom-imp">
    <h1>Innovator's API: Quickstart with PYTHON</h1>
    
    <TextField
        disabled
        id="outlined-basic"
        label="Imports"
        defaultValue='
        import requests
        import json
        
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

<TextField
        disabled
        id="outlined-basic"
        label="URL"
        defaultValue='
        url ="http://example.com/api/togemini/processall"
        
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


<TextField
disabled
id="outlined-basic"
label="Example"
defaultValue={`
# Define headers
headers = {
  "Content-Type": "application/json"
}

# Assume 'data' is obtained from the request body
data = {
  # Your data here
}

# Convert data to JSON string
payload = json.dumps({"data": data})

# Perform POST request
response = requests.post(url, headers=headers, data=payload)

# Check response status
if response.status_code == 200:
  print("Request successful")
  print(response.json())  # Print response data
else:
  print("Request failed with status code:", response.status_code)
  print(response.text)  # Print error message if any
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


    </div></div>
  )
}

export default pythondoc