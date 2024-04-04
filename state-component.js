import React, {Component} from 'react';

class BasicStateComponent extends Component{
    constructor(){
		super();
			this.state={
				"name":"Venkat"
			}
	}
	changename(){	
		this.setState({
			"name":"John"
		})
	}	
	render(){
		let buttonstyle ={
			display:" flex",
			justifyContent:" center",
			alignItems: "center",
			gap: "10px",		
		}
		return(
		<div>
		<h1>My name is {this.state.name}</h1>
		<button style={buttonstyle} onClick ={()=> {return this.changename()}}>Change Name</button>
       </div>
	   )
	}

}

export default BasicStateComponent;