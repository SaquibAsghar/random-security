import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../../app/context/currentUser";
import { Button } from "../ProductFeatures/Feature.style";
import { ButtonWrapper, PageNotFoundContainer } from "../../common/Common.style";

const NotFound404 = () => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUserContext();
  const onGotoHomePageHandler = (path) => () => navigate(path);
  return (
    <>
      <PageNotFoundContainer>
        <div>
          <h1>Requested URL not found</h1>
        </div>
        <ButtonWrapper className="mTop-3">
          <Button
            type="button"
            onClick={onGotoHomePageHandler(`/user/${currentUser}`)}
          >
            Back to home
          </Button>
        </ButtonWrapper>
      </PageNotFoundContainer>
    </>
  );
};

export default NotFound404;
