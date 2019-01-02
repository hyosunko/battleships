import React, { Component } from 'react';

class Header extends Component{
	render(){
		return (
			<div className="title-header">
				Battleship Game
				<p>{this.props.boardInfo.shipHitMessage}{this.props.boardInfo.winStatus}</p>
			</div>
			)
	}
}

export default Header