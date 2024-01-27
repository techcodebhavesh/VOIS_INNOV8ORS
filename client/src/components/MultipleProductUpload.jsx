// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import uploadimg from "./Assets/uploadimg.png";
import "./MultipleProductUpload.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Papa from "papaparse";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const MultipleProductUpload = () => {
  const [droparea, setdroparea] = useState(false);
  const [CSVfile, setCSVfile] = useState(null);
  const [imageOpen, setimageOpen] = useState({ open: false, index: 0 });
  const [productCardDropArea, setproductCardDropArea] = useState(false);

  function showdroparea() {
    console.log("drag over");
    setdroparea(true);
  }

  function hidedroparea() {
    setdroparea(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    console.log("dropped");
    console.log(e.dataTransfer.files);
    handlefiles(e.dataTransfer.files);
  }

  function handleProductImageDrop(e) {
    e.preventDefault();
    console.log("image dropped");
    console.log(e.dataTransfer.files);

    setCSVfile((prev) => {
      let newCSVfile = [...prev];
      let obj = { ...newCSVfile[imageOpen.index] };
      newCSVfile[imageOpen.index] = obj;

      let arr = [...newCSVfile[imageOpen.index].ProductImages];

      // Loop through dropped files
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i];

        // Create a Blob for each file
        const reader = new FileReader();
        reader.onload = (event) => {
          const blob = new Blob([event.target.result], { type: file.type });

          // Push the Blob object into the ProductImages array
          arr.push({
            name: file.name,
            blob: blob,
          });

          // Update the state with the modified array
          setCSVfile((prev) => {
            let newCSVfile = [...prev];
            newCSVfile[imageOpen.index].ProductImages = arr;
            return newCSVfile;
          });
        };

        reader.readAsArrayBuffer(file);
      }
      return newCSVfile;
    });
  }

  function deleteImage(index) {
    setCSVfile((prev) => {
      let newCSVfile = [...prev];
      let obj = { ...newCSVfile[imageOpen.index] };
      newCSVfile[imageOpen.index] = obj;

      let arr = [...newCSVfile[imageOpen.index].ProductImages];
      arr.splice(index, 1); // Remove the image at the specified index

      newCSVfile[imageOpen.index].ProductImages = arr;
      return newCSVfile;
    });
  }

  function imageToBase64(imgBlob, mimeType) {
    console.log({ mimeType });
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          resolve(
           reader.result.split(",")[1]// Extracting base64 part
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
    let data = [...CSVfile];
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
    console.log({ data });
    console.log(await submitDataToServer(data));
  }

  function submitDataToServer(data) {
    return fetch("/api/togemini/processall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    }).then((response) => {
      if (response.ok) return response.json();
      else return null;
    });
  }

  function handlefiles(array) {
    console.log({ array });

    let jsonData = [];

    const processCSV = async (csvText, fileName) => {
      try {
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        jsonData = result.data;
      } catch (error) {
        console.error(`Error parsing CSV file ${fileName}: ${error.message}`);
      }
    };

    const readFile = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const text = event.target.result;
          resolve(text);
        };
        reader.readAsText(file);
      });
    };

    const handleFile = async (file) => {
      const fileName = file.name;
      const csvText = await readFile(file);
      await processCSV(csvText, fileName);
    };

    const processFiles = async () => {
      await handleFile(array[0]);

      // Here, 'jsonArray' contains an array of objects with file names and corresponding JSON data
      console.log({ jsonData });
      jsonData = jsonData.map((obj) => {
        return {
          ...obj,
          ProductID: parseInt(obj.ProductID),
          ProductImages: [],
          ProductTitle: obj.ProductTitle,
          ProductDescription: obj.ProductDescription,
          ProductFeatures: obj.ProductFeatures,
          ProductInfo: obj.ProductInfo,
        };
      });
      setCSVfile(jsonData);
    };

    processFiles();
  }

  const uploadFileBlock = () => {
    return (
      <>
        <div className="product-upload-parent" on onDragOver={showdroparea}>
          {!CSVfile && (
            <div className="upload-file-area">
              <CloudUploadIcon className="cloud-icon" />
              <br />
              Drag and Drop CSV file here
            </div>
          )}
          <Button
            className="download-temp-button"
            variant="contained"
            color="success"
          >
            Bulk Upload
          </Button>
        </div>
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
            handleDrop(e);
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
  };

  console.log({ CSVfile });

  const productCard = () => {
    const shouldShowInstructions = !imageOpen.open;
    return (
      <div
        className="product-card-parent"
        onDragOver={() => {
          console.log("hi xyz");
          setproductCardDropArea(true);
        }}
      >
        <div className="product-card">
          {shouldShowInstructions && (
            <h1 className="Dnd-instructions">
              Drag and drop Images of the Catalog here
            </h1>
          )}
          <div className="product-card-image">
            {CSVfile[imageOpen.index].ProductImages.map((obj, index) => {
              return (
                <div className="product-card-image-container">
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
                      <ClearIcon style={{ height: "10 px" }} />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="product-card-details">
            <div className="product-card-title">
              <b>Title</b>
              {CSVfile[imageOpen.index].ProductTitle}
            </div>
            <div className="product-card-description">
              <b>Description</b>
              {CSVfile[imageOpen.index].ProductDescription}
            </div>
            <div className="product-card-features">
              <b>Features & Benefits</b>
              {CSVfile[imageOpen.index].ProductFeatures}
            </div>
            <div className="product-card-info">
              <b>Additional Information</b>
              {CSVfile[imageOpen.index].ProductInfo}
            </div>
          </div>
        </div>
        <div
          className="product-card-overlay"
          style={{ display: productCardDropArea ? "flex" : "none" }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setproductCardDropArea(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setproductCardDropArea(false);
            handleProductImageDrop(e);
          }}
        >
          Drop your image
        </div>
      </div>
    );
  };

  const excelSheetBlock = () => {
    const handleClose = (e) => {
      if (!e) return;
      console.log(e.target.className.startsWith("MuiBackdrop-root"));
      if (!e.target.className.startsWith("MuiBackdrop-root")) return;
      setimageOpen({ open: false, index: 0 });
    };

    const handleViewImage = (i) => {
      setimageOpen({ open: true, index: i });
    };

    function handleChange(i, attr, val) {
      var newrecords = CSVfile.map((obj, index) => {
        if (index === i) {
          if (attr == "" && parseFloat(val))
            return { ...obj, [attr]: parseFloat(val) };
          return { ...obj, [attr]: val };
        }
        return obj;
      });

      setCSVfile(newrecords);
    }
    return (
      <>
        <table id="maintable">
          <thead>
            <tr>
              <th className="pdt-id">Product Id</th>
              <th className="sku">SKU</th>
              <th>Product Title</th>
              <th className="upimg">Product Images</th>
              <th>Product Description</th>
              <th>Product Features</th>
              <th>Product Info</th>
            </tr>
          </thead>
          <tbody>
            {CSVfile.map((value, i) => (
              <tr key={i}>
                {/* Product ID */}
                <td>
                  <TextField
                    id="standard-textarea"
                    className="numberinput"
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="number"
                    value={value.ProductID}
                    onChange={(e) =>
                      handleChange(i, "ProductID", e.target.value)
                    }
                  />
                </td>
                {/* SKU */}
                <td>
                  <TextField
                    id="standard-textarea"
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                    value={value.SKU}
                    onChange={(e) => handleChange(i, "SKU", e.target.value)}
                  />
                </td>
                {/* Product Title */}
                <td>
                  <TextField
                    id="standard-textarea"
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                    value={value.ProductTitle}
                    onChange={(e) =>
                      handleChange(i, "ProductTitle", e.target.value)
                    }
                  />
                </td>
                {/* Product Images */}
                <td>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    style={{ width: "30px", height: "40px" }}
                    onClick={() => handleViewImage(i)}
                  ></Button>
                </td>
                {/* Product Description */}
                <td>
                  <TextField
                    id="standard-textarea"
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                    value={value.ProductDescription}
                    onChange={(e) =>
                      handleChange(i, "ProductDescription", e.target.value)
                    }
                  />
                </td>
                {/* Product Features */}
                <td>
                  <TextField
                    id="standard-textarea"
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                    value={value.ProductFeatures}
                    onChange={(e) =>
                      handleChange(i, "ProductFeatures", e.target.value)
                    }
                  />
                </td>
                {/* Product Info */}
                <td>
                  <TextField
                    id="standard-textarea"
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                    value={value.ProductInfo}
                    onChange={(e) =>
                      handleChange(i, "ProductInfo", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons-multi-sc">
          <Button variant="contained" color="success" className="submit-button">
            Submit
          </Button>

          <Link to="/feedback">
            <Button variant="contained" className="feedback-button">
              Give Feedback
            </Button>
          </Link>
        </div>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={imageOpen.open}
          onClick={handleClose}
        >
          {productCard()}
        </Backdrop>
      </>
    );
  };

  return CSVfile ? excelSheetBlock() : uploadFileBlock();
};

export default MultipleProductUpload;
