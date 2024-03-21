import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUsersSelector } from "../../features/users/usersSlice";
import { useCurrentUserContext } from "../../app/context/currentUser";

const Home = () => {
  const navigate = useNavigate();
  const users = useSelector(selectUsersSelector);
  const { setCurrentUser } = useCurrentUserContext();
  // const [, setCurrentUser] = useState("");
  console.log(users);
  const userOptions = users.map((user) => (
    <option key={user.username} value={user.username}>
      {user.username}
    </option>
  ));
  const onChangeUser = (e) => {
    const { value } = e.target;
    setCurrentUser(value);
    navigate(`/user/${value}/dashboard`);
  };
  return (
    <>
      <div>Home</div>
      <select name="" id="" onChange={onChangeUser}>
        {/* <option value="none_selected">Select User</option> */}
        {userOptions}
      </select>
    </>
  );
};

export default Home;
