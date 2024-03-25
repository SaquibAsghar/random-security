import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  overflow-y: scroll;
  flex-grow: 3;
  margin-block: 13px;
  margin-inline-end: 5px;
  position: relative;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6e3aff;
    border-radius: 99px;
  }
`;

export const FeaturesHeading = styled.h3`
  height: 60px;
  background-color: #fff;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding-inline: 20px;
`;

export const FeaturesCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-inline: 20px;
`;

export const FeatureCard = styled.div`
  margin-block: 30px;
  border: 0.5px solid #f5a4f2;
  height: 250px;
  width: 230px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  background-color: #f5a4f2;
  cursor: pointer;
`;

const Span = styled.span``;

export const FeatureName = styled(Span)`
  font-size: 20px;
`;

export const FeaturePlan = styled(Span)`
  font-size: 17px;
`;

export const FeaturePrice = styled(Span)`
  font-size: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 0.5px solid #6e3aff;
  transition: background-color 200ms linear;
  background-color: #f3f4f6;
  color: #6e3aff;
  font-size: 18px;
  &:hover {
    transition: background-color 200ms linear;
    background-color: #6e3aff;
    color: #fff;
  }
  &.purchased{
    cursor: not-allowed;
  }
`;

export const PurchaseNow = styled(Button)`
  background-color: #6e3aff;
  color: #fff;
`;
