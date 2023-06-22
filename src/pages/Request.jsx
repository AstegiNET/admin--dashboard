/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { FETCH_REQUESTS } from "../api/API";
import RequestComponent from "../components/RequestComponent";
// const API_URL = "http://localhost:5000/api/request/fetchRequests";

const Requests = () => {
  const { admin } = useSelector((state) => state.admin);
  const [requests, setRequests] = useState([]);
  const fetchRequests = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.get(FETCH_REQUESTS, config);
    setRequests(response.data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Link
              className="flex items-center justify-between p-4 mb-8 mt-5 text-md font-semibold text-purple-100 bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
              to="/requests"
            >
              <div className="flex items-center">
                <span>Table of Requests</span>
              </div>
              <span>View more</span>
            </Link>

            <RequestComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Requests;
