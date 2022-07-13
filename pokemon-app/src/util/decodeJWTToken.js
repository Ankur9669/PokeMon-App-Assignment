import jwt_decode from "jwt-decode";

export const decodeJWTToken = (token) => {
  let userObject = jwt_decode(token);
  return userObject;
};
