/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
const API_URL = "http://localhost:5000/api/tutees/getTutees";

const Tutees = () => {
  const { admin } = useSelector((state) => state.admin);
  const fetchTutees = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.get(API_URL, config);
    console.log(response.data);
  };
  useEffect(() => {
    fetchTutees();
  });
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">tutees</div>
    </div>
  );
};

export default Tutees;
