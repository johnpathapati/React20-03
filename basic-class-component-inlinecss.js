import React,{Component} from "react";

class BasicClassComponentinlineCss extends Component{
    render(){
        let headStyle = {
            color:"White",
            backgroundColor:"orange",
            border:"2px solid black"
        }
        return(
            <div>
                <h1 style={headStyle}>This is inline CSS for ClassComponent</h1>
            </div>
        )
    }
}

export default BasicClassComponentinlineCss;