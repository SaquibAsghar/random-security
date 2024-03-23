// import React from 'react';
import { useParams, Outlet } from "react-router-dom";
import User from "../components/User/User";
import { MainContainer } from "../common/Common.style";

const UserPage = () => {
  const { username } = useParams();
  return (
    <>
      <MainContainer>
        <User username={username} />
      </MainContainer>
    </>
  );
};

export default UserPage;
