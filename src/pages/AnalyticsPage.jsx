import React from "react";
import UserChart from "../components/UserChart/UserChart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AnalyticsPage = () => {
  const { username } = useParams();

  const user = useSelector((state) =>
    state.users.find((user) => user.username === username)
  );
  console.log(user);
  return (
    <>
      <header style={{ fontSize: "xx-large", fontWeight: 700 }}>
        Analytics
      </header>
      <UserChart userDisplayChartList = {user.charts} userOrganiztaion={user.organization} />
    </>
  );
};

export default AnalyticsPage;
