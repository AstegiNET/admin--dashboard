/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import AdminProtectedRoutes from "./utils/AdminProtectedRoutes";
import Header from "./components/Header";
import Enrollments from "./pages/Enrollments";
import Tutors from "./pages/Tutors";
import Tutees from "./pages/Tutees";
import Requests from "./pages/Request";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/tutees" element={<Tutees />} />
          <Route path="/requests" element={<Requests />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
