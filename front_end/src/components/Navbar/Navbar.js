import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import "./Navbar.css";
import logo from "../..//images/insta.png"
import avatar from "../../images/avatar.jpg"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  return (
    <>
      <nav>
        <Container maxWidth="lg">
          <div className="main-nav">
            <div className="nav-logo">
                <img src={logo}  height="45px" alt="" />
            </div>
            <div className="nav-list">
                <ul>
                    <li className="nav-item"><a><HomeOutlinedIcon /></a></li>
                    <li className="nav-item"><a><ChatBubbleOutlineOutlinedIcon /></a></li>
                    <li className="nav-item"><button><AddBoxOutlinedIcon /></button></li>
                    <li className="nav-item"><a><NotificationsOutlinedIcon /></a></li>
                    <li><Avatar alt="avatar" src={avatar} sx={{ width: 30, height: 30 }}/></li>
                </ul>
            </div>
          </div>
        </Container>
      </nav>
      <div className="nav-gap"></div>
      <Outlet />
    </>
  );
};
