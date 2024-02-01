// Import necessary libraries and styles
import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Home.css";
import OutputDashboard from "./OutputDashboard";

const Home = () => {

  return (
    <div className="page">
      <div className="area">
        <div className="navbar">
          <main>
            <header className="w-full z-20">
              <nav>
                <a className="align-right" href="#">
                  Contact
                </a>
                <Link to="./OutputDashboard" className="align-right">
                  Dashboard
                </Link>
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
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* <div className="home-header"></div> */}
      <div className="text-overlay1">
        <header>
          <h1 className="gradient-text">Innov8or's Catalog Scoring</h1>
        </header>
        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />

        <h6>
          A cutting-edge virtual platform designed to revolutionize discussions,
          collaborative work, and team dynamics
        </h6>
        <div className="cards">
          <div className="card-container">
            {/* Card 1 */}
            <Link to="/score" className="card-link">
              <div className="card">
                <div className="blog-wrapper">
                  <div className="gradient-container" />

                  <h2>Get your catalog Scored </h2>
                  <p>
                    Engage in thoughtful discussions and exchange ideas with
                    your team in real-time.
                  </p>
                  <img src="svg1.png" alt="svg1" />
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/documentation" className="card-link">
              <div className="card">
                <h2>API Documentation</h2>
                <p>Explore our API documentation</p>
                <img src="svg2.png" alt="svg1" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/AI" className="card-link">
              <div className="card">
                <h2>Subscribe to our API</h2>
                <p>
                  Unlock the full potential of our services by subscribing to
                  our API. Gain exclusive access to advanced features, priority
                  support, and seamless integration updates.
                </p>
                <img src="svg3.png" alt="svg1" />
              </div>
            </Link>
          </div>
        </div>
        <footer className="footer--light">
          <div className="footer-big">
            <div className="footer-container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="widget-about">
                      <img
                        decoding="async"
                        src="images/bg-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        There are many variations of users of YouTube available.
                      </p>
                      <ul className="contact-details">
                        <li>
                          <i className="fas fa-phone-alt"></i> Call Us:
                          <a href="#">011-23456789</a>
                        </li>
                        <li>
                          <i className="fas fa-envelope-open-text"></i>
                          <a href="#">support@scd.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="footer-menu">
                      <h4 className="footer-widget-title">Popular Category</h4>
                      <ul>
                        <li>
                          <a href="#">WordPress Theme</a>
                        </li>
                        <li>
                          <a href="#">Bootstrap Template</a>
                        </li>
                        <li>
                          <a href="#">ReactJS Template</a>
                        </li>
                        <li>
                          <a href="#">Dashboard Theme</a>
                        </li>
                        <li>
                          <a href="#">HTML5 Template</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="footer-menu">
                      <h4 className="footer-widget-title">Our Company</h4>
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">How It Works</a>
                        </li>
                        <li>
                          <a href="#">Affiliates</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Plan & Pricing</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <div className="footer-menu p-0">
                      <h4 className="footer-widget-title">Help Support</h4>
                      <ul>
                        <li>
                          <a href="#">Support Forum</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Support Policy</a>
                        </li>
                        <li>
                          <a href="#">FAQs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="context"></div>
      </div>

    </div>
  );
};

export default Home;
