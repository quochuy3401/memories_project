import React from "react";
import "./Auth.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const user = useSelector((state) => state.user);
  return !user ? <div>Auth</div> : <Navigate to="/" />;
}

