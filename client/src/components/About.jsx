import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About</h1>
        <p>Background information about the platform.</p>
        <p>Team details and mission statement.</p>
      </div>
      <div className="about-section">
        <h2>User Interactions</h2>
        <p>Clicking on catalog assessment sections provides detailed information on each parameter and its weight.
Users can input specific catalog details to receive an aggregate score.
Intuitive navigation through links in the sidebar.
</p>
      </div>
    </div>
  );
}

export default About;
