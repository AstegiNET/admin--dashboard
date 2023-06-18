/* eslint-disable no-unused-vars */
import axios from "axios";
import { LOGIN_ADMIN } from "../../api/API";
// const API_URL = "http://localhost:5000/api/admins/login";

// Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_ADMIN, userData);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout admin
const logout = () => {
  localStorage.removeItem("admin");
};

const authService = {
  logout,
  login,
};

export default authService;
