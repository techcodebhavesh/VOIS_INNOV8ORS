import React, { useState } from "react";
import PieChart from "./charts/PieChart";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { data } from "./charts/data";
// import "./styles.css";

Chart.register(CategoryScale);

const Trial = () => {
    const [chartData, setChartData] = useState({
        labels: data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

  return (
    <div className="App">
      <PieChart chartData={chartData} />
    </div>
  );
};

export default Trial;
