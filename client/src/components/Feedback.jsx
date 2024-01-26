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

          <div class="feedback-level">
          
            <div className="level">
              <i className="sad-tear"></i>
            </div>
            <div className="level">
              <i className="las la-frown"></i>
            </div>
            <div className="level">
              <i className="lar la-meh"></i>
            </div>
            <div className="level">
              <i className="lar la-smile"></i>
            </div>
            <div className="level">
              <i className="lar la-grin"></i>
            </div>
          </div>

          <div className="feedback-msg">
            <p className="para">What are the main reasons for your rating?</p>
            <textarea name="" id=""></textarea>
          </div>

          <div className="agreement">
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                I may be contacted about this feedback{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                I'd like to help improve by joining the{" "}
                <a href="#">Research Group</a>.
              </label>
            </div>
          </div>

          <div className="buttons">
            <Button
              variant="contained"
              color="success"
              onClick={handleFeedbackSubmit}
            >
              Submit
            </Button>
            <a href="You just cancelled your to submit the feedback">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
