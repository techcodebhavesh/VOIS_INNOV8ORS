import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your stylesheet

const Login = ({ onLoginSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const apiUrl = "http://localhost:5001/api/user/login"; // Replace with your server endpoint

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#">Forget Your Password?</a>
        <button type="button" onClick={handleLogin}>
          Sign In
        </button>
      </form>
    </div>
  );
};

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const apiUrl = "http://localhost:5001/api/user/create"; // Replace with your server endpoint

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
    <div className="login-form-container sign-up">
      <form className="signup-container">
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
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

  console.log({ isLoginFormActive });

  const handleLoginSuccess = () => {
    // Handle actions after successful login
    console.log("Login successful!");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar">
          <main>
            <header className="z-20 w-full">
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
              <div className="h-1px bg-primary animate__animated w-full border-b"></div>
            </header>

            <div className="h-100vh w-full bg-cover"></div>
          </main>
        </div>
      </div>
      <div className="login-parent">
        <div className={`container-ls ${isLoginFormActive ? "" : "active"}`}>
          {isLoginFormActive ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
            <SignUp />
          )}
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Friend !</h1>
                <p>Enter your personal details to use all site features</p>
                <button
                  className={isLoginFormActive ? "hidden" : ""}
                  onClick={switchToLogin}
                >
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Welcome!</h1>

                <button
                  className={isLoginFormActive ? "" : "hidden"}
                  onClick={switchToRegister}
                >
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
