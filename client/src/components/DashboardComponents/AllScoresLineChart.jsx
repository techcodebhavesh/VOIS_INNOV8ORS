import React, { useEffect, useState } from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "./components/card";
import LineChart from "./components/charts/LineChart";

const lineChartOptions = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: [
      "TITLE",
      "DESCRIPTION",
      "IMAGE",
      "FEATURES AND BENIFITS",
      "ADDITIONAL INFORMATION",
      "OVERALL RATING",
    ],
  },

  yaxis: {
    show: false,
  },
};

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
        name: parseInt(key),
        data: dataValues,
        color: color,
      });
    }
  }

  return transformedArray;
}

const AllScoresLineChart = ({ data }) => {
  const [lineChartData, setlineChartData] = useState([]);

  useEffect(() => {
    setlineChartData(transformData(data));
  }, [data]);

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This month</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          {/* <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            $37.5K
          </p> */}
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Scores</p>
            <div className="flex flex-row items-center justify-center">
              {/* <MdArrowDropUp className="font-medium text-green-500" /> */}
              {/* <p className="text-sm font-bold text-green-500"> +2.45% </p> */}
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptions}
            series={lineChartData}
          />
        </div>
      </div>
    </Card>
  );
};

export default AllScoresLineChart;
