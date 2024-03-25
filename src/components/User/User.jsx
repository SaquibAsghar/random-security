/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectUsersSelector } from "../../features/users/usersSlice";
import {
  Link,
  Outlet,
} from "react-router-dom";
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
  const user = allUser.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  return (
    <>
      <Nav>
        <Link to={`/user/${username}`} className="anchor-link">
          Dashboard
        </Link>
        <Link to="products/B001" className="anchor-link">
          Products
        </Link>
        <Link to="analytics" className="anchor-link">
          Analytics
        </Link>
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
