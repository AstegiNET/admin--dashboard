/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
const API_URL = "http://localhost:5000/api/tutors/search";

const Tutors = () => {
  const { admin } = useSelector((state) => state.admin);
  const fetchTutos = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };

    const response = await axios.get(API_URL, config);
    console.log(response.data);
  };
  useEffect(() => {
    fetchTutos();
  });
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">tutors</div>
    </div>
  );
};

export default Tutors;
