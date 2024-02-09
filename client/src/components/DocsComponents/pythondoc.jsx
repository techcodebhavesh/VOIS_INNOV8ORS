import React, {useRef, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
hljs.registerLanguage("javascript", javascript);

const Pythondoc = () => {
  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <div><div className="pythom-imp">
    <h1>Innovator's API: Quickstart with PYTHON</h1>
    <p className="small-font">
This Python code snippet serves as an example of how to utilize the Innovators API within a Python environment. It demonstrates how to use the requests library to send a POST request to the specified API endpoint (http://loclhost/api/togemini/processall).</p>
    
    

    <pre>
      <code className="javascript" ref={codeRef} style={{borderRadius:'10px',margin:'px'}}>
        {`
 #import requests
 #import json

 url ="http://example.com/api/togemini/processall"

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
      </code>
    </pre>
    <p className="small-font">
    This code snippet can be integrated into your application to interact with the Innovators API and process product data accordingly.

</p>
    

  
    </div></div>
  )
}

export default Pythondoc