import React, { useState } from "react";
import "./Login.css"; // Import your stylesheet

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   async () => {
  //     try {
  //       const apiUrl = `http://localhost:3000/user/${action.toLowerCase()}`;

  //       const response = await fetch(apiUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           password,
  //         }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);

  //         navigate("/home");
  //         onLoginSuccess && onLoginSuccess();
  //       } else {
  //         const errorMessage = await response.text();
  //         console.error("Failed to send data to the server:", errorMessage);
  //         alert(`Error!!`);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   onLoginSuccess();
  // };

  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

const LoginPage = () => {
  const [isLoginFormActive, setIsLoginFormActive] = useState(true);

  const switchToRegister = () => {
    setIsLoginFormActive(false);
  };

  const switchToLogin = () => {
    setIsLoginFormActive(true);
  };

  const handleLoginSuccess = () => {
    // Handle actions after successful login
    console.log("Login successful!");
  };

  return (
    <>
      <div className="navbar">
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
      </div>
      <div className="login-parent">
      <div className="login-h1">Welcome</div>
        <div className={`container ${isLoginFormActive ? "" : "active"}`}>

          {isLoginFormActive ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
            <div className="login-form-container sign-up">
              <form>
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password"></input>
                <button>Sign Up</button>
              </form>
            </div>
          )}
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back !</h1>
                <p>Enter your personal details to use all site features</p>
                <button className="hidden" onClick={switchToLogin}>
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Welcome, Friend!</h1>

                <button className="hidden" onClick={switchToRegister}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
