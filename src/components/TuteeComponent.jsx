/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaCheck, FaCheckCircle, FaVideo } from "react-icons/fa";
import { GET_TUTEES, VERIFY_USER } from "../api/API";
// const API_URL = "http://localhost:5000/api/tutees/getTutees";

const TuteeComponent = () => {
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

  const verifyUser = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.put(VERIFY_USER + id, config);
    window.location.reload();
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="flex mb-20 ">
      <div className="flex flex-col flex-1 w-full">
        <main className=" overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <div className="w-full  overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 ">
                      <th className="px-4 py-3">Tutee</th>
                      <th className="px-4 py-3">email</th>

                      <th className="px-4 py-3">enrolled</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {tutees?.map((tutee, index) => (
                      <tr key={index} className="text-gray-700 ">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={tutee.avatar}
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold">{`${tutee.fname} ${tutee.lname}`}</p>
                              <p className="text-xs text-gray-600 ">
                                {tutee.description ? tutee.description : ""}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-sm">{tutee.email}</td>
                        <td className="px-4 py-3 text-sm">
                          {tutee.enrollement.length}
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span
                            className={`px-2 py-1 font-semibold leading-tight  ${
                              tutee.verified
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            } rounded-full `}
                          >
                            {tutee.verified ? "verified" : "not verified"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {new Date(tutee.createdAt).toLocaleString()}
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-4 text-sm">
                            {tutee.verified ? (
                              <button
                                className="flex items-center text-lg justify-between px-2 py-2  font-medium leading-5 text-green-700 rounded-lg  focus:outline-none"
                                aria-label="Edit"
                              >
                                <FaCheckCircle />
                              </button>
                            ) : (
                              <>
                                <button
                                  onClick={() => verifyUser(tutee._id)}
                                  className="flex items-center justify-between px-2 py-2 text-md font-medium leading-5 text-green-700 rounded-lg  focus:outline-none hover:bg-gray-200"
                                  aria-label="Edit"
                                >
                                  <FaCheck />
                                </button>
                              </>
                            )}
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-500 rounded-lg  focus:outline-none focus:shadow-outline-gray"
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

export default TuteeComponent;
