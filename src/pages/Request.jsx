/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
const API_URL = "http://localhost:5000/api/request/fetchRequests";

const Requests = () => {
  const { admin } = useSelector((state) => state.admin);
  const fetchRequests = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.get(API_URL, config);
    console.log(response.data);
  };

  useEffect(() => {
    fetchRequests();
  });
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">Requests</div>
    </div>
  );
};

export default Requests;
