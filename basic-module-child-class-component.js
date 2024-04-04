import React, {Component} from "react";
import module from './CSS/external.module.css';

class BasicChildModuleClassComponent extends Component{
    render(){
        return(
            <div>
                <h1 className={module.success}>This is Child Class Component for External CSS for Success</h1>
                <h1 className={module.error}>This is Child Class Component for External CSS for Error</h1>
            </div>
        )
    }
}

export default BasicChildModuleClassComponent;