/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/adminSlice";

import logo from "../assets/6491439-removebg-preview.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || admin) {
      navigate("/");
    }

    dispatch(reset());
  }, [admin, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const adminData = {
      email,
      password,
    };

    dispatch(login(adminData));
  };

  if (isLoading) {
    return "Loading";
  }

  return (
    <div>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                className="hidden w-full h-full lg:block"
                src={logo}
                alt="AstegiNET"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 ">
                  Login
                </h1>

                <form action="#" method="POST" onSubmit={onSubmit}>
                  <label className="block text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      Email
                    </span>{" "}
                  </label>
                  <input
                    className="block w-full mt-1 text-sm border-gray-300 p-2 border rounded-md focus:outline-gray-400 "
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                    placeholder="enter email"
                    autoComplete="email"
                  />

                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      Password
                    </span>{" "}
                  </label>
                  <input
                    className="block w-full mt-1 text-sm border-gray-300 p-2 border rounded-md focus:outline-gray-400 "
                    placeholder="***************"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    autoComplete="password"
                  />

                  <button
                    type="submit"
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Log in
                  </button>
                </form>
                <hr className="my-8" />

                <p className="mt-4">
                  <a
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </p>
                <p className="mt-1">
                  <a
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    href="./create-account.html"
                  >
                    Create account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
