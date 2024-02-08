import { useEffect, useState } from "react";
import Card from "./components/card";
import BarChart from "./components/charts/BarChart";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "./variables/charts";
import { MdBarChart } from "react-icons/md";

function transformData(inputData) {
  const colors = [
    "#4318FF",
    "#6AD2FF",
    "#FF5733",
    "#33FF57",
    "#FF3399",
    "#9933FF",
  ];

  const transformedArray = [];

  // Loop through each key in the input data
  for (const key in inputData) {
    if (inputData.hasOwnProperty(key)) {
      const item = inputData[key];
      delete item.data;
      const dataValues = Object.values(item)
        .filter((obj) => typeof obj === "object")
        .map((obj) => obj.rating);

      // Generate a unique color for each item
      const color = colors.shift();

      transformedArray.push({
        name: "parseInt(key)",
        data: dataValues,
        color: color,
      });
    }
  }

  return transformedArray;
}

const WeeklyRevenue = ({ data }) => {
  console.log({data});
  const [lineChartData, setlineChartData] = useState([
    {
      name: "PRODUCT A",
      data: [10, 10, 9, 10, 10, 10],
      color: "#6AD2Fa",
    },
    {
      name: "PRODUCT B",
      data: [10, 9, 6, 10, 10, 10],
      color: "#4318FF",
    },
  ]);

  useEffect(() => {
    setlineChartData(transformData(data));
  }, [data]);

  console.log({ barChartDataWeeklyRevenue });
  console.log({ lineChartData });

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Weekly Revenue
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={lineChartData}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
