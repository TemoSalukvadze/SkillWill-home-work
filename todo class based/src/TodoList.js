import React, { PureComponent } from "react";
import "./TodoList.css";

class TodoList extends PureComponent{
    render(){   
        const { items, removeTodo, addDone, index} = this.props;
            return (
                <div >
                   <p className="list-item">{items}</p> 
                    <button className="remove-todo" 
                            onClick={(event)=>{removeTodo(event, index)}}>Delete</button>
                    <button className="donebutton" 
                            onClick={(event)=>{addDone(event, index)}}>done</button>
                </div>            
            )  
        }
    }
export default TodoList;