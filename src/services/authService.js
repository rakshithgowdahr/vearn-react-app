import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/auth";

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
