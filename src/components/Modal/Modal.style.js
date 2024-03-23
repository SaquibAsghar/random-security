import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5f575791;
  inset: 0;
`;

export const Overlay = styled.div`
  background-color: #fafafa;
  width: 600px;
  height: 400px;
  padding: 24px;
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