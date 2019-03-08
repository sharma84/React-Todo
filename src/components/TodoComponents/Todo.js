import React from "react";
import "./Todo.css";
//<Todo /> is a component that takes in the todo data (including added data) and displays the list to the screen.

function Todo(props) {
  return (
    <div
      className={props.todo.completed ? "completed" : " "}
      onClick={(event) => {
        props.toggleCompleteHandler(props.todo.id);
      }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
}
export default Todo;
