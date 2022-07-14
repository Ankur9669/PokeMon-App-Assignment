import React from "react";
import { useAppSelector } from "../../../app/hooks";
import "./user.css";

const User = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { userName, userImage, userEmail } = user;

  return (
    <div className="user">
      <div className="user-image-container">
        <img src={userImage} alt="user-avatar" className="user-image" />
      </div>
      <p className="user-name-container">{userName}</p>
      <p className="user-name-container">{userEmail}</p>
    </div>
  );
};

export default User;
