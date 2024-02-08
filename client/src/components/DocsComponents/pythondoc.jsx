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
    

    <pre>
      <code className="javascript" ref={codeRef}>
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
  
    </div></div>
  )
}

export default Pythondoc