/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { GET_TUTORS } from "../api/API";
import TutorComponent from "../components/TutorComponent";
// const API_URL = "http://localhost:5000/api/tutors/search";

const Tutors = () => {
  const { admin } = useSelector((state) => state.admin);
  const [tutors, setTutors] = useState([]);
  const fetchTutos = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };

    const response = await axios.get(GET_TUTORS, config);
    setTutors(response.data);
  };
  useEffect(() => {
    fetchTutos();
  }, []);

  useEffect(() => {
    console.log(tutors);
  }, [tutors]);
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Link
              className="flex items-center justify-between p-4 mb-8 mt-5 text-md font-semibold text-indigo-100 bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-indigo"
              to="/tutors"
            >
              <div className="flex items-center">
                <span>Table of Tutors</span>
              </div>
              <span>View more</span>
            </Link>

            <TutorComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tutors;
