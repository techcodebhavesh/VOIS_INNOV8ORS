import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

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
                      Elevate your catalog experience. Try CatalogScore now.
                      </p>
                      <ul className="contact-details">
                        <li>
                          <i className="fas fa-phone-alt"></i> Call Us:
                          <br/>
                          <a href="#">+91 9921318237
                          </a>
                          <br/>
                          <a href="#">+91 9823632117
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-envelope-open-text"></i>
                          <br/>
                          <a href="#">mayur.agarwal22@vit.edu</a>
                          <br/>
                          <a href="#">bhavesh.agone22@vit.edu</a>
                          <br/>
                          <a href="#">vaishnavi.mahindrakar22@vit.edu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6"style={{ width: "15%" }}>
                  <div className="footer-widget">
                    <div className="footer-menu">
                      <h4 className="footer-widget-title">Popular Category</h4>
                      <ul>
                        <li>
                          <a href="#">Check Score</a>
                        </li>
                        <li>
                          <a href="#">Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Feedback</a>
                        </li>
                        <li>
                          <a href="#">Get suggessions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6"style={{ width: "15%" }}>
                  <div className="footer-widget">
                    <div className="footer-menu">
                      <h4 className="footer-widget-title">Our Team</h4>
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">How It Works</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
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
