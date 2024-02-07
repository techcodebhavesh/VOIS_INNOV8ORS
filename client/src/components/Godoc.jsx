import React from 'react';
import TextField from "@mui/material/TextField";

const Godoc = () => {
  return (
    <div><div className="Go-imp">
    <h1>Innovators API: Get started with Go</h1>

    <TextField
      disabled
      id="outlined-basic"
      label="Code example with Go"
      defaultValue='
      package main

import (
"bytes"
"encoding/json"
"fmt"
"io/ioutil"
"net/http"
)

func main() {
// Define your data
data := map[string]interface{}{
    // Your data here
}

// Define the URL
url := "http://example.com/api/togemini/processall"

// Convert data to JSON
jsonData, err := json.Marshal(data)
if err != nil {
    fmt.Println("Error marshalling JSON:", err)
    return
}
// Create request body
reqBody := bytes.NewBuffer(jsonData)

// Make HTTP POST request
resp, err := http.Post(url, "application/json", reqBody)
if err != nil {
    fmt.Println("Error making POST request:", err)
    return
}
defer resp.Body.Close()

// Read response body
body, err := ioutil.ReadAll(resp.Body)
if err != nil {
    fmt.Println("Error reading response body:", err)
    return
}

// Print response body
fmt.Println("Response:", string(body))
}
      
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

  </div>
  </div>
  )
}

export default Godoc