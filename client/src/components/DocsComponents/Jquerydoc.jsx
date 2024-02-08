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
    

  </div></div>
  )
}

export default Jquerydoc