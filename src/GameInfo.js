import React, { Component } from 'react';

class GameInfo extends Component{
	reset=(e)=>{
		// prevent page refresh
		e.preventDefault()
		// call board initialize function
		this.props.reset()
	}

	render(){
		return (
			<div className="footer">
				<div>
					<p>Torpedo Remains : {this.props.boardInfo.torpedoCount}</p>
					<form className="form-button" onSubmit={this.reset}>
						<button className="button1" type="submit">Reset</button>
					</form>
				</div>
				<div className="game-info">
					Ship Remains : {this.props.boardInfo.battleShipRemains}/{this.props.boardInfo.battleShipTotal}<br/>
					{this.props.boardInfo.shipInfo[0][1]}({this.props.boardInfo.shipInfo[0][2]}Blocks) : {this.props.boardInfo.shipInfo[0][4]}/{this.props.boardInfo.shipInfo[0][3]} <br/>
					{this.props.boardInfo.shipInfo[1][1]}({this.props.boardInfo.shipInfo[1][2]}Blocks) : {this.props.boardInfo.shipInfo[1][4]}/{this.props.boardInfo.shipInfo[1][3]}<br/>
					{this.props.boardInfo.shipInfo[2][1]}({this.props.boardInfo.shipInfo[2][2]}Blocks) : {this.props.boardInfo.shipInfo[2][4]}/{this.props.boardInfo.shipInfo[2][3]}<br/>
					{this.props.boardInfo.shipInfo[3][1]}({this.props.boardInfo.shipInfo[3][2]}Blocks) : {this.props.boardInfo.shipInfo[3][4]}/{this.props.boardInfo.shipInfo[3][3]}<br/>
					{this.props.boardInfo.shipInfo[4][1]}({this.props.boardInfo.shipInfo[4][2]}Blocks) : {this.props.boardInfo.shipInfo[4][4]}/{this.props.boardInfo.shipInfo[4][3]}<br/>
				</div>

			</div>
			)
	}
}

export default GameInfo