import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  margin-top: 40px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 450px;
  border: 1px solid plum;
  padding-inline-start: 30px;
  padding-block: 20px;
  &.mTop-3 {
    margin-top: 30px;
  }
`;

export const ProductWrapper = styled.div`
  flex-grow: 1.5;
`;
