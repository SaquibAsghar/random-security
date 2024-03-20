import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound404 = () => {
  const navigate = useNavigate();
  const onGotoHomePageHandler = (path) => () => navigate(path);
  return (
    <>
      <div>NotFound404</div>
      <button type="button" onClick={onGotoHomePageHandler("/")}>
        Back to home
      </button>
    </>
  );
};

export default NotFound404;
