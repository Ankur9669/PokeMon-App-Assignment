import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isUserLoggedIn } = useAppSelector((state) => state.auth);

  return !isUserLoggedIn ? (
    <Navigate to="/login" replace state={{ from: location }} />
  ) : (
    children
  );
};

export default RequireAuth;
