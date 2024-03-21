/* eslint-disable react/prop-types */
// import React from 'react'
import { useSelector } from "react-redux";
import { selectUsersSelector } from "../../features/users/usersSlice";
import UserChart from "../UserChart/UserChart";
import { Link, useLocation, Outlet } from "react-router-dom";

const User = ({ username }) => {
  const allUser = useSelector(selectUsersSelector) || [];
  console.log(allUser);
  const user = allUser.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  console.log(user);
  const chartsList = user.charts;
  let { pathname } = useLocation();
  console.log({
    pathname,
  });
  return (
    <>
      <h1>Welcome {user.displayname} </h1>
      <div style={{ marginBlock: "24px" }}>
        <section
          style={{
            display: "flex",
            lineHeight: 4,
            gap: "50px",
            border: "1px solid plum",
          }}
        >
          <div>
            <img
              src={user.profile}
              alt={`${user.displayname} profile image`}
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid red",
                objectPosition: "top",
              }}
            />
          </div>
          <div>
            <div>
              {/* first detail row start */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <span>First Name: {user.firstname}</span>
                <span>Last Name: {user.lastname}</span>
              </div>
              {/* first detail row end */}

              {/* second detail row start */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <span>Username: {user.username}</span>
                <span>Date of Birth: {user.dob}</span>
              </div>
              {/* second detail row end */}

              {/* third detail row start */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <span>Organisation: {user.organization}</span>
                <span>Email: {user.email}</span>
              </div>
              {/* third detail row end */}
            </div>
          </div>
          {/* <h2>{user.displayname} Detail</h2> */}
          {/* <div>{JSON.stringify(user)}</div> */}
        </section>
      </div>
      <div>
        <Link to={`products`}>Products</Link>
      </div>
      <div>
        <UserChart charts={chartsList} />
      </div>
      <Outlet />
    </>
  );
};

export default User;
