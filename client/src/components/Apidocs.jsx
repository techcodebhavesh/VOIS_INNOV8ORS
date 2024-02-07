import React from 'react'
import TextField from '@mui/material/TextField';

const apidocs = () => {
  return (
    <div>
        <h1>Quickstart</h1>
        <p>The Innovators API gives you access to cutting-edge generative AI models for a wide range of applications. The Innovators quickstarts will guide you through getting started with the Innovators API using a programming language of your choice:</p>
        <br />
        <br />
        <h2>python</h2>
        <h2>Java</h2>
        <br />
        <h1>Innovator's API: Quickstart with Python</h1>

        <p>
        Getting Started
        <br />
        Example API Request:
        </p>
        <TextField
          disabled
          id="filled-disabled"
          label="Example API Request:"
          defaultValue= 'http://localhost/apikey/auth

          Resquest body:   {"apikey": "YOUR_ACCESS_KEY" }'
        
          variant="filled"
          style={{ width: '100%' }}
        />

    </div>
  )
}

export default apidocs