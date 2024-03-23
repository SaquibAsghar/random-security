import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 0.5px solid red;
  transition: background-color 2000ms linear;
  background-color: aliceblue;

  &:hover {
    transition: background-color 2000ms linear;
    background-color: plum;
  }
`;
