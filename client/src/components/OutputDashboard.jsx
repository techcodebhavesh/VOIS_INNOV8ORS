import React, { useState } from "react";
import "./OutputDashboard.css";
import AllScoresLineChart from "./DashboardComponents/AllScoresLineChart.jsx";
import WeeklyRevenue from "./DashboardComponents/WeeklyRevenue";
import PieChartCard from "./DashboardComponents/PieChartCard.jsx";
import Widget from "./DashboardComponents/Widget";
import Links from "./DashboardComponents/Links";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import DailyTraffic from "./DashboardComponents/DailyTraffic.jsx";

const styles = {
  bold: {
    fontWeight: "bold",
  },
};

const OutputDashboard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleChange = (event) => {
    setCurrentIndex(event.target.value);
  };


  console.log({ currentIndex });
  console.log(Object.keys(data));


  return (
    <>
      <div className="bodyDashb">
        <div className="body-dash">
          <Box sx={{ maxWidth: 400 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={styles.bold}>
                Catalog number
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentIndex}
                label="catalognum"
                onChange={handleChange}
              >
                {Object.keys(data).map((value, index) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* <PieChartCard /> */}
            <Links />
            <Widget obj={data[currentIndex]} />
            {/* <AllScoresLineChart data={data} /> */}
              {/* <WeeklyRevenue data={data} /> */}
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
