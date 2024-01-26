import React from "react";
import { Link } from "react-router-dom";
import "./Feedback.css";
import Button from "@mui/material/Button";

const Feedback = () => {
  const handleFeedbackSubmit = () => {
    alert("Thanks for submitting your feedback");
    // Add any additional logic or actions here
  };

  return (
    <div>
      <div className="navbar">
        <main>
          <header className="w-full fixed z-20">
            <nav>
              <a className="align-right" href="#">
                Contact
              </a>
              <a className="align-right" href="#">
                Dashboard
              </a>
              <a className="align-right" href="#">
                About
              </a>
              <a className="align-left" href="#">
                Home
              </a>
            </nav>
            <div className="w-full h-1px bg-primary animate__animated border-b"></div>
          </header>

          <div className="w-full h-100vh bg-cover"></div>
        </main>
      </div>

      <div className="feedback-body">
        <form className="feedback-container">
          <h1 className="feedback-heading">Give feedback</h1>
          <p className="feedback-para">
            What do you think of the issue search experience within the project?
          </p>
          <div className="fb_emojies" id="emojicom-widget-inline"></div>

        </form>
      </div>
    </div>
  );
};

export default Feedback;
