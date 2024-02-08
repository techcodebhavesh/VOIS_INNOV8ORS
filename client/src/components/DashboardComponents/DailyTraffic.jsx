import { useEffect, useState } from "react";
import BarChart from "./components/charts/BarChart";
import { barChartDataDailyTraffic } from "./variables/charts";
import { barChartOptionsDailyTraffic } from "./variables/charts";
import { MdArrowDropUp } from "react-icons/md";
import Card from "./components/card";

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

const DailyTraffic = ({ data }) => {
  const [lineChartData, setlineChartData] = useState([
    {
      name: "Daily Traffic",
      data: [20, 30, 40, 20, 45, 50, 30],
    },
  ]);

  useEffect(() => {
    setlineChartData([
      {
        name: "Daily Traffic",
        data: [50, 30, 40, 20, 45, 50, 30],
      },
    ]);
  }, [data]);

  console.log({lineChartData});

  return (
    <Card extra="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-sm font-medium leading-4 text-gray-600">
            Daily Traffic
          </p>
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            2.579{" "}
            <span className="text-sm font-medium leading-6 text-gray-600">
              Visitors
            </span>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold"> +2.45% </p>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full pb-0 pt-10">
        <BarChart
          chartData={lineChartData}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default DailyTraffic;
