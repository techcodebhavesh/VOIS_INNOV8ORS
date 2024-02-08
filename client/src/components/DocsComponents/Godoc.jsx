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
    
  </div>
  </div>
  )
}

export default Godoc