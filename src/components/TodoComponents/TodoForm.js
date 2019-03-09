import React from "react";
//displays an input field, a submit button

function TodoForm(props) {
  return (
    <form>
      <input 
        type="text"
        name="todo"
        onChange={props.onChangeHandler}
        value={props.value}
        placeholder="...todo"
      />
      <div className="submit">
      <button onClick={props.addItemHandler}>Add Todo</button>
      <button onClick={props.clearCompletedTodos}>Clear Completed</button>
      </div>
    </form>
  );
}

export default TodoForm;