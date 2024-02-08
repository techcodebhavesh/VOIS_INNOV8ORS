import React, {useRef, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
hljs.registerLanguage("javascript", javascript);

const Ruby = () => {
  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <div><div className="Ruby-imp">
    <h1>Innovators API: Get started with Ruby</h1>

    <pre>
      <code className="javascript"  ref={codeRef}>
        {`
require 'json'
      
# Define your data
data = {
    # Your data here
}

# Define the URL
url = URI("http://example.com/api/togemini/processall")

# Convert data to JSON
json_data = data.to_json

# Create HTTP request
request = Net::HTTP::Post.new(url)
request.content_type = "application/json"
request.body = json_data

# Send HTTP request
response = Net::HTTP.start(url.hostname, url.port) do |http|
    http.request(request)
end

# Check response
if response.code == '200'
    puts "Request successful"
    puts response.body
    # Process response data here
else
    puts "Request failed with status code: #{response.code}"
    puts response.body
end`}
      </code>
    </pre>

    

  </div></div>
  )
}

export default Ruby