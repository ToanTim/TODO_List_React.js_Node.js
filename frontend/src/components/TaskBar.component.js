import React from "react";
import "./TaskBar.css";

const TaskBar = ({ name, content, id, onClickTaskBar, checkdone }) => {
  return (
    <div
      className="TaskBar"
      onClick={onClickTaskBar}
      id={id}
      style={{ "background-color": checkdone ? "#d6ff99" : "white" }}
    >
      <h3 style={{ "text-decoration": checkdone ? "line-through" : "none" }}>
        {name}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default TaskBar;
