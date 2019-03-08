import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

const todos = [
  { task: "Organize Garage", id: 1528817077286, completed: false },
  { task: "Bake Cookies", id: 1528817084358, completed: false }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      todo: ""
    };
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addItemHandler = (event) => {
    event.preventDefault();
    let newTodo = { task: this.state.todo, id: Date.now(), completed: false };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  toggleCompleteHandler = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              task: todo.task,
              id: todo.id,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    });
  };

  clearCompletedTodos = (event) => {
    event.preventDefault();
    let todos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({ todos });
  };


  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <TodoForm
          value={this.state.todo}
          onChangeHandler={this.onChangeHandler}
          addItemHandler={this.addItemHandler}
          clearCompletedTodos={this.clearCompletedTodos}
        />
        <TodoList
          todos={this.state.todos}
          toggleCompleteHandler={this.toggleCompleteHandler}
        />
      </div>
    );
  }
}
export default App;
