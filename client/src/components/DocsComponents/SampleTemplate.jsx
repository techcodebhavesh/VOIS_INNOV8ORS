import React from 'react';
import Button from '@mui/material/Button';
// const download = require('download'); 

const SampleTemplate = () => {
  return (
    <div>
        <h1>Sample template</h1>
        <h2>We assume that the input data format should be as provided in following CSV file </h2>
        <br />

        <Button variant="contained" color="success">
        Download Template
      </Button>

        <h2>Download and edit ..To get your catalog scored</h2>
    </div>
  )
}

export default SampleTemplate