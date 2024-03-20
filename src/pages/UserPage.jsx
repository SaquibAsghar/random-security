// import React from 'react';
import {useParams} from 'react-router-dom'
import User from '../components/User/User';

const UserPage = () => {
    const {username} = useParams();
  return (
    <>
        <div>UserPage</div>
        <User username={username}/>
    </>
  )
}

export default UserPage