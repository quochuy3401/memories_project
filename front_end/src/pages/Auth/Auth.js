import React, { useEffect } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { autoSignIn } from "../../actions/user";

export default function Auth() {
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(autoSignIn());
  }, [ dispatch, location]);
  return profile ? <Navigate to="/" /> : <Outlet />;
}

