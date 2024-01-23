// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import uploadimg from "./Assets/uploadimg.png";
import "./MultipleProductUpload.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Papa from "papaparse";
import Backdrop from "@mui/material/Backdrop";

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
      prev.map((obj, index) => {
        if (index === imageOpen.index) {
          obj.ProductImages.push(e.dataTransfer.files[0].name);
        }
      });
      return prev;
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
        <div className="product-upload-parent" onDragOver={showdroparea}>
          <div className="download-template-button">Download Template</div>
          {!CSVfile && (
            <div className="upload-file-area">
              <CloudUploadIcon />
              <br />
              Drag and Drop CSV file here
            </div>
          )}
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
    return (
      <div
        className="product-card-parent"
        onDragOver={() => {console.log("hi xyz");setproductCardDropArea(true)}}
      >
        <div className="product-card">
          <div className="product-card-image">
            <img src={CSVfile[imageOpen.index].ProductImages} alt="" />
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
          if ((attr == "thickness" || attr == "quantity") && parseFloat(val))
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
              <th>Product Id</th>
              <th>SKU</th>
              <th>Product Title</th>
              <th>Product Images</th>
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
                  <input
                    type="number"
                    value={value.ProductID}
                    onChange={(e) =>
                      handleChange(i, "ProductID", e.target.value)
                    }
                    id="cell"
                    className="numberinput"
                  />
                </td>
                {/* SKU */}
                <td>
                  <input
                    type="text"
                    id="cell"
                    value={value.SKU}
                    onChange={(e) => handleChange(i, "SKU", e.target.value)}
                  />
                </td>
                {/* Product Title */}
                <td>
                  <input
                    type="text"
                    id="cell"
                    value={value.ProductTitle}
                    onChange={(e) =>
                      handleChange(i, "ProductTitle", e.target.value)
                    }
                  />
                </td>
                {/* Product Images */}
                <td>
                  <button onClick={() => handleViewImage(i)}>
                    View or Upload Images
                  </button>
                </td>
                {/* Product Description */}
                <td>
                  <input
                    type="text"
                    id="cell"
                    value={value.ProductDescription}
                    onChange={(e) =>
                      handleChange(i, "ProductDescription", e.target.value)
                    }
                  />
                </td>
                {/* Product Features */}
                <td>
                  <input
                    type="text"
                    id="cell"
                    value={value.ProductFeatures}
                    onChange={(e) =>
                      handleChange(i, "ProductFeatures", e.target.value)
                    }
                  />
                </td>
                {/* Product Info */}
                <td>
                  <input
                    type="text"
                    id="cell"
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
