/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const API_URL = "http://localhost:5000/api/request/fetchEnrollments";

const Enrollments = () => {
  const { admin } = useSelector((state) => state.admin);
  const fetchEnrollments = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${admin?.token}`,
      },
    };
    const response = await axios.get(API_URL, config);
    console.log(response.data);
  };
  useEffect(() => {
    fetchEnrollments();
  });
  return <div>Enrollments</div>;
};

export default Enrollments;
