import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../app/context/currentUser";

const NotFound404 = () => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUserContext();
  const onGotoHomePageHandler = (path) => () => navigate(path);
  return (
    <>
      <div>NotFound404</div>
      <button
        type="button"
        onClick={onGotoHomePageHandler(`/user/${currentUser}`)}
      >
        Back to home
      </button>
    </>
  );
};

export default NotFound404;
