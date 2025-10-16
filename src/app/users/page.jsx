"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";
import "./user.css";

function User() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [showUsers, setShowUsers] = useState(false);

  const handleClick = () => {
    dispatch(fetchUsers());
    setShowUsers(true);
  };

  return (<div id="di">
    <div className="user-container" >
      <h2>Users 🤵🏼</h2>
      <button onClick={handleClick}>Show Users</button>
      {loading}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {showUsers && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default User;
