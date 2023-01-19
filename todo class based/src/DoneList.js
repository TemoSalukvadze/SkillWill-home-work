import React, { PureComponent } from "react";
import "./DoneList.css";

class DoneList extends PureComponent{
    
    render(){   
        
        return(
            <div className="done-list">
                 <p className="done-text">{this.props.items}</p>   
                 {console.log("donelist comnponent rendered")}
            </div> 
            
        );
    }
}
export default DoneList;

