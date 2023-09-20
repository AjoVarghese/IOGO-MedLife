import React, { useState } from "react";
import "./Tasks.css";

function Tasks({ completedTasks, upcomingTasks }) {
  const [selectedMenu, setSelectedMenu] = useState("upcoming");
  const setUpcomingTasks = () => {
    setSelectedMenu("upcoming");
    upcomingTasks(true);
    completedTasks(false);
  };

  const setCompletedTasks = () => {
    setSelectedMenu("completed");
    completedTasks(true);
    upcomingTasks(false);
  };

  return (
    <div className="tasks-div">
      <h1>Tasks</h1>
      <span>Clinical {">"} Tasks</span>
      <div className="options">
        <p
          onClick={setUpcomingTasks}
          className={selectedMenu === "upcoming" ? "active" : ""}
        >
          Upcoming Tasks
        </p>
        <p
          onClick={setCompletedTasks}
          className={selectedMenu === "completed" ? "active" : ""}
        >
          Completed Tasks
        </p>
      </div>
    </div>
  );
}

export default Tasks;
