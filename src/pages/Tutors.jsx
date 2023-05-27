/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5000/api/tutors/search";

const Tutors = () => {
  const { admin } = useSelector((state) => state.admin);
  const [tutors, setTutors] = useState([]);
  const fetchTutos = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };

    const response = await axios.get(API_URL, config);
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

            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">Tutor</th>
                      <th className="px-4 py-3">email</th>

                      <th className="px-4 py-3">enrolled</th>
                      <th className="px-4 py-3">salary</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {tutors?.map((tutor, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 dark:text-gray-400"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={tutor.avatar}
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">{`${tutor.fname} ${tutor.lname}`}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {tutor.description ? tutor.description : ""}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-sm">{tutor.email}</td>
                        <td className="px-4 py-3 text-sm">
                          {tutor.tutee?.length}
                        </td>
                        <td className="px-4 py-3 text-sm">{tutor.salary}</td>
                        <td className="px-4 py-3 text-xs">
                          <span
                            className={`px-2 py-1 font-semibold leading-tight  ${
                              tutor.isQualified
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            } rounded-full `}
                          >
                            {tutor.isQualified ? "Qualified" : "not Qualified"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{tutor.createdAt}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-4 text-sm">
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-indigo-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Edit"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                              </svg>
                            </button>
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Delete"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tutors;
