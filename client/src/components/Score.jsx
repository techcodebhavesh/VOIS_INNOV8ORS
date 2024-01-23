import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Score.css";
import MultipleProductUpload from "./MultipleProductUpload";

const TabContent1 = () => (
  <div className="container mx-auto">
    <div className="my-10 border-dashed border-2 border-slate-200 p-5 rounded-xl">
      <p className="font-bold text-xl mb-5">Textfield white</p>
      {/* Start white textfields bloc */}
      <div className="inline-flex gap-5 items-center">
        <div id="first_style">
          {/* First style */}
          <div className="textfield w-[300px] bg-slate-100 border border-slate-200 rounded-md overflow-hidden">
            <label htmlFor="white" className="text-sm ml-2">
              My label
            </label>
            <input
              type="text"
              name="white"
              id="white"
              placeholder="This is my input"
              className="bg-transparent block w-full px-2 py-1 focus:outline-none"
            />
          </div>
          {/* First style with error */}
          <div className="textfield w-[300px] bg-slate-100 border border-slate-200 rounded-md mt-2 overflow-hidden">
            <label htmlFor="white" className="text-sm ml-2">
              My label
            </label>
            <input
              type="text"
              name="white"
              id="white"
              placeholder="This is my input"
              className="bg-transparent block w-full px-2 py-1 focus:outline-none"
            />
            <p className="bg-red-100 text-red-500 text-sm py-1 px-2">
              This is a one error
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TabContent2 = () => (
  <div>
    <MultipleProductUpload/>
  </div>
);

const TabContent3 = () => (
  <div>
    <h2>Tab Three Content</h2>
  </div>
);

const TabContent4 = () => (
  <div>
    <h2>Tab Four Content</h2>
  </div>
);

const Score = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("#tab1");

  const handleTabClick = (s) => {
    setActiveTab(s);
  };

  return (
    <div className="body">
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
      <header className="score-header">
        <h1>Innova8or's Catalog Scoring</h1>
        <div className="tabs" ref={tabsRef}>
          <div
            href="#tab1"
            onClick={() => handleTabClick("#tab1")}
            className={activeTab === "#tab1" ? "active" : ""}
          >
            Tab One
          </div>
          <div
            href="#tab2"
            onClick={() => handleTabClick("#tab2")}
            className={activeTab === "#tab2" ? "active" : ""}
          >
            Tab Two
          </div>
          <div
            href="#tab3"
            onClick={() => handleTabClick("#tab3")}
            className={activeTab === "#tab3" ? "active" : ""}
          >
            Tab Three
          </div>
          <div
            onClick={() => handleTabClick("#tab4")}
            className={activeTab === "#tab4" ? "active" : ""}
          >
            Tab Four
          </div>
        </div>
      </header>
      <div className="tab-content">
        {activeTab === "#tab1" && <TabContent1 />}
        {activeTab === "#tab2" && <TabContent2 />}
        {activeTab === "#tab3" && <TabContent3 />}
        {activeTab === "#tab4" && <TabContent4 />}
      </div>
    </div>
  );
};

export default Score;
