import React, {Component} from "react";
import BasicChildModuleClassComponent from "./basic-module-child-class-component";


class BasicParentModuleClassComponent extends Component{
    render(){
        return(
            <div>
                <h1 className={module.headStyle}>This is Parent Class Compoent for External CSS</h1>
                <BasicChildModuleClassComponent></BasicChildModuleClassComponent>
            </div>
        )
    }
}

export default BasicParentModuleClassComponent;