import React from 'react';
import Button from '@mui/material/Button';

const SampleTemplate = () => {
  const handleDownload = () => {
    // Assuming your CSV file is named 'sample.csv' and is located in the 'public' directory
    const downloadLink = './Trial_pdt.csv';
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    // Set the href attribute to the download link
    anchor.href = downloadLink;
    // Set the download attribute to specify the filename
    anchor.download = 'Trial_pdt.csv';
    // Programmatically click the anchor element to trigger the download
    anchor.click();
  };

  return (
    <div>
      <h1>Sample template</h1>
      <h2>We assume that the input data format should be as provided in the following CSV file</h2>
      <br />

      <Button variant="contained" color="success" onClick={handleDownload}>
        Download Template
      </Button>

      <h2>Download and edit to get your catalogue scored</h2>
    </div>
  );
};

export default SampleTemplate;
