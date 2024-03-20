/* eslint-disable react/prop-types */
// import React from 'react'
import { useSelector } from "react-redux";
import { selectUsersSelector } from "../../features/users/usersSlice";
import UserChart from "../UserChart/UserChart";

const User = ({ username }) => {
  const allUser = useSelector(selectUsersSelector) || [];
  console.log(allUser);
  const user = allUser.find((user) => user.username);
  console.log(user)
  const chartsList = user.charts
  return (
    <>
      <h1>User is {username} </h1>
      <div>
        <article>
          <h2>{user.displayname} Detail</h2>
          <div>{JSON.stringify(user)}</div>
        </article>
      </div>
      <div>
        <UserChart charts={chartsList}/>
      </div>
    </>
  );
};

export default User;
