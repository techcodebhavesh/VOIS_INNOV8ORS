import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar">
          <main>
            <header className="z-20 w-full">
              <nav>
                <Link className="align-right" to="contact">
                  Contact
                </Link>
                <Link className="align-right" to="score">
                  Dashboard
                </Link>
                <Link className="align-right" to="about">
                  About
                </Link>
                <Link className="align-left" to="">
                  Home
                </Link>
              </nav>
              <div className="h-1px bg-primary animate__animated w-full border-b"></div>
            </header>

            <div className="h-100vh w-full bg-cover"></div>
          </main>
        </div>
      </div>
      <Outlet />

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
    </>
  );
};

export default Layout;
