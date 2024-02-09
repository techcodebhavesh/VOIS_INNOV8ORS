import React, {useRef, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
hljs.registerLanguage("javascript", javascript);

const Jquerydoc = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <div><div className="jQuery-imp">
    <h1>Innovators API: Get started with JQuery</h1>
    <p className="small-font">
    
This jQuery code snippet serves as an example of how to utilize the Innovators API within a jQuery environment. It demonstrates how to use the requests library to send a POST request to the specified API endpoint (http://loclhost/api/togemini/processall).

</p>
    <pre>
      <code className="javascript"  ref={codeRef}>
        {`
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
`}
      </code>
    </pre>
    <p className="small-font">
    This code snippet can be integrated into your application to interact with the Innovators API and process product data accordingly.

</p>

  </div></div>
  )
}

export default Jquerydoc