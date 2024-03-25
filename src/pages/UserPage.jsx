import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import User from "../components/User/User";
import { MainContainer } from "../common/Common.style";
import { useCurrentUserContext } from "../app/context/currentUser";
import { selectGetOnlyUsername } from "../features/users/usersSlice";

const UserPage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const usersList = useSelector(selectGetOnlyUsername);

  const { currentUser } = useCurrentUserContext();

  if (!usersList.includes(currentUser)) {
    navigate("/404-not-found");
    return;
  }

  return (
    <>
      <MainContainer>
        <User username={username} />
      </MainContainer>
    </>
  );
};

export default UserPage;
