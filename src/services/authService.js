import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndPoint = "/auth";

http.setJwt(getJwt());

export function login(email, password) {
  return http.post(apiEndPoint, { email, password });
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem("token");
}
