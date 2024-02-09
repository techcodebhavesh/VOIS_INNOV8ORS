import React, {useRef, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
hljs.registerLanguage("javascript", javascript);

const Godoc = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);


  return (
    
    <div><div className="Go-imp">
    <h1>Innovators API: Get started with Go</h1>
    <p className="small-font">This Go lang code snippet serves as an example of how to utilize the Innovators API within a Go lang environment. It demonstrates how to use the requests library to send a POST request to the specified API endpoint (http://loclhost/api/togemini/processall).
</p>
    <pre>
      <code className="javascript"  ref={codeRef}>
        {`

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
`}
      </code>

    </pre>
    <p className="small-font">
This code snippet can be integrated into your application to interact with the Innovators API and process product data accordingly.


</p>
  </div>
  </div>
  )
}

export default Godoc