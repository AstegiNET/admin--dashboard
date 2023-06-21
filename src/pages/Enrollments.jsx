/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { FETCH_ENROLLMENTS } from "../api/API";
import EnrollmentComponent from "../components/EnrollmentComponent";
// const API_URL = "http://localhost:5000/api/request/fetchEnrollments";

const Enrollments = () => {
  const { admin } = useSelector((state) => state.admin);
  const [enrollments, setEnrollments] = useState([]);
  const fetchEnrollments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.get(FETCH_ENROLLMENTS, config);

    setEnrollments(response.data);
  };
  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    console.log(enrollments);
  }, [enrollments]);
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Link
              className="flex items-center justify-between p-4 mb-8 mt-5 text-md font-semibold text-purple-100 bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
              to="/enrollments"
            >
              <div className="flex items-center">
                <span>Table of Enrollments</span>
              </div>
              <span>View more</span>
            </Link>
            <EnrollmentComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Enrollments;
