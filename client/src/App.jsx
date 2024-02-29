import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Score from "./components/Score";
import Documentation from "./components/Documentation.jsx";
import Feedback from "./components/Feedback.jsx";
import Getapi from "./components/Getapi.jsx";
import Layout from "./components/Layout.jsx";
import Profile from "./components/Profile.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import About from "./components/About.jsx";
import Trial from "./components/Trial.jsx";

const App = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Use the navigate function from the outer scope
    navigate("/home");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />

          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="" element={<RequireAuth />}>
            <Route path="score" element={<Score />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="documentation" element={<Documentation />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="About" element={<About />} />
          <Route path="trial" element={<Trial />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
