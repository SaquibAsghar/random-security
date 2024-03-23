import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 950px;
  margin-inline: auto;
  padding: 20px;
`;

export const ChangeUserNavBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70px;
  background-color: plum;

  & > div {
    margin-inline-end: 50px;
    font-size: 18px;
  }

  &:first-child {
    margin-inline-end: 100px;
  }
`;

export const CartIconContainer = styled.div``;

export const CartIcon = styled.span`
  cursor: pointer;
`;

export const MainContainer = styled.main`
    padding: 40px;
`;
