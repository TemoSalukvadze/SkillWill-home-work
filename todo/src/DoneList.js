import React, { Component } from "react";
import "./DoneList.css";

class DoneList extends Component{
 
    render(){   
        return(
            <div className="done-list">
            {
                this.props.items.map((value, index1,)=>{
                    return (
                        <React.Fragment key={index1}>
                            <p className="done-text">{value}</p>   
                        </React.Fragment>
                    )
                })
            }
            </div> 
        );
    }
}
export default DoneList;

