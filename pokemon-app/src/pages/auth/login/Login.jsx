import React, { useEffect } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { GoogleButton } from "react-google-button";
import { useAppDispatch, authActions, useNavigate } from "./index";
import "./login.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const userEmail = result.user.email;
    const userName = result.user.displayName;
    const userImage = result.user.photoURL;

    dispatch(
      authActions.setUser({
        user: {
          userEmail,
          userName,
          userImage,
        },
        isUserLoggedIn: true,
      })
    );
    navigate("/");
  };

  const handleGoogleSignInClick = async () => {
    try {
      googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-page">
      <GoogleButton onClick={handleGoogleSignInClick} />
    </div>
  );
};

export default Login;
