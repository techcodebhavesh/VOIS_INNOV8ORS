import React from 'react';
import './services.css'; // Import your CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-section">
        <h1>API Documentation</h1>
        <ul>
          <li>
            <h3>Get API Key (API Generation)</h3>
            <p>Information on obtaining an API key for programmatic access.</p>
            <p>Required credentials for using the API.</p>
          </li>
          <li>
            <h3>API Authentication</h3>
            <p>Request format including necessary parameters.</p>
            <p>Response format with computed catalog score.</p>
          </li>
        </ul>
      </div>
      <div className="service-section">
        <h2>Codebase</h2>
        <ul>
          <li>
            <h3>API Endpoints</h3>
            <p>Explanation of endpoints for catalog scoring.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
