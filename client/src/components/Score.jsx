import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Score.css";
import MultipleProductUpload from "./MultipleProductUpload";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDropzone } from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TabContent1 = () => {
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [additionalFeatures, setAdditionalFeatures] = useState("");

  const getPreviewImage = (file) => {
    return URL.createObjectURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log("Image dropped:", acceptedFiles);
    },
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const handleSubmit = () => {
    console.log("Form values submitted:", {
      title,
      description,
      features,
      additionalFeatures,
    });
  };

  return (
    <>
      <div
        className={`tab1-container mx-auto ${
          isDragActive || files.length > 0 ? "drag-active" : ""
        }`}
      >
        <div className="images-prev" {...getRootProps()}>
          {files.length > 0 ? (
            <aside className="thumbs-container">
              {files.map((file) => (
                <div key={file.name} className="thumb">
                  <div
                    className="thumb-inner"
                    style={{ backgroundImage: `url(${getPreviewImage(file)})` }}
                  />
                </div>
              ))}
            </aside>
          ) : (
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="Dnd-instructions-img">
              Drag Images
            </Button>
          )}
        </div>
        <div
          className="box-input my-10 border-dashed border-2 border-slate-200 p-5 rounded-xl"
          
        >
          {/* Start white textfields bloc */}
          <div className="inline-flex gap-5 items-center">
            <div id="first_style">
              {/* First style */}
              <div className="textfield w-[300px] bg-slate-100 border border-slate-200 rounded-md overflow-hidden">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Title"
                  placeholder="Placeholder"
                  multiline
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="textfield w-[300px] bg-slate-100 border border-slate-200 rounded-md overflow-hidden">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Description"
                  placeholder="Placeholder"
                  multiline
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="textfield w-[300px] bg-slate-100 border border-slate-200 rounded-md overflow-hidden">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Features And Benefits"
                  placeholder="Placeholder"
                  multiline
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="textfield w-[300px] bg-slate-100 border border-slate-200 rounded-md overflow-hidden">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Additional Features"
                  placeholder="Placeholder"
                  multiline
                  value={additionalFeatures}
                  onChange={(e) => setAdditionalFeatures(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
      <Link to="/feedback">
        <Button variant="contained">Give Feedback</Button>
      </Link>
    </>
  );
};
const TabContent2 = () => <MultipleProductUpload />;

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
          <header className="w-full z-20">
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
            Upload Catalog
          </div>
          <div
            href="#tab2"
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
