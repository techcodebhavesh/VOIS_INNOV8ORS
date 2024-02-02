import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./loginsignup.css";
import img1 from "./images/pdt1-removebg-preview.png";
import img2 from "./images/pdt2-removebg-preview.png";
import img3 from "./images/pdt3-removebg-preview.png";
import img4 from "./images/pdt4-removebg-preview.png";
import img5 from "./images/pdt5-removebg-preview.png";
import img6 from "./images/pdt6-removebg-preview.png";

import platfrom from "./images/loginbg-platfrom.png";

import user_icon from "./Assets/Assets/person.png";
import email_icon from "./Assets/Assets/email.png";
import password_icon from "./Assets/Assets/password.png";

const LoginSignup = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [introText, setIntroText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the imgIndex every 10 seconds
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const text = "Welcome to catalog scoring innovator's API";
    const typingSpeed = 100; // Speed in milliseconds

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setIntroText(text.substring(0, index));
        index += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSignupLoginClick = async () => {
    try {
      const apiUrl = `http://localhost:3000/user/${action.toLowerCase()}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        navigate("/home");
        onLoginSuccess && onLoginSuccess();
      } else {
        const errorMessage = await response.text();
        console.error("Failed to send data to the server:", errorMessage);
        alert(`Error!!`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        // backgroundImage: 'url("loginbg.jpg")',
        backgroundSize: "cover",
      }}
    >
      <link href='https://fonts.googleapis.com/css?family=Andada Pro' rel='stylesheet'></link>
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel='stylesheet'></link>
      <div className="intro typing">
        <h1>CatalogCraft: Elevating Catalogue Quality</h1>
        <h2>Catalog_Craft</h2>
      </div>
      <h2>
        Welcome to CatalogCraft, A solution for enhancing catalogue quality in
        Retail Commerce. Our platform tackles challenges in assessing catalogues
        from Seller Apps, ensuring no more missing images or compliance issues.
      </h2>
      <h3> Log in now to elevate your catalogue experience!</h3>
      <div className="container-loginsignup">
        <div className="box">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {action === "SignUp" ? (
            <div></div>
          ) : (
            <div className="forgotPassword">
              Lost Password?<span>Click Here!</span>
            </div>
          )}

          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("SignUp");
                action === "SignUp" && handleSignupLoginClick();
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "SignUp" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
                action === "Login" && handleSignupLoginClick();
              }}
            >
              Login
            </div>
          </div>
        </div>
        <div className="productContainer">
          {/* <img src="../components/Assets/loginbg-platfrom.png" alt="platform" /> */}

          <div className="bounce-container-parent">
            <div class="bounce-container">
              <img
                src={images[imgIndex]}
                alt="Bouncing Image"
                class="image-bounce"
              />
            </div>
            <img src={platfrom} alt="Platform" className="platform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
