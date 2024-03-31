import styled from "styled-components";

export const Nav = styled.nav`
  margin-block: 20px 30px;
  position: sticky;
  top: 70px;
  bottom: 20px;
  background-color: #fff;
  height: 70px;
  padding-block-start: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
  & > .anchor-link {
    text-decoration: none;
    color: #000;
    margin-inline-end: 20px;
    font-size: 18px;
    font-weight: 600;

    &.active {
      color: #6e3aff;
    }
  }
`;

export const WelcomeHeading = styled.h1`
  font-weight: 600;
`;

export const UserDetailWrapper = styled.div`
  margin-block: 24px;
  background-color: #e1cccc4a;
`;

export const UserDetailSection = styled.section`
  display: flex;
  align-items: center;
  line-height: 4;
  gap: 50px;
  border: 1px solid plum;
  padding: 12px;
  border-radius: 4px;
`;

export const UserAvatarContainer = styled.div``;

export const UserAvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  vertical-align: middle;
`;

export const UserInfoContainer = styled.div``;

export const UserSubInfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  margin-block-end: 5px;
`;

export const UserSubInfoSpan = styled.span`
  display: inline-grid;
  margin-inline-end: 20px;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;

  & > span.min-column--width {
    min-width: 110px;
  }
`;
