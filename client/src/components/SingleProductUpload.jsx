import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import uploadimg from "./Assets/uploadimg.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../base";
import { useAuth } from "./context/auth/AuthState";
import OutputDashboard from "./OutputDashboard";
import { CircularProgress } from "@mui/material";

const SingleProductUpload = () => {
  const { currentUser } = useAuth();
  const [droparea, setdroparea] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [additionalFeatures, setAdditionalFeatures] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [apiKey, setapiKey] = useState("");
  const [submitted, setsubmitted] = useState({
    submitted: false,
    error: false,
    errormsg: "",
    success: false,
  });
  const [ouptuResult, setOuptuResult] = useState(undefined);

  async function getUserData() {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setapiKey(docSnap.data().apiKey);
      // console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  function showdroparea() {
    console.log("drag over");
    setdroparea(true);
  }

  function hidedroparea() {
    setdroparea(false);
  }

  function handleProductImageDrop(e) {
    const newFiles = Array.from(productImage); // Create a copy of the files array
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        const blob = new Blob([event.target.result], { type: file.type });
        newFiles.push({
          name: file.name,
          blob: blob,
        });
        setProductImage(newFiles); // Update the state with the new array
      };
      reader.readAsArrayBuffer(file);
    }
  }

  function deleteImage(index) {
    setProductImage((prev) => {
      let arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  }

  console.log("files");
  console.log(productImage);

  function imageToBase64(imgBlob, mimeType) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          resolve(
            reader.result.split(",")[1] // Extracting base64 part
            //mimeType,
          );
        } else {
          reject(new Error("Failed to read image as base64."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error reading image."));
      };

      reader.readAsDataURL(imgBlob);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let data = [
      {
        ProductID: 0,
        ProductTitle: title,
        ProductDescription: description,
        ProductFeatures: features,
        ProductInfo: additionalFeatures,
        ProductImages: productImage,
      },
    ];
    console.log({ data });
    data = await Promise.all(
      data.map(async (obj) => {
        let newObj = { ...obj };
        newObj.ProductImages = await Promise.all(
          newObj.ProductImages.map(async (imgObj) => {
            return await imageToBase64(imgObj.blob, imgObj.blob.type);
          })
        );
        return newObj;
      })
    );
    // validate data
    console.log({ data });
    // fetch data
    setsubmitted((prev) => {
      return { ...prev, submitted: true };
    });

    await submitDataToServer(data);
  }

  function submitDataToServer(data) {
    return fetch("/api/togemini/processall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, apiKey }),
    })
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
          setsubmitted((prev) => {
            return { ...prev, submitted: true, success: true };
          });
          setOuptuResult(responseData);

          return responseData;
        } else {
          setsubmitted((prev) => {
            return { ...prev, submitted: false, error: true };
          });
          return null;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setsubmitted((prev) => {
          return { ...prev, submitted: false, error: true, errormsg: error };
        });
        return null;
      });
  }

  console.log({ ouptuResult });

  const inputData = () => (
    <>
      <div
        className={`tab1-container mx-auto ${
          droparea || productImage.length > 0 ? "drag-active" : ""
        }`}
        onDragOver={showdroparea}
      >
        <div className="images-prev">
        <Button
            style={{maxwidth:'20%',maxHeight:'50px'}}
            variant="contained"
            className="Dnd-instructions-img"
          >
            Drag Images
          </Button>
          {productImage.map((obj, index) => {
            return (
              <div className="product-card-image-container" key={index}>
                <img
                  src={URL.createObjectURL(obj.blob)}
                  alt={obj.name}
                  style={{ height: "100px", margin: "5px" }}
                />
                <div className="product-card-image-topright">
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteImage(index)}
                  >
                    <ClearIcon style={{ height: "10px" }} />
                  </IconButton>
                </div>
              </div>
            );
          })}
          <br />
          
        </div>
        <div className="fieldBoxes box-input my-10 ">
          {/* Start white textfields bloc */}
          <div className="fieldboxes" style={{ width: "100%" }}>
            <div id="first_style">
              {/* First style */}
              <div className=" textfield overflow-hidden rounded-md ">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Title"
                  placeholder="Placeholder"
                  multiline
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  // onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="textfield overflow-hidden rounded-md ">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Description"
                  placeholder="Placeholder"
                  multiline
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  // onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="textfield overflow-hidden rounded-md ">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Features And Benefits"
                  placeholder="Placeholder"
                  multiline
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  // onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="textfield overflow-hidden rounded-md ">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Additional Features"
                  placeholder="Placeholder"
                  multiline
                  value={additionalFeatures}
                  onChange={(e) => setAdditionalFeatures(e.target.value)}
                  // onClick={(e) => e.stopPropagation()}
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
      <div
        id="droparea"
        style={{ display: droparea ? "flex" : "none" }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          hidedroparea();
        }}
        onDrop={(e) => {
          e.preventDefault();
          hidedroparea();
          handleProductImageDrop(e);
        }}
      >
        <div id="dropareainnerdiv">
          <div id="dropareatext">
            <div className="aligndiv">
              <h1>Drop The Files Here</h1>
            </div>
            <br />
            <div className="aligndiv">
              <img
                src={uploadimg}
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return submitted.submitted === false ? (
    inputData()
  ) : submitted.success === true ? (
    <OutputDashboard data={ouptuResult} />
  ) : (
    <CircularProgress />
  );
};

export default SingleProductUpload;
