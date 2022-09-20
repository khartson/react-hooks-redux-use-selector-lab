import React from "react";
// add any needed imports here
import { useSelector } from 'react-redux';

function Users() {
  const users = useSelector((state)=>state.users);
  const userCount = useSelector((state)=>state.users).length;
  users.map((user)=> user)
  return (
    <div>
      <ul>
        Users!
        { users.map((user, index)=> {
          return <li key={index}>{user.username} | {user.hometown}</li>
        })}
        <span>Total Users: {userCount}</span>
      </ul>
    </div>
  );
}

export default Users;
