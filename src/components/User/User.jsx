/* eslint-disable react/prop-types */
// import React from 'react'
import { useSelector } from "react-redux";
import { selectUsersSelector } from "../../features/users/usersSlice";
import UserChart from "../UserChart/UserChart";
import {
  NavLink,
  useLocation,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Nav,
  UserAvatarContainer,
  UserAvatarImage,
  UserDetailSection,
  UserDetailWrapper,
  UserInfoContainer,
  UserSubInfoRow,
  UserSubInfoSpan,
  WelcomeHeading,
} from "./User.style";

const User = ({ username }) => {
  const allUser = useSelector(selectUsersSelector) || [];
  const navigate = useNavigate();
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
      <Nav>
        <NavLink
          to={`/user/${username}`}
          className="anchor-link"
          // className={({isActive}) => {
          //   isActive ? 'active anchor-link' : 'anchor-link'
          // }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="products/B001"
          className="anchor-link"
          // className={({isActive}) => {
          //   isActive ? 'active anchor-link' : 'anchor-link'
          // }}
        >
          Products
        </NavLink>
        <NavLink
          to="analytics"
          className="anchor-link"
          // className={({isActive}) => {
          //   isActive ? 'active anchor-link' : 'anchor-link'
          // }}
        >
          Analytics
        </NavLink>
      </Nav>
      <WelcomeHeading>Welcome {user.displayname} </WelcomeHeading>
      <UserDetailWrapper>
        <UserDetailSection>
          <UserAvatarContainer>
            <UserAvatarImage
              src={user.profile}
              alt={`${user.displayname} profile image`}
              width={200}
              height={200}
            />
          </UserAvatarContainer>
          <UserInfoContainer>
            <div>
              {/* first detail row start */}
              <UserSubInfoRow>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>First Name:</strong>
                  </span>
                  <span>{user.firstname}</span>
                </UserSubInfoSpan>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong className="min-column--width">Last Name:</strong>{" "}
                  </span>
                  <span>{user.lastname}</span>
                </UserSubInfoSpan>
              </UserSubInfoRow>
              {/* first detail row end */}

              {/* second detail row start */}
              <UserSubInfoRow>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Username:</strong>
                  </span>
                  <span>{user.username}</span>
                </UserSubInfoSpan>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Date of Birth:</strong>
                  </span>
                  <span>{user.dob}</span>
                </UserSubInfoSpan>
              </UserSubInfoRow>
              {/* second detail row end */}

              {/* third detail row start */}
              <UserSubInfoRow>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Organisation:</strong>{" "}
                  </span>
                  <span>{user.organization}</span>
                </UserSubInfoSpan>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Email:</strong>
                  </span>
                  <span>{user.email}</span>
                </UserSubInfoSpan>
              </UserSubInfoRow>
              {/* third detail row end */}
            </div>
          </UserInfoContainer>
          {/* <h2>{user.displayname} Detail</h2> */}
          {/* <div>{JSON.stringify(user)}</div> */}
        </UserDetailSection>
      </UserDetailWrapper>
      <div>{/* <UserChart charts={chartsList} /> */}</div>
      <Outlet />
    </>
  );
};

export default User;
