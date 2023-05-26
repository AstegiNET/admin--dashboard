import axios from "axios";

const API_URL = "http://localhost:5000/api/admins/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

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
