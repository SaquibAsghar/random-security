import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 950px;
  margin-inline: auto;
  padding: 20px;
  padding-block-start: 0;
`;

export const ChangeUserNavBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70px;
  background-color: plum;
  position: sticky;
  top: 0;
  z-index: 11;

  & > div {
    margin-inline-end: 50px;
    font-size: 18px;
  }
`;

export const CartIconContainer = styled.div``;

export const CartIcon = styled.span`
  cursor: pointer;
`;

export const MainContainer = styled.main`
  padding: 40px;
`;

export const PageNotFoundContainer = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  &.mTop-3 {
    margin-top: 30px;
  }
  &.mStart-3 {
    margin-inline-start: 10px;
  }
`;
