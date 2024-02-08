import React, { useState } from "react";
import "./documentation.css";
import { Link } from "react-router-dom";
import Getapi from "./Getapi";
import Introduction from "./Introduction";
import About from "./About";
import Services from "./Services";
import Apidocs from "./Apidocs";
import Nodejsdoc from "./DocsComponents/Nodejsdoc";
import Phpdoc from "./DocsComponents/Phpdoc";
import Pythondoc from "./DocsComponents/pythondoc";
import Ruby from "./DocsComponents/Ruby";
import Jquerydoc from "./DocsComponents/Jquerydoc";
import Godoc from "./DocsComponents/Godoc";

const Documentation = () => {
  const [selectedContent, setSelectedContent] = useState("Introduction");

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
          <a href="#apidocs" onClick={() => handleSidebarClick("Nodejsdoc")}>
          NodeJs
          </a>
          
          <a href="#apidocs" onClick={() => handleSidebarClick("Pythondoc")}>
          Pyhton
          </a>
          <a href="#apidocs" onClick={() => handleSidebarClick("Phpdoc")}>
          PHP

          </a>
          <a href="#apidocs" onClick={() => handleSidebarClick("Jquerydoc")}>
          jQuery
          </a>
          <a href="#apidocs" onClick={() => handleSidebarClick("Godoc")}>
            Go
          </a>
          <a href="#apidocs" onClick={() => handleSidebarClick("Ruby")}>
            Ruby
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
          {selectedContent === "Nodejsdoc" && <Nodejsdoc />}
          {selectedContent === "Pythondoc" && <Pythondoc />}
          {selectedContent === "Phpdoc" && <Phpdoc />}
          {selectedContent === "Jquerydoc" && <Jquerydoc />}
          {selectedContent === "Godoc" && <Godoc />}
          {selectedContent === "Ruby" && <Ruby />}       
        
          {selectedContent === "get-apikey" && <Getapi />}
        </div>
      </div>
    </div>
  );
};

export default Documentation;



