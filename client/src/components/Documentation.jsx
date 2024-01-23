import React from 'react';
import "./documentation.css"

const Documentation = () => {
  return (
    <div className="body-docm">
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
      <div className="sidebar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
      <a href="#api-docs">API Documentation</a>
    </div>
      
    </div>
    
  )
}

export default Documentation