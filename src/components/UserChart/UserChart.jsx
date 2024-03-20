import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAnalyticsSelector } from "../../features/analytics/analyticsSlice";
import Chart from "./Chart";

const UserChart = ({ charts }) => {
  const analytics = useSelector(selectAnalyticsSelector);
  console.log(analytics);
  return (
    <>
      <div>UserChart</div>
      {analytics.map((analytic) => (
        <Chart key={analytic.chartId} {...analytic}/>
      ))}
    </>
  );
};

export default UserChart;
