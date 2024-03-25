import React from "react";

function BasicPropsFunction(props) {
    const name = props.text;
    const Tool = props.tool;
      return (
        <div>
          <h1>My name is {name}</h1>
          <h1>I am {Tool} Developer.</h1>
        </div>
      );
  }
  
  export default BasicPropsFunction;