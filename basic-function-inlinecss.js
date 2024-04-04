import React from "react";

function BasicFunctionInlineCss(){
    let headStyle ={
        color:"White",
        backgroundColor:"orange",
        border:"2px solid black"
    }
    return(
        
        <div>
            <h1 style={headStyle}>This is Function Inline CSS </h1>
        </div>
    )
}

export default BasicFunctionInlineCss;