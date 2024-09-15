import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from './AdminDashboard'
import UserDash from './User/UserDash'
import Login from './Auth/Login'
import AdminLogin from './Auth/AdminLogin'
import Landing from "./Landing";
import Signup from './Auth/Signup'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user/:uuid" element={<UserDash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}