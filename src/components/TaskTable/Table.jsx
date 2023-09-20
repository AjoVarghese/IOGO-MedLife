import React from "react";
import "./Table.css";
import Search from "../../assets/images/search.svg";
import Date from "../../assets/images/date.svg";
import Filter from "../../assets/images/filter.svg";
import DP from "../../assets/images/profile.svg";

function Table({ showCompletedTasks, showUpcomingTasks }) {
  const taskData = [
    {
      Name: "Malenie Laurent",
      AppId: "324424",
      Assessment: "Intake Assessment",
      TaskId: "2323232",
      DateTime: " December 22, 2022 10:30 AM",
      Duration: "1 hour",
      Status: "Overdue",
      Date: "Thursday, 28 Dec 2022",
    },
    {
      Name: "Malenie Laurent",
      AppId: "324424",
      Assessment: "Physiotherapy Assessment",
      TaskId: "2323232",
      DateTime: " December 22, 2022 10:30 AM",
      Duration: "1 hour",
      Status: "Upcoming",
      Date: "Thursday, 28 Dec 2022",
    },
    {
      Name: "Malenie Laurent",
      AppId: "324424",
      Assessment: "Intake Assessment",
      TaskId: "2323232",
      DateTime: " December 22, 2022 10:30 AM",
      Duration: "1 hour",
      Status: "Overdue",
      Date: "Thursday, 28 Dec 2022",
    },
  ];
  return (
    <div className="table-main-div">
      <div className="table-filters">
        <div className="search-div">
          <img src={Search} alt="" />
          <input type="text" name="" id="" placeholder="Search" />
        </div>

        <div className="date-inp">
          <span>
            <img src={Date} alt="" />
          </span>
          <input type="text" name="" id="" placeholder="From Date" />
        </div>
        <div>
          <p>to</p>
        </div>
        <div className="date-inp">
          <span>
            <img src={Date} alt="" />
          </span>
          <input type="text" name="" id="" placeholder="To Date" />
        </div>

        <div className="apply">
          <button>Apply</button>
        </div>
        <div className="reset">
          <button>Reset</button>
        </div>
        <div className="filter-div">
          <button>
            <img src={Filter} alt="" />
            Filter
          </button>
        </div>
      </div>

      {taskData
        ? taskData.map((data) => {
            const textColorStyle = {
              color: data.Status === "Overdue" ? "red" : "#00B071",
            };
            return showUpcomingTasks === true &&
              showCompletedTasks === false ? (
              <>
                <div className="date">
                  <p>{data.Date}</p>
                </div>
                <div className="card-div">
                  <div className="profile-dp">
                    <img src={DP} alt="" />
                  </div>
                  <div className="profile-details">
                    <h3>{data.Name}</h3>
                    <p className="app-id">Appointment Id: {data.AppId}</p>
                    <p className="assessment">{data.Assessment}</p>
                  </div>

                  <div className="task-details">
                    <p>
                      Task ID : <span>{data.TaskId}</span>
                    </p>
                    <p>
                      Date & time: <span>{data.DateTime}</span>
                    </p>
                    <p>
                      Duration: <span>{data.Duration}</span>
                    </p>
                  </div>
                  <div className="tasks-status">
                    <p>
                      Status: <span style={textColorStyle}>{data.Status}</span>
                    </p>
                    <button>Start Assessment</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="date">
                  <p>{data.Date}</p>
                </div>
                <div className="card-div">
                  <div className="profile-dp">
                    <img src={DP} alt="" />
                  </div>
                  <div className="profile-details">
                    <h3>{data.Name}</h3>
                    <p className="app-id">Appointment Id: {data.AppId}</p>
                    <p className="assessment">{data.Assessment}</p>
                  </div>

                  <div className="task-details">
                    <p>
                      Task ID : <span>{data.TaskId}</span>
                    </p>
                    <p>
                      Date & time: <span>{data.DateTime}</span>
                    </p>
                    <p>
                      Duration: <span>{data.Duration}</span>
                    </p>
                  </div>
                  <div className="tasks-status">
                    <button>View Assessment</button>
                  </div>
                </div>
              </>
            );
          })
        : ""}
    </div>
  );
}

export default Table;
