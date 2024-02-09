import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Our Solution</h1>
        <p>Our team is dedicated to solving the challenge of ensuring catalogue quality for Buyer Apps in the open network. We understand the difficulties buyers face in assessing the quality of catalogues received from Seller Apps, especially given the large volume of items and the lack of direct connection with sellers.</p>
        <p>Our mission is to create a transparent and efficient catalog scoring mechanism that assesses compliance, correctness, and completeness at an aggregate level. By defining granular assessment parameters and weights, we aim to provide buyers with an objective score for each merchant's catalogue.</p>
      </div>
      <div className="about-section">
        <h2>User Interactions</h2>
        <p>Our solution empowers users with intuitive interactions:</p>
        <ul>
          <li>Clicking on catalog assessment sections provides detailed information on each parameter and its score.</li>
          <li>Users can input specific catalog details to receive an aggregate score.</li>
          <li>Intuitive navigation through links in the sidebar enhances user experience.</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>Deliverables</h2>
        <p>Our solution includes:</p>
        <ul>
          <li>A transparent and extensible catalog scoring mechanism with defined parameters and weights.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
