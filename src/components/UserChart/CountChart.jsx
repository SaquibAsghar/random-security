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
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CountChart = (props) => {
  console.log(props);
  const userOrganizationData = props.data.find(
    (item) => item.company === props.userOrganiztaion
  );
  console.log(userOrganizationData);

  const data = {
    labels: ["ABC"], // Extract company names from data
    datasets: [
      {
        label: "Data Loss (GB)",
        data: [20], // Extract data-loss values
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            label: `${props.locals["data-loss"]}`, // Add data-loss unit
          },
        },
      ],
    },
  };

  const labels = props.data.map((label) => label.country);
  //   return <h1>Hello</h1>;
  return <Bar data={data} options={options} />;
};

export default CountChart;
