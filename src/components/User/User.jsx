/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectUsersSelector } from "../../features/users/usersSlice";
import { NavLink, Outlet, useParams } from "react-router-dom";
import {
  Nav,
  UserAvatarContainer,
  UserAvatarImage,
  UserDetailSection,
  UserDetailWrapper,
  UserInfoContainer,
  UserSubInfoRow,
  UserSubInfoSpan,
  WelcomeHeading,
} from "./User.style";

const User = ({ username }) => {
  const allUser = useSelector(selectUsersSelector) || [];
  let { productId } = useParams();
  if (!productId) {
    productId = "B001";
  }
  const user = allUser.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  return (
    <>
      <Nav>
        <NavLink to={`/user/${username}`} end className="anchor-link">
          Dashboard
        </NavLink>
        <NavLink to={`products/${productId}`} className="anchor-link">
          Products
        </NavLink>
        <NavLink to="analytics" className="anchor-link">
          Analytics
        </NavLink>
      </Nav>
      <WelcomeHeading>Welcome {user.displayname} </WelcomeHeading>
      <UserDetailWrapper>
        <UserDetailSection>
          <UserAvatarContainer>
            <UserAvatarImage
              src={user.profile}
              alt={`${user.displayname} profile image`}
              width={200}
              height={200}
            />
          </UserAvatarContainer>
          <UserInfoContainer>
            <div>
              {/* first detail row start */}
              <UserSubInfoRow>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>First Name:</strong>
                  </span>
                  <span>{user.firstname}</span>
                </UserSubInfoSpan>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong className="min-column--width">Last Name:</strong>{" "}
                  </span>
                  <span>{user.lastname}</span>
                </UserSubInfoSpan>
              </UserSubInfoRow>
              {/* first detail row end */}

              {/* second detail row start */}
              <UserSubInfoRow>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Username:</strong>
                  </span>
                  <span>{user.username}</span>
                </UserSubInfoSpan>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Date of Birth:</strong>
                  </span>
                  <span>{user.dob}</span>
                </UserSubInfoSpan>
              </UserSubInfoRow>
              {/* second detail row end */}

              {/* third detail row start */}
              <UserSubInfoRow>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Organisation:</strong>{" "}
                  </span>
                  <span>{user.organization}</span>
                </UserSubInfoSpan>
                <UserSubInfoSpan>
                  <span className="min-column--width">
                    <strong>Email:</strong>
                  </span>
                  <span>{user.email}</span>
                </UserSubInfoSpan>
              </UserSubInfoRow>
              {/* third detail row end */}
            </div>
          </UserInfoContainer>
        </UserDetailSection>
      </UserDetailWrapper>
      <div></div>
      <Outlet />
    </>
  );
};

export default User;
