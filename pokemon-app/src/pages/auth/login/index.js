import { useAppDispatch } from "../../../app/hooks";
import { authActions } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { GoogleButton } from "react-google-button";

export {
  useAppDispatch,
  authActions,
  useNavigate,
  GoogleAuthProvider,
  signInWithPopup,
  auth,
  GoogleButton,
};
