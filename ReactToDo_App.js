import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
       this.state = {
           todos: [],
           currentTodo: ""
       };
  }

  onInputChange = e => {
      this.setState({ currentTodo: e.target.value});
  }

  onClick = () => {
      let todosCopy = this.state.todos.slice();
      todosCopy.push(this.state.currentTodo);

      this.setState({ todos: todosCopy, currentTodo: ""});
  }
  render() {
      return (
          <div>
          <input paceholder = "Enter todo" value = {this.state.currentTodo}/>
          <button onClick = {this.onClick} >Add!</button>
          <br/>
          { this.state.todos.length === 0 ? "No todos yet!" : "You still have some todos"}
          </div>
      );
  }
}

export default App;
