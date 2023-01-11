import React from "react";
import TodoApp from "./TodoApp";
import "./App.css";

class App extends React.Component {

  render(){
    return (
      <div className="app">
      <TodoApp />
      </div>
    );
  }
}
export default App;