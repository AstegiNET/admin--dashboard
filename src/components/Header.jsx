/* eslint-disable no-unused-vars */
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/adminSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );
  const adminLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className="z-10 py-4 bg-white shadow-md ">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-indigo-600 ">
        <div className="flex justify-center flex-1 lg:mr-32"></div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {!admin ? (
            <Link to={"/admin/login"} className="relative">
              <button
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account"
                aria-haspopup="true"
              >
                login
              </button>
            </Link>
          ) : (
            <button
              onClick={admin && adminLogout}
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              aria-label="Account"
              aria-haspopup="true"
            >
              logout
            </button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
