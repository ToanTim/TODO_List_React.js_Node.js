import React, { useState } from "react";
import "./Navigation.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import LogoImage from "../assets/images/Logo1.png";
const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  // id={showmenu ? "hidden" : ""}: if showmenu = true then id = hidden else ""
  // <input type="text" placeholder="Search..." />
  // <button>
  //   <SearchIcon />
  // </button>
  return (
    <div className="Navbar">
      <div className="RightSide">
        <a href="/">
          <img className="logoImage" src={LogoImage} alt="logoImage" />
        </a>
      </div>
      <div className="LeftSide">
        <div className="Link" id={showmenu ? "hidden" : ""}>
          <a href="assignment">Assignment</a>
          <a href="feed-back">Feedback</a>
          <a href="about-us">About us</a>
          <a href="sign-up">Signup</a>
          <a href="login">Login</a>
        </div>
        <button onClick={() => setShowmenu(!showmenu)}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
