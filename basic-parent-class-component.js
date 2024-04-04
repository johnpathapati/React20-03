import React, {Component} from "react";
import BasicChlidClassComponent from "./basic-child-class-component";

class BasicParentClassComponent extends Component{
    render(){
        return(
            <div>
                <h1 className="headStyle">This is Parent Class Compoent for External CSS</h1>
                <BasicChlidClassComponent></BasicChlidClassComponent>
            </div>
        )
    }
}

export default BasicParentClassComponent;