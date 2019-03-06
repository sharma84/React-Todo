import React from "react";
//<Todo /> is a component that takes in the todo data (including added data) and displays the task to the screen.eg: organize garage

function Todo(props) {
  return <div>{props.todo.task}</div>;
}
export default Todo;