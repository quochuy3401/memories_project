import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import "./Navbar.css";
import logo from "../..//images/insta2.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import { logOut } from "../../actions/user";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token } = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/sign-in");
  };

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogOut();
      }
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      <nav>
        <Container maxWidth="lg">
          <div className="main-nav">
            <div className="nav-logo">
              <img src={logo} height="45px" alt="" />
            </div>
            <div className="nav-list">
              <ul>
                <li className="nav-item">
                  <a>
                    <HomeOutlinedIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a>
                    <ChatBubbleOutlineOutlinedIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <button>
                    <AddBoxOutlinedIcon />
                  </button>
                </li>
                <li className="nav-item">
                  <a>
                    <NotificationsOutlinedIcon />
                  </a>
                </li>
                <li onClick={handleLogOut}>
                  <Avatar alt="avatar" sx={{ width: 30, height: 30 }}>
                    {user.firstName.charAt(0).toUpperCase()}
                  </Avatar>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
      <div className="nav-gap"></div>
      <Outlet />
    </>
  );
}
