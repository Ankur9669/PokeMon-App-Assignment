import React, { useEffect, useRef } from "react";
import { useScript } from "../../../hooks/useScript";
import {
  decodeJWTToken,
  useAppDispatch,
  authActions,
  useNavigate,
} from "./index";
import "./login.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const googleButtonRef = useRef();
  const CLIENT_ID =
    "81019992991-rdkss3s6rqnbrv9psadoosl05epn4q7g.apps.googleusercontent.com";

  const handleCallBackResponse = (res) => {
    // localStorage.setItem("token", res.credential);

    // Decoding web token and taking out user info
    let userObject = decodeJWTToken(res.credential);

    // Setting user info to redux store
    dispatch(authActions.setUser({ user: userObject, isUserLoggedIn: true }));
    navigate("/pokemonlisting");
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallBackResponse,
    });

    //  Rendering the sign in button
    window.google.accounts.id.renderButton(googleButtonRef.current, {
      theme: "outline",
      size: "large",
    });
  });

  return (
    <div id="sign-in-div" className="login-page">
      <div ref={googleButtonRef}></div>
    </div>
  );
};

export default Login;

// useEffect(() => {
//   const google = window.google;
//   google.accounts.id.initialize({
//     client_id: CLIENT_ID,
//     callback: handleCallBackResponse,
//   });

//   // Rendering the sign in button
//   google.accounts.id.renderButton(document.getElementById("sign-in-div"), {
//     theme: "outline",
//     size: "large",
//   });
// }, []);
