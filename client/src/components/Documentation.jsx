import React, { useState } from "react";
import "./documentation.css";
import { Link } from "react-router-dom";
import Getapi from "./Getapi";
// Introduction from "./Introduction";
// import AboutContent from './AboutContent';
// import ServicesContent from './ServicesContent';
// import ContactContent from './ContactContent';
// import ApiDocsContent from './ApiDocsContent';

const Documentation = () => {
  const [selectedContent, setSelectedContent] = useState("home");

  const handleSidebarClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="body-docm">
      <div className="navbar">
        <main>
          <header className="w-full z-20">
            <nav>
              <a
                className="align-right"
                href="#"
                onClick={() => handleSidebarClick("contact")}
              >
                Contact
              </a>
              <a
                className="align-right"
                href="#"
                onClick={() => handleSidebarClick("dashboard")}
              >
                Dashboard
              </a>
              <a
                className="align-right"
                href="#"
                onClick={() => handleSidebarClick("about")}
              >
                About
              </a>
              <a
                className="align-left"
                href="#"
                onClick={() => handleSidebarClick("home")}
              >
                Home
              </a>  
            </nav>
            <div className="w-full h-1px bg-primary animate__animated bor der-b"></div>
          </header>
        </main>
      </div>
      <div className="body-doc">
        <div className="sidebar">
          <a href="#Introduction" onClick={() => handleSidebarClick("Introduction")}>
            Introduction
          </a>
          <a href="#about" onClick={() => handleSidebarClick("about")}>
            About
          </a>
          <a href="#services" onClick={() => handleSidebarClick("services")}>
            Services
          </a>
          <a href="#contact" onClick={() => handleSidebarClick("contact")}>
            Contact
          </a>
          <a href="#api-docs" onClick={() => handleSidebarClick("api-docs")}>
            API Documentation
          </a>
          <a
            href="#get-apikey"
            onClick={() => handleSidebarClick("get-apikey")}
          >
            Get API key
          </a>
        </div>

        {/* Render content based on selected link in the body */}
        <div className="content">
    
          {/* 
        {selectedContent === 'about' && <AboutContent />}
        {selectedContent === 'services' && <ServicesContent />}
        {selectedContent === 'contact' && <ContactContent />}
        {selectedContent === 'api-docs' && <ApiDocsContent />} */}
          {selectedContent === "get-apikey" && <Getapi />}
        </div>
      </div>
    </div>
  );
};

export default Documentation;



