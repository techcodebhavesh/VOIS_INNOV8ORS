import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import { useAuth } from "./context/auth/AuthState";
import { auth } from "../base";
import { signOut } from "firebase/auth";
import MyAvatar from "./MyAvatar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";

const Layout = () => {
  const { currentUser } = useAuth();
  const [anchor, setanchor] = useState(false);
  const [drawer, setdrawer] = useState(false);

  function handleSignOut() {
    if (currentUser) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  }

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setdrawer((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <main>
          <header className="z-20 w-full">
            <nav>
              <div className="nav-short-width">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </div>
              <div className="nav-full-width">
                {currentUser ? (
                  <MyAvatar />
                ) : (
                  <Link className="align-right" to="login">
                    Login
                  </Link>
                )}
                <Link className="align-right" to="feedback">
                  Feedback
                </Link>
                <Link className="align-right" to="documentation">
                  Documentation
                </Link>
                <Link className="align-right" to="score">
                  Get Score
                </Link>
                <Link className="align-left" to="">
                  Home
                </Link>
              </div>
            </nav>
            <div className="h-1px bg-primary animate__animated w-full border-b"></div>
          </header>
          <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
            <Box
              sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
              }}
              role="presentation"
              // onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <List>
                <Link to="">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="score">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <CategoryIcon />
                      </ListItemIcon>
                      <ListItemText primary="Get Score" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="documentation">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <MenuBookIcon />
                      </ListItemIcon>
                      <ListItemText primary="Documentation" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="feedback">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FeedbackIcon />
                      </ListItemIcon>
                      <ListItemText primary="Feedback" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                {!currentUser && (
                  <Link to="login">
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                )}
              </List>
              {currentUser && (
                <>
                  <Divider />
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MyAvatar />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </>
              )}
            </Box>
          </Drawer>

          <div className="h-100vh w-full bg-cover"></div>
        </main>
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
                        <br />
                        <a href="#">+91 9921318237</a>
                        <br />
                        <a href="#">+91 9322087344</a>
                        <br />
                        <a href="#">+91 9823632117</a>
                      </li>
                      <li>
                        <i className="fas fa-envelope-open-text"></i>
                        <br />
                        <a href="#">mayur.agarwal22@vit.edu</a>
                        <br />
                        <a href="#">bhavesh.agone22@vit.edu</a>
                        <br />
                        <a href="#">vaishnavi.mahindrakar22@vit.edu</a>
                        <br />
                        <a href="#">kamlakant.aryan22@vit.edu</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 row-child-2">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Popular Category</h4>
                    <ul>
                      <li>
                        <Link to="Score">Check Score</Link>
                      </li>
                      <li>
                        <Link to="Documentation">Documentation</Link>
                      </li>

                      <li>
                        <Link to="Feedback">Feedback</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 row-child-3">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Our Team</h4>
                    <ul>
                      <li>
                        <Link to="About">About Us</Link>
                      </li>
                      <li>
                        <Link to="">Home</Link>
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
