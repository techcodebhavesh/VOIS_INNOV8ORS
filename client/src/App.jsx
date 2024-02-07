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
import MultipleProductUpload from "./components/MultipleProductUpload.jsx";
import OutputDashboard from "./components/OutputDashboard.jsx";
import Feedback from "./components/Feedback.jsx";
import Getapi from "./components/Getapi.jsx";
import Layout from "./components/Layout.jsx";
import Banner from "./components/DashboardComponents/Banner.jsx";

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
          <Route path="Login" element={<Login />} />
          <Route path="score" element={<Score />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="demo/products" element={<MultipleProductUpload />} />
          <Route path="demo/display" element={<OutputDashboard />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="getapi" element={<Getapi />} />
          <Route path="Banner" element={<Banner />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
