import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUsersSelector } from "../../features/users/usersSlice";
import { useCurrentUserContext } from "../../app/context/currentUser";
import { Select } from "./Home.style";

const Home = () => {
  const navigate = useNavigate();
  const users = useSelector(selectUsersSelector);
  const { _, setCurrentUser } = useCurrentUserContext();
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
    navigate(`/user/${value}`);
  };
  return (
    <>
      <div>
        <span>Current User: </span>
        <Select name="" id="" onChange={onChangeUser}>
          {userOptions}
        </Select>
      </div>
    </>
  );
};

export default Home;
