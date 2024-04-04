import React, {Component} from "react";
import './CSS/externalclass1.css';


class BasicChlidClassComponent extends Component{
    render(){
        return(
            <div>
                <h1 className="success">This is Child Class Component for External CSS for Success</h1>
                <h1 className="error">This is Child Class Component for External CSS for Error</h1>
                
            </div>
        )
    }
}

export default BasicChlidClassComponent;