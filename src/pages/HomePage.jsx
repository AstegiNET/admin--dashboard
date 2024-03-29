/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Enrollments from "./Enrollments";
import EnrollmentComponent from "../components/EnrollmentComponent";
import TuteeComponent from "../components/TuteeComponent";
import RequestComponent from "../components/RequestComponent";
import TutorComponent from "../components/TutorComponent";
import axios from "axios";
import {
  FETCH_ENROLLMENTS,
  FETCH_REQUESTS,
  GET_TUTEES,
  GET_TUTORS,
} from "../api/API";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { admin } = useSelector((state) => state.admin);
  const [enrollments, setEnrollments] = useState([]);
  const [requests, setRequests] = useState([]);
  const [tutees, setTutees] = useState([]);
  const [tutors, setTutors] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${admin?.token}`,
    },
  };
  const fetchEnrollments = async () => {
    const response = await axios.get(FETCH_ENROLLMENTS, config);
    setEnrollments(response.data);
  };
  const fetchRequests = async () => {
    const response = await axios.get(FETCH_REQUESTS, config);
    setRequests(response.data);
  };

  const fetchTutees = async () => {
    const response = await axios.get(GET_TUTEES, config);
    setTutees(response.data);
  };

  const fetchTutos = async () => {
    const response = await axios.get(GET_TUTORS, config);
    setTutors(response.data);
  };

  useEffect(() => {
    fetchEnrollments();
    fetchRequests();
    fetchTutees();
    fetchTutos();
  }, []);
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Link
              className="flex items-center justify-between p-4 mb-8 mt-5 text-md font-semibold text-purple-100 bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
              href="/"
            >
              <div className="flex items-center">
                <span>astegniNet admin dashboard</span>
              </div>
              <span>View more</span>
            </Link>

            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 ">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Total Tutees
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    {tutees?.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Total Tutors
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    {tutors?.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Enrollments
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    {enrollments?.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Requests
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    {requests?.length}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 px-10 text-md font-semibold text-gray-600 ">
                Table of Tutees
              </h6>
              <TuteeComponent />
            </div>
            <div>
              <h6 className="mb-4 px-10 text-md font-semibold text-gray-600 ">
                Table of Tutors
              </h6>
              <TutorComponent />
            </div>
            <div>
              <h6 className="mb-4 px-10 text-md font-semibold text-gray-600 ">
                Table of Enrollements
              </h6>
              <EnrollmentComponent />
            </div>

            <div>
              <h6 className="mb-4 px-10 text-md font-semibold text-gray-600 ">
                Table of Requests
              </h6>
              <RequestComponent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
