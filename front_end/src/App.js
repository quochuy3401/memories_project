import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth/Auth";
import SignIn from "../src/components/SignIn/SignIn";
import SignUp from "../src/components/SignUp/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoSignIn } from "./actions/user";

function App() {
  // const location = useLocation();
  const dispatch = useDispatch();
  // const profile = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(autoSignIn());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route element={<Auth />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// element={<Auth />}
export default App;
