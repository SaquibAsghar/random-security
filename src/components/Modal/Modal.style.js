import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5f575791;
  inset: 0;
  z-index: 11;
`;

export const Overlay = styled.div`
  background-color: #fafafa;
  width: 600px;
  height: 400px;
  padding: 24px;
  border-radius: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6e3aff;
    border-radius: 99px;
  }
`;

export const OverlayHeader = styled.header`
  display: flex;
  align-items: center;
  margin-block-end: 20px;
`;

export const OverlayTitle = styled.span`
  margin-inline: auto;
  font-size: 32px;
`;
export const OverlayCross = styled.span`
  cursor: pointer;
  font-size: 32px;
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
`;

export const ToPurchaseListContainer = styled.section`
  margin-block: 24px;
`;

export const PurchasedItemRow = styled.section`
  display: grid;
  grid-template-columns: 0.6fr 313px 1fr;
  grid-template-rows: 30px;
  gap: 20px;
  margin-block: 10px;
`;

export const PurchaseItemProductName = styled.span``;
export const PurchaseItemFeaturesList = styled.span`
  word-wrap: break-word;
`;
export const PurchaseItemPrice = styled.span`
  text-align: end;
`;
export const PurchaseItemRemoveIcon = styled(PurchaseItemPrice)`
  /* display: none; */
`;

export const PriceDetailContainer = styled.section`
  margin-block: 20px;
`;

export const ProductPricingSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-block: 12px;
`;
export const ProductPricingDescription = styled.span``;

export const ProductPricingCalculation = styled.span`
  text-align: end;
`;

export const ProcessingText = styled.span`
  position: absolute;
  inset: 0;
  background-color: #a9a9a990;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    margin-inline-start: 16px;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
