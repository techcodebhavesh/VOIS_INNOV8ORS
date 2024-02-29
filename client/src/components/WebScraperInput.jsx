import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../base";
import { useAuth } from "./context/auth/AuthState";
import OutputDashboard from "./OutputDashboard";
import { CircularProgress } from "@mui/material";

const WebScraperInput = () => {
  const { currentUser } = useAuth();
  const [url, setUrl] = useState("");
  const [apiKey, setapiKey] = useState("");
  const [ouptuResult, setOuptuResult] = useState(undefined);
  const [submitted, setsubmitted] = useState({
    submitted: false,
    error: false,
    errormsg: "",
    success: false,
  });
  const [alertData, setalertData] = useState({
    alert: false,
    message: "",
    severity: "",
  });

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

  useEffect(() => {
    getUserData();
  }, [currentUser]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(url);
    if (!isValidUrl(url)) {
      setalertData({
        alert: true,
        message: "Invalid URL",
        severity: "error",
      });
      return;
    }

    setsubmitted((prev) => {
      return { ...prev, submitted: true };
    });

    const response = await fetch("/api/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, apiKey }),
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

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  return submitted.submitted === false ? (
    <>
      <div className="tab1-container mx-auto" style={{ minHeight: "unset" }}>
        {alertData.alert && (
          <Alert variant="filled" severity={alertData.severity}>
            {alertData.message}
          </Alert>
        )}
        <div className="fieldBoxes box-input ">
          {/* Start white textfields bloc */}
          <div className="fieldboxes" style={{ width: "100%" }}>
            <div id="first_style">
              {/* First style */}
              <div className=" textfield overflow-hidden rounded-md ">
                <TextField
                  className="box-inner"
                  id="outlined-textarea"
                  label="Url"
                  placeholder="Placeholder"
                  multiline
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit}
              style={{ margin: "10px" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  ) : submitted.success === true ? (
    <OutputDashboard data={ouptuResult} />
  ) : (
    <div className="progress">
      <CircularProgress />
      <br />
      Please wait while we process your request
    </div>
  );
};

export default WebScraperInput;
