import React,{Component} from 'react';

class BasicClassComponentCreateref extends Component{
	constructor(){
		super();
		this.inputRef = React.createRef();
	}
	
	componentDidMount(){
		this.inputRef.current.focus();
	}
	render(){
		return(
		<div>
		<h1>Here i created a reff 
		which is used to Focus the textbox when we reload
		the webpage</h1>
		EnterData:<input type="text" ref={this.inputRef}/>
		</div>
		);
	}
}
export default BasicClassComponentCreateref;