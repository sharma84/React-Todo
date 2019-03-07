import React from "react";
//displays an input field, a submit button

function TodoForm(props) {
  return (
    <form>
      <input 
        type = "text"
        name = "item"
        onChange = {props.inputHandler}
        value = {props.item}
        placeholder = "...todo"
        
      />
      <button onClick={props.addItemHandler}>Add Todo</button>
      <button onClick={props.clearCompletedHandler}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;