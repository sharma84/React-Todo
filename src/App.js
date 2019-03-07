import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  { task: "Organize Garage", id: 1528817077286, completed: false },
  { task: "Bake Cookies", id: 1528817084358, completed: false }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      item: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // addItemHandler = event => {
  // event.preventDefault();
  // this.setState((prevState) => {
  // return {todos: [...prevState.todos,//spread attributes-
  //{ task: prevState.item,id: Date.now(),completed: false}],item: ""}; });};



  addItemHandler = event => {
    event.preventDefault();
    const newTodo = { task: this.state.item, id: Date.now(), completed: false }; 
    this.setState({
      todos: [...this.state.todos, newTodo],
      item: "",
    });
  };


  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          item = {this.state.item}
          inputHandler = {this.inputHandler}
          addItemHandler = {this.addItemHandler}
        />
      </div>
    );
  }
}
export default App;