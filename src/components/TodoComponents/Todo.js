import React from "react";
//<Todo /> is a component that takes in the todo data (including added data) and displays the list to the screen.

function Todo(props) {
  return <div>{props.item.task}</div>;
}
export default Todo;