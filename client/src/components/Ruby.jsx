import React from 'react';
import TextField from "@mui/material/TextField";

const Ruby = () => {
  return (
    <div><div className="Ruby-imp">
    <h1>Innovators API: Get started with Ruby</h1>

    <TextField
      disabled
      id="outlined-basic"
      label="Code example with Ruby"
      defaultValue={`require 'net/http'
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

export default Ruby