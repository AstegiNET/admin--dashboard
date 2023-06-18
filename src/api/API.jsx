// const BASE_URI = "http://localhost:5000/api";
// export const CLIENT_BASE_URL = "http://localhost:3000";

const BASE_URI = "https://astegni-net-back-end.vercel.app/api";
export const CLIENT_BASE_URL = "https://astegni-net-back-end.vercel.app";

export const LOGIN_ADMIN = `${BASE_URI}/admins/login`;
export const GET_TUTEES = `${BASE_URI}/tutees/getTutees`;
export const GET_TUTORS = `${BASE_URI}/tutors/search`;
export const FETCH_REQUESTS = `${BASE_URI}/request/fetchRequests`;
export const FETCH_ENROLLMENTS = `${BASE_URI}/request/fetchEnrollments`;

export const GET_TUTOR = `${BASE_URI}/tutors/tutor`;

export const INITIALIZE_PAY = `${BASE_URI}/payment/pay`;
export const ADD_PAY = `${BASE_URI}/payment/addPay`;
export const VERIFY_PAY = `${BASE_URI}/payment/pay/verify`;
export const GET_PAYMENT = `${BASE_URI}/payment/getPayment`;

export const DELETE_REQUEST = `${BASE_URI}/request/deleteRequest`;
export const GET_REQUESTS = `${BASE_URI}/request/getRequests`;
export const GET_COURSE = `${BASE_URI}/courses/getCourse`;
export const FETCH_ALL_COURSES = `${BASE_URI}/courses/getAllCourses`;
