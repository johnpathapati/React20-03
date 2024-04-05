import React, {Component} from "react";

class ChildListDisplay extends Component{
    render(props){
        return(
            <div>{this.props.mystudents}</div>
        );
    }
}

export default ChildListDisplay;