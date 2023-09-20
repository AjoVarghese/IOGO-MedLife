import React, { useState } from "react";
import "./Sidebar.css";
import Appointment from "../../assets/images/appointment.svg";
import Tasks from "../../assets/images/tasks.svg";
import Arrow from "../../assets/images/arrow.svg";

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("tasks");
  return (
    <div className="sidebar-div">
      <h1 className="main-head">MedLife</h1>
      <div className="options">
        <div className="apply-clinic">
          <button>
            Apply Clinic{" "}
            <span>
              <img src={Arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="menu-options">
          <div
            className={`menu ${
              selectedMenu === "appointment" ? "selected" : ""
            }`}
            onClick={() => setSelectedMenu("appointment")}
          >
            <span>
              <img src={Appointment} alt="" />
            </span>
            <p>Appointment</p>
          </div>
          <div
            className={`menu ${selectedMenu === "tasks" ? "selected" : ""}`}
            onClick={() => setSelectedMenu("tasks")}
          >
            <p className="task-menu task">
              <span>
                <img src={Tasks} alt="" />
              </span>
              Tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
