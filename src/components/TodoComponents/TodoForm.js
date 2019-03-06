import React from "react";
//displays an input field, a submit button

function TodoForm(props) {
  return (
    <form>
      <input 
        type = "text"
        name = "todo"
        placeholder = "...todo"
        onChange={props.changeHandler}
        value = {props.value}
      />
      <button onClick={props.addHandler}>Add Todo</button>
      <button onClick={props.clearCompletedHandler}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;