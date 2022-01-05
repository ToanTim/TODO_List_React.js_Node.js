import React, { useState } from "react";
import "./Assignment.css";
import { v4 as uuid } from "uuid";
import TaskBar from "../components/TaskBar.component";
import { createNewTask } from "../data/todoadd";
import { deleteTask } from "../data/tododelete";
import { checkDoneTask } from "../data/todocheckdone";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
class Assignment extends React.Component {
  //const user_id = uuid();
  //localStorage.removeItem("user_id");

  //setMake_User_id(new_user_id);
  /* if (user_id === null) {
    setMake_User_id(new_user_id);
    localStorage.setItem("user_id", make_user_id);
    const get_user_id = localStorage.getItem("user_id");
    console.log("this state new id: " + get_user_id);
  } else console.log("this state already have id: " + user_id); */
  //localStorage.removeItem("user_id");

  /* console.log(user_id); */

  constructor(props) {
    super(props);
    this.state = {
      fourdigit: "",
      checkDeleteTask: false,
      addtask: false,
      checkDone: true,
      newTask: [],
      items: [],
      items_random: [],
      DataisLoaded: false,
      DataisLoaded_random: false,
      value: "",
      value1: "",
      user_id: "",
      task_id: "",
      task_name: "",
      task_content: "no description",
      currentDivId: "",
    };
    this.handleAddTaskOnClick = this.handleAddTaskOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onClickTaskBar = this.onClickTaskBar.bind(this);
    this.onClickCheckDone = this.onClickCheckDone.bind(this);
  }

  //control re-render so that it won re render when no need
  shouldComponentUpdate(nextProps) {
    console.log("Greeting - shouldComponentUpdate lifecycle");
    if (nextProps.addtask !== this.state.addtask) {
      return true;
    } else if (nextProps.newTask !== this.state.newTask) {
      return true;
    } else return false;
  }

  componentDidMount() {
    fetch("http://21wsp9pw.course.tamk.cloud/api/v1/task")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });

    fetch("http://21wsp9pw.course.tamk.cloud/api/v1/task/random")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items_random: json,
          DataisLoaded_random: true,
        });
      });
  }

  handleAddTaskOnClick() {
    console.log("this is: handleClick");
    this.setState({
      addtask: !this.state.addtask,
    });
    console.log(this.state.addtask);
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({
        task_name: event.target.value,
      });
    } else if (event.target.id === "description") {
      this.setState({
        task_content: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    this.state.task_id = uuid();
    var user_id = localStorage.getItem("userID_worklist");
    this.state.newTask = {
      user_id: user_id,
      task: {
        task_id: this.state.task_id,
        task_name: this.state.task_name,
        task_content: this.state.task_content,
      },
    };
    createNewTask(this.state.newTask);

    this.handleAddTaskOnClick();
    window.location.reload(false);
    this.setState({
      task_name: "",
      task_content: "no description",
      newTask: [],
    });
    event.preventDefault();
  }

  onClickCheckDone() {
    checkDoneTask(this.state.currentDivId);
    window.location.reload(false);
    this.forceUpdate();
  }

  handleDelete() {
    deleteTask(this.state.currentDivId);
    window.location.reload(false);
    this.forceUpdate();
    this.setState({
      checkDeleteTask: !this.state.checkDeleteTask,
    });
  }

  onClickTaskBar(e) {
    console.log("clicked");
    console.log(e.currentTarget.id);

    if (this.state.checkDeleteTask === false) {
      this.setState({ fourdigit: "" });
    } else {
      this.setState({
        fourdigit:
          this.state.currentDivId[0] +
          this.state.currentDivId[1] +
          this.state.currentDivId[2] +
          this.state.currentDivId[3],
      });
    }
    this.setState({
      currentDivId: e.currentTarget.id,
      checkDeleteTask: !this.state.checkDeleteTask,
      addtask: false,
    });
  }

  render() {
    //POST: generate and check user id
    //-------------------------------------------------------------
    //generate new user_id
    localStorage.removeItem("userID");

    const user_id = uuid();
    console.log("new id generate: " + user_id);

    //get user id from local storage from user browser
    var get_user_id = localStorage.getItem("userID_worklist");

    //check if this is new user or not if new set new id otherwise use old id
    if (get_user_id === null) {
      console.log("create new id");
      localStorage.setItem("userID_worklist", user_id);
      get_user_id = localStorage.getItem("userID_worklist");
      console.log(" now user have id for first time: " + get_user_id);
    } else {
      console.log(" Id is already set:  " + get_user_id);
      this.state.user_id = get_user_id;
    }
    //END
    //-------------------------------------------------------------

    return (
      <div className="container">
        <button onClick={this.handleAddTaskOnClick} placeholder="Create Task">
          <AddIcon />
        </button>
        <div className="taskTable">
          {this.state.items.map((item) => {
            if (
              item.user_id === this.state.user_id &&
              item.task.task_id[0] +
                item.task.task_id[1] +
                item.task.task_id[2] +
                item.task.task_id[3] ===
                "done"
            )
              return (
                <TaskBar
                  name={item.task.task_name}
                  content={item.task.task_content}
                  id={item.task.task_id}
                  onClickTaskBar={this.onClickTaskBar}
                  checkdone={this.state.checkDone}
                />
              );
            else if (item.user_id === this.state.user_id)
              return (
                <TaskBar
                  name={item.task.task_name}
                  content={item.task.task_content}
                  id={item.task.task_id}
                  onClickTaskBar={this.onClickTaskBar}
                />
              );
          })}
          {this.state.items_random.map((item1) => (
            <TaskBar
              content={item1.task.task_content}
              id={item1.task.task_id}
            />
          ))}
        </div>
        <div
          className={this.state.addtask ? "addTaskPopUp" : "removeTaskPopUp"}
        >
          <h1>Create new task</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                id="title"
                required="required"
                type="text"
                value={this.state.task_name}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Description:
              <input
                id="description"
                required="required"
                type="text"
                value={this.state.task_content}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" value="Submit">
              Creat task
            </button>
          </form>

          <button
            onClick={this.handleAddTaskOnClick}
            style={{ position: "obsolute", top: "80%", left: "80%" }}
          >
            Cancel
          </button>
        </div>

        <div
          className={
            this.state.checkDeleteTask
              ? "taskBarCheckDelete"
              : "removeTaskPopUp"
          }
        >
          <h2 style={{ "text-align": "center" }}>
            task id: {this.state.currentDivId}
          </h2>

          <button
            onClick={this.onClickTaskBar}
            style={{ position: "obsolute", top: "80%", left: "80%" }}
          >
            Cancel
          </button>

          <button
            onClick={this.onClickCheckDone}
            style={{ position: "obsolute", top: "80%", left: "60%" }}
          >
            <CheckIcon />
          </button>

          <button
            onClick={this.handleDelete}
            style={{ position: "obsolute", top: "80%", left: "40%" }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
}
export default Assignment;
