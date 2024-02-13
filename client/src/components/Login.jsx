import React, { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import "./Login.css"; // Import your stylesheet
import {
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../base";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-uuid";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./context/auth/AuthState";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.alert("Login successful!");
        navigate("/"); // Redirect to home page or any desired location
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage); // Display error message in alert
      });
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
  const { currentUser } = useAuth();

  // Function to search for a given API key
  async function searchApiKey(apiKey) {
    const q = query(collection(db, "users"), where("apiKey", "==", apiKey));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      console.log("API key exists");
      return true;
    } else {
      console.log("API key does not exist");
      return false;
    }
  }

  const handleSignUp = async () => {
    console.log({ name, email, password });
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          window.alert("Sign up successful!");
          updateProfile(user, {
            displayName: name,
          })
            .then(async () => {
              // Profile updated!
              // ...

              let apiKey = uuid();
              while (await searchApiKey(apiKey)) {
                apiKey = uuid();
              }

              await setDoc(doc(db, "users", user.uid), {
                apiKey: apiKey,
                apiCalled: 0,
                apiCalledFails: 0,
                apiCalledSuccess: 0,
              });
            })
            .catch((error) => {
              // An error occurred
              // ...
              window.alert(error.message); // Display error message in alert
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          window.alert(errorMessage); // Display error message in alert
        });
    }
  };

  function handleSignOut() {
    if (currentUser) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          window.alert("Sign out successful!");
        })
        .catch((error) => {
          // An error happened.
          window.alert(error.message); // Display error message in alert
        });
    }
  }
  // currentUser && handleSignOut();

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
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="login-parent">
        <div className={`container-ls ${isLoginFormActive ? "" : "active"}`}>
          {isLoginFormActive ? (
            <Login />
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
        {Boolean(currentUser) ? (
          <Navigate to="/" state={{ from: location }} replace />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default LoginPage;

