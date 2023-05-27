/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const AdminProtectedRoutes = () => {
  const { admin } = useSelector((state) => state.admin);

  return admin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoutes;
