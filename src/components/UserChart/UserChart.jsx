/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectAnalyticsSelector } from "../../features/analytics/analyticsSlice";
import Chart from "./Chart";
import CountChart from "./CountChart";

const UserChart = ({ userDisplayChartList, userOrganiztaion }) => {
  const analytics = useSelector(selectAnalyticsSelector);
  const chartWithPercentage = analytics.filter(
    (analytic) => analytic.chartId === "ch_01" && analytic
  );

  const chartWithCount = analytics.filter(
    (analytic) => analytic.chartId === "ch_02" && analytic
  );

  return (
    <>
      {userDisplayChartList.includes("ch_01") && (
        <Chart {...chartWithPercentage[0]} />
      )}
      {userDisplayChartList.includes("ch_02") && (
        <CountChart
          {...chartWithCount[0]}
          userOrganiztaion={userOrganiztaion}
        />
      )}
    </>
  );
};

export default UserChart;
