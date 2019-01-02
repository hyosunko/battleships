import React, { Component } from 'react';


class Board extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		isOn: false,
	// 		// img: "images/patrol_boat1.gif"
	// 		// img: "http://www.myiconfinder.com/uploads/iconsets/256-256-9b952124a7973cedd363015231bfe197.png"
	// 	}
	// }
// fire=(e)=>{
// 	e.preventDefault();
// 	this.props.fireClick();
// }
	render(){
		let cellStyle={
	      height: this.props.boxSize,
	      width: this.props.boxSize,
	      // backgroundColor: 'blue',
	      // backgroundImage: `url(${this.state.img})`
	    }
		return (
			<div style={cellStyle} className="cell" onClick={this.props.fireClick} id={this.props.id}>
				<div className="icon">
					{this.props.shipImage}
				</div>
			</div>
			)
	}
}

export default Board