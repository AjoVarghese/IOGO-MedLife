import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Task from "../components/Tasks/Tasks";
import "./Task.css";
import Table from "../components/TaskTable/Table";

function Tasks() {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [showUpcomingTasks, setShowUpcomingTasks] = useState(true);
  return (
    <div className="main-section">
      <div className="sidebar-section">
        <Sidebar />
      </div>
      <div className="content-section">
        <Task
          completedTasks={setShowCompletedTasks}
          upcomingTasks={setShowUpcomingTasks}
        />
        <div className="table-div">
          <Table
            showCompletedTasks={showCompletedTasks}
            showUpcomingTasks={showUpcomingTasks}
          />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
