import React, { useRef, useState } from "react";
import "./Score.css";
import MultipleProductUpload from "./MultipleProductUpload";
import SingleProductUpload from "./SingleProductUpload";
import WebScraperInput from "./WebScraperInput";

const TabContent1 = () => <SingleProductUpload />;
const TabContent2 = ({ setdiableTabOne }) => (
  <MultipleProductUpload setdiableTabOne={setdiableTabOne} />
);
const TabContent3 = ({ setdiableTabOne }) => (
  <WebScraperInput setdiableTabOne={setdiableTabOne} />
);

const Score = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("#tab1");
  const [diableTabOne, setdiableTabOne] = useState(false);

  const handleTabClick = (s) => {
    setActiveTab(s);
  };

  return (
    <div className="body">
      <header className="score-header">
        <h1>Innov8or's Catalog Scoring</h1>
        <div className="tabs" ref={tabsRef}>
          <div
            onClick={() => {
              !diableTabOne && handleTabClick("#tab1");
              if (diableTabOne) {
                if (
                  window.confirm(
                    "You will lose the data in the form. Are you sure?"
                  )
                ) {
                  setdiableTabOne(false);
                  handleTabClick("#tab1");
                }
              }
            }}
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
          <div
            onClick={() => handleTabClick("#tab3")}
            className={activeTab === "#tab3" ? "active" : ""}
          >
            Flipkart Web Scraper
          </div>
        </div>
      </header>
      <div className="tab-content">
        {activeTab === "#tab1" && <TabContent1 />}
        {activeTab === "#tab2" && (
          <TabContent2 setdiableTabOne={setdiableTabOne} />
        )}
        {activeTab === "#tab3" && (
          <TabContent3 setdiableTabOne={setdiableTabOne} />
        )}
      </div>
    </div>
  );
};

export default Score;
