import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component{
 
    render(){   
        return(
            <div className="todo-list">
                {
                    this.props.items.map((value, index)=>{
                        return (
                             <React.Fragment key={index}>
                                <p className="list-item">{value}</p> 
                                    <button className="remove-todo" onClick={()=>{this.props.removeTodo(index)}}>Delete</button>
                                    <button className="donebutton" onClick={()=>{this.props.addDone(index)}}>done</button>
                            </React.Fragment>
                    
                         )
                    })
                }
            
            </div> 
        );
    }
}
export default TodoList;