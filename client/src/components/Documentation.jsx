import React, { useState } from "react";
import "./documentation.css";
import { Link } from "react-router-dom";
import Getapi from "./Getapi";
import Introduction from "./Introduction";
import About from "./About";
import Services from "./Services";
import Apidocs from "./Apidocs";

const Documentation = () => {
  const [selectedContent, setSelectedContent] = useState("home");

  const handleSidebarClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="body-docm">


      <div className="body-doc">
        <div className="sidebar">
          <a href="#Introduction" onClick={() => handleSidebarClick("Introduction")}>
            Introduction
          </a>
          <a href="#services" onClick={() => handleSidebarClick("services")}>
            Services
          </a>
          <a href="#apidocs" onClick={() => handleSidebarClick("apidocs")}>
            API Documentation
          </a>
          <a
            href="#get-apikey"
            onClick={() => handleSidebarClick("get-apikey")}
          >
            Get API key
          </a>
        </div>
        
        <div className="content">
        
          {selectedContent === 'Introduction' && <Introduction />}
          {selectedContent === 'services' && <Services />}
          {selectedContent === 'apidocs' && <Apidocs />}
          {selectedContent === "get-apikey" && <Getapi />}
        </div>
      </div>
    </div>
  );
};

export default Documentation;



