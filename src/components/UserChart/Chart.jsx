/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { selectAnalyticsSelector } from "../../features/analytics/analyticsSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Analytics Charts",
    },
  },
  scales: {
    yAxis: {
      display: true,
      max: 100,
      ticks: {
        callback: function (value, index, ticks) {
          console.log(index, ticks);
          return value + " % ";
        },
      },
    },
  },
};

const labels = ["January", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [5000 / 100, 6700 / 100, 9000 / 100],
      backgroundColor: "red",
      yAxisID: "yAxis",
    },
    {
      label: "Dataset 2",
      data: [2700 / 100, 3400 / 100, 7500 / 100],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "yAxis",
    },
    // { yAxisID: "yAxis" },
  ],
};

const chartIdMap = {};

const Chart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: props.title,
      },
    },
    scales: {
      yAxis: {
        display: true,
        max: 100,
        ticks: {
          callback: function (value, index, ticks) {
            // console.log(index, ticks);
            if (props.dataType === "percentage") {
              return value + " % ";
            }
            return value;
          },
        },
      },
    },
  };
  //   console.log(props.data);
  if (chartIdMap[props.chartId]) {
    chartIdMap[props.chartId]
  }
  const labels1 =
    props.chartId === "ch_01" && props.data.map((label) => label.country);
  const labels2 =
    props.chartId === "ch_02" && props.data.map((label) => label.company);
  console.log(labels1);
  console.log(labels2);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [5000 / 100, 6700 / 100, 9000 / 100],
        backgroundColor: "red",
        yAxisID: "yAxis",
      },
      {
        label: "Dataset 2",
        data: [2700 / 100, 3400 / 100, 7500 / 100],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "yAxis",
      },
      // { yAxisID: "yAxis" },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Chart;
