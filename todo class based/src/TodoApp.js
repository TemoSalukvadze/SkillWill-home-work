import React, { Component } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import "./TodoApp.css";

class TodoApp extends Component {
  state={
      inputData:"",
      todoItems:[],
      doneItems:[]
    }
  
  changeTodoInput = (event) =>{
    this.setState({inputData:event.target.value})
   
  }

  addTodo = (event) =>{
    event.preventDefault();
    if(this.state.inputData){
      let newTodoItems=[...this.state.todoItems, this.state.inputData];
      this.setState({
        todoItems: [...newTodoItems], 
        inputData:""
      }) ;

    }else{
      window.alert("add job");
    }   
  }

  addDone = (event, index) =>{
    event.preventDefault();
   let tmpTodoItems = [...this.state.todoItems];
   let tmpDoneItems = [...this.state.doneItems];   
   tmpDoneItems.unshift(tmpTodoItems.splice(index, 1)[0]);
   this.setState({
    doneItems: tmpDoneItems,
    todoItems: tmpTodoItems
    })
  }
 
  removeTodo =(event, index) =>{
    event.preventDefault();
    let tmptodoItems=[...this.state.todoItems];
    tmptodoItems.splice(index, 1);
    this.setState({todoItems:tmptodoItems});
  }

  render () {
  return (
    <div className="todo-app">
      <div className="header-box">
       <h2 className="text-header">Todo App</h2>
       </div>
        <div className="input-group">
          <input type="text" className="input-text" onChange={this.changeTodoInput} value={this.state.inputData}/>
        </div> 
            <div className="button-box">
              <button className="button" onClick={this.addTodo}>Add Job</button>
            </div>
            <div className="todolist-box"> Todo 
              {this.state.todoItems.map((item, index) => (
                <TodoList key={index} 
                  items={item} 
                  index={index} 
                  removeTodo={this.removeTodo} 
                  addDone={this.addDone}
                  />
              )              
              )}    
            </div>

            <div className="donelist-box"> Done 
                {this.state.doneItems.map((item, index) => (                  
                    <DoneList key={index} items={item}/>                                   
                ))}
            </div>
    </div>
  );
  }
}

export default TodoApp