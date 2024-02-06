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
      

      <div className="feedback-body">
        <form className="feedback-container">
          <h1 className="feedback-heading">Give feedback</h1>
          <p className="feedback-para">
            What do you think of the Scoring experience of the catalog?
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
