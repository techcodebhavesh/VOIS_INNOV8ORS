import React, { useState } from "react";
import "./OutputDashboard.css";
import TotalSpent from "./DashboardComponents/TotalSpent";
import WeeklyRevenue from "./DashboardComponents/WeeklyRevenue";
import PieChart from "./DashboardComponents/PieChart";
import Widget from "./DashboardComponents/Widget";
import Links from "./DashboardComponents/Links";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";


const styles = {
  bold: {
    fontWeight: 'bold',
  },
};

const OutputDashboard = () => {
  const [data, setdata] = useState({
    1: {
      title: {
        rating: "8",
        suggestion:
          "The title is clear and concise, but it could be more descriptive. For example, it could include the product's benefits or features.",
      },
      description: {
        rating: "7",
        suggestion:
          "The description is informative and provides a good overview of the product. However, it could be more engaging and creative.",
      },
      image: {
        rating: "9",
        suggestion:
          "The image is clear and professional. However, it could be more visually appealing if it showed the product in use or in a more interesting setting.",
      },
      featuresAndBenefits: {
        rating: "8",
        suggestion:
          "The features and benefits are listed clearly and concisely. However, they could be more persuasive if they were expanded upon and explained in more detail.",
      },
      additionalInformation: {
        rating: "6",
        suggestion:
          "The additional information is accurate and provides a good overview of the product. However, it could be more organized and visually appealing.",
      },
      overallScore: {
        rating: "8",
        suggestion:
          "The overall score is a good reflection of the product's quality and value. However, it could be more accurate if it were based on a larger number of reviews.",
      },
    },
    2: {
      title: {
        rating: "8",
        suggestion:
          "The title is clear and concise, but it could be more descriptive. For example, it could be changed to 'Samsung Galaxy S22 Ultra: The Best Android Phone of 2022'.",
      },
      description: {
        rating: "7",
        suggestion:
          "The description is informative, but it could be more engaging. For example, it could include more details about the phone's features and benefits.",
      },
      image: {
        rating: "9",
        suggestion:
          "The image is high-quality and visually appealing. It could be improved by adding more context, such as a background image or a close-up of the phone.",
      },
      featuresAndBenefits: {
        rating: "8",
        suggestion:
          "The features and benefits are listed in a clear and concise way. They could be improved by adding more details about each feature and benefit.",
      },
      additionalInformation: {
        rating: "6",
        suggestion:
          "The additional information is helpful, but it could be more organized. For example, it could be divided into sections, such as 'Technical Specifications' and 'Warranty Information'.",
      },
      overallScore: {
        rating: "8",
        suggestion:
          "The overall score is a good reflection of the catalog's quality. It could be improved by adding more details about the criteria used to calculate the score.",
      },
    },
  });

  const [catalognum, setcatalognum] = useState("");

  const handleChange = (event) => {
    setcatalognum(event.target.value);
  };

  return (
    <>
      <div className="navbar-dash">
        <main>
          <header className="w-full z-20">
            <nav>
              <a className="align-right" href="#">
                Contact
              </a>
              <Link to="./OutputDashboard" className="align-right">
                Dashboard
              </Link>
              <a className="align-right" href="#">
                About
              </a>
              <a className="align-left" href="#">
                Home
              </a>
            </nav>
            <div className="h-1px bg-primary animate__animated w-full border-b"></div>
          </header>

          <div className="h-100vh w-full bg-cover"></div>
        </main>
      </div>
      <div className="bodyDashb">
        <div className="body-dash">
          <Box sx={{ maxWidth: 400 }}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label" style={styles.bold}>
                Catalog number
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={catalognum}
                label="catalognum"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* <PieChart /> */}
            <Links />
            <Widget />
            <TotalSpent />
            <WeeklyRevenue />
          </div>
        </div>
        <div className="suggestion-con">
        <div className="card-dash col-4">
          <div className="card-header bg-warning text-center">
            <h1 className="h1dash">CARD TITLE</h1>
          </div>
          {/* <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className="fill-success"
              ></path>
            </svg> */}
          <div className="card-body px-3">
              HeHellobhaiHellobhaiHellobhaillobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhai
              HeHellobhaiHellobhaiHellobhaillobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhai
              HeHellobhaiHellobhaiHellobhaillobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhaiHellobhai
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default OutputDashboard;
