/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { GET_TUTEES } from "../api/API";
import TuteeComponent from "../components/TuteeComponent";
// const API_URL = "http://localhost:5000/api/tutees/getTutees";

const Tutees = () => {
  const { admin } = useSelector((state) => state.admin);
  const [tutees, setTutees] = useState([]);
  const fetchTutees = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.get(GET_TUTEES, config);
    setTutees(response.data);
  };
  useEffect(() => {
    fetchTutees();
  }, []);

  useEffect(() => {
    console.log(tutees);
  }, [tutees]);

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Link
              className="flex items-center justify-between p-4 mb-8 mt-5 text-md font-semibold text-purple-100 bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
              to="/tutees"
            >
              <div className="flex items-center">
                <span>Table of Tutees</span>
              </div>
              <span>View more</span>
            </Link>

            <TuteeComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tutees;
