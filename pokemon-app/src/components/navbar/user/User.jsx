import React from "react";
import { useAppSelector } from "../../../app/hooks";
import "./user.css";

const User = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { name, picture } = user;

  return (
    <div className="user">
      <div className="user-image-container">
        <img src={picture} alt="user-avatar" className="user-image" />
      </div>
      <p className="user-name-container">{name}</p>
    </div>
  );
};

export default User;
