import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth/Auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useSelector } from "react-redux";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
