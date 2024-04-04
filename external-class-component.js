import React, {Component} from "react";
import './CSS/externalclass.css';

class BasicClassComponentExternalCss extends Component{
    render(){
        return(
            <div>
                <h1 className="headStyle">This is External Css of Class Component</h1>
            </div>
        )
    }
}

export default BasicClassComponentExternalCss;