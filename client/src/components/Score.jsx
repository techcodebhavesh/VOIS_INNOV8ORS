import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Score.css";
import MultipleProductUpload from "./MultipleProductUpload";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import uploadimg from "./Assets/uploadimg.png";
import SingleProductUpload from "./SingleProductUpload";

const TabContent1 = () => <SingleProductUpload />;
const TabContent2 = () => <MultipleProductUpload />;

const Score = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("#tab1");

  const handleTabClick = (s) => {
    setActiveTab(s);
  };

  return (
    <div className="body">
      <header className="score-header">
        <h1>Innov8or's Catalog Scoring</h1>
        <div className="tabs" ref={tabsRef}>
          <div
            onClick={() => handleTabClick("#tab1")}
            className={activeTab === "#tab1" ? "active" : ""}
          >
            Upload Catalog
          </div>
          <div
            onClick={() => handleTabClick("#tab2")}
            className={activeTab === "#tab2" ? "active" : ""}
          >
            Upload Multiple Catalog
          </div>
        </div>
      </header>
      <div className="tab-content">
        {activeTab === "#tab1" && <TabContent1 />}
        {activeTab === "#tab2" && <TabContent2 />}
      </div>
    </div>
  );
};

export default Score;
