/* eslint-disable react/prop-types */
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
  const labels = props.data.map((label) => label.country);
  const phisingData = props.data.map((phish) => phish.phising);
  const awarnessData = props.data.map((awar) => (awar.awarness * 100) / 100);
  const data = {
    labels,
    datasets: [
      {
        label: "Awareness",
        data: awarnessData,
        backgroundColor: "red",
        yAxisID: "yAxis",
      },
      {
        label: "Phising",
        data: phisingData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "yAxis",
      },
    ],
  };

  return (
    <div style={{ width: "550px" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
