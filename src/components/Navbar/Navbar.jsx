import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";
import Login from "../../assets/images/login.svg";
import Question from "../../assets/images/question.svg";
import Bell from "../../assets/images/bell.svg";
import DP from "../../assets/images/dp.svg";

function Navbar() {
  return (
    <div className="navbar-div">
      <div className="logo-div">
        <img src={Logo} alt="" />
      </div>
      <div className="menu-div">
        <li>Dashboard</li>
        <li>Patients</li>
        <li>Human Resources</li>
        <li className="clinical">Clinical</li>
        <li>Compliance</li>
        <li>Billing</li>
        <li>Reports</li>
      </div>
      <div className="right-div">
        <li>
          {" "}
          <button className="clocked-in">
            <span>
              <img src={Login} alt="" />
            </span>{" "}
            <span>Clocked In</span>
          </button>
        </li>
        <li>
          <img src={Question} alt="" />
        </li>
        <li>
          <img src={Bell} alt="" />
        </li>
        <li>
          <img src={DP} alt="" /> <span>Account</span>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
