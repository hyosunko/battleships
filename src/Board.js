import React, { Component } from 'react';


class Board extends Component{
// fire=(e)=>{
// 	e.preventDefault();
// 	this.props.fireClick();
// }
				// {this.props.boardValue}
	render(){
		let cellStyle={
	      height: this.props.boxSize,
	      width: this.props.boxSize
	    }
		return (
			<div style={cellStyle} className="cell" onClick={this.props.fireClick} id={this.props.id}>
			</div>
			)
	}
}

export default Board