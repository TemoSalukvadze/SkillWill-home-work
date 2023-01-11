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

  addTodo = () =>{
    if(this.state.inputData){
      let newTodoItems=[...this.state.todoItems,this.state.inputData];
      this.setState({todoItems:newTodoItems, inputData:""}) ;
    }else{
      window.alert("add job");
    }
    
  }

  addDone = (index) =>{
    let tmpDoneItems = this.state.doneItems;
    let tmpTodoItems = this.state.todoItems;
    let tmpDoneItem = tmpTodoItems.splice(index, 1);
    tmpDoneItems.unshift(...tmpDoneItem);
     this.setState({
       doneItems: tmpDoneItems
     });
    console.log(this.state.doneItems);
    console.log(this.state.todoItems);
   
  }
 
  removeTodo =(index) =>{
    let todoItems=[...this.state.todoItems];
    let newTodoItems = todoItems.filter((value, key)=>{
       return index!==key
    })
    this.setState({todoItems:newTodoItems});
    //console.log(this.state.todoItems);
    //console.log(this.state.doneItems);
  }

  render () {
    
  return (
    <div className="todo-app">
      <div className="header-box">
      <h2 className="text-header">Todo App</h2>
      </div>
        <div className="input-group">
          <input type="text"  className="input-text" onChange={this.changeTodoInput} value={this.state.inputData}/>
        </div> 
            <div className="button-box">
              <button className="button" onClick={this.addTodo}>Add Job</button>
            </div>
              <div className="todolist-box"> Todo               
                <TodoList items={this.state.todoItems} removeTodo={this.removeTodo} addDone={this.addDone}/>
              </div>
                <div className="donelist-box"> Done
                  <DoneList items={this.state.doneItems} addDone={this.addDone} removeTodo={this.removeTodo}/>
                </div>
    </div>
  );
  }
}

export default TodoApp