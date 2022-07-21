import React, { useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {autoSignIn} from "../actions/user"

export default function ProtectedRoutes() {
  const dispatch = useDispatch();
  const location = useLocation();
  const profile = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(autoSignIn());
  }, [ dispatch, location]);
  return profile ? <Outlet /> : <Navigate to="/sign-in" />;
}
