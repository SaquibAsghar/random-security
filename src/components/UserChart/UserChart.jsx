/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAnalyticsSelector } from "../../features/analytics/analyticsSlice";
import Chart from "./Chart";
import CountChart from "./CountChart";

const UserChart = ({ userDisplayChartList, userOrganiztaion }) => {
  const analytics = useSelector(selectAnalyticsSelector);
  console.log(analytics);
  const chartWithPercentage = analytics.filter(
    (analytic) => analytic.chartId === "ch_01" && analytic
  );

  const chartWithCount = analytics.filter(
    (analytic) => analytic.chartId === "ch_02" && analytic
  );

  console.log(chartWithPercentage);
  console.log(chartWithCount);
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
