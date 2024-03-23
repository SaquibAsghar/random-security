import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin-block: 22px;
`;

export const ProductContainer = styled.div`
  font-size: 28px;
  font-weight: 600;

  & > .product-link {
    display: inline-flex;
    border: 1px solid #6e3aff;
    height: 50px;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 9px;
    background-color: #6E3AFF;
    color: #fff;
  }
`;
