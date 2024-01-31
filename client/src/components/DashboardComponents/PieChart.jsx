import React from "react";
import PieChart from "./PieChart";

const ExampleComponent = () => {
  // Example series data
  const seriesData = [44, 55, 13, 33];

  // Example options data
  const optionsData = {
    labels: ["A", "B", "C", "D"],
  };

  return (
    <div>
      <h1>Example Component</h1>
      <PieChart series={seriesData} options={optionsData} />
    </div>
  );
};

export default ExampleComponent;
