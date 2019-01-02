import React, { Component } from 'react';


class Board extends Component{
// fire=(e)=>{
// 	e.preventDefault();
// 	this.props.fireClick();
// }
				// {this.props.boardValue}
	render(){
		return (
			<div className="cell" onClick={this.props.fireClick} id={this.props.id}>
			</div>
			)
	}
}

export default Board