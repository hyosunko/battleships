import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Board from './Board';
import GameInfo from './GameInfo';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      boardSize: 10,
      //0: available, 1: empty hit, 10: ship, 11: ship hit 
      boardArray:[],
      torpedoCount:50,
      //s1: ship key, ship name, ship size, no of ship, no ship remain
      shipInfo:[[1,"Carrier",5,1,1], [2,"Battleship",4,2,2], [3,"Destroyer",3,2,2], [4,"Submarine",3,2,2], [5,"Patrol Boat",2,2,2]],
      shipPosition:[],
      shipHitCondition:[],
      boardColWidth : [],
      shipHitMessage:"",
      winStatus:"",
      battleShipTotal:0,
      battleShipRemains:0,
      clickedCellArray:[],
      boxSize: '50px'
    }
  }

  getScreenWidth=()=>{  
     var de = document.body.parentNode;
     var db = document.body;
     if(window.opera) return db.clientWidth;
     if (document.compatMode=='CSS1Compat') return de.clientWidth;
     else return db.clientWidth;
  }


componentDidMount(){
  let {boardSize, boardArray, torpedoCount, shipInfo, shipPosition, shipHitCondition, boardColWidth, battleShipRemains, battleShipTotal, boxSize} = this.state;
  //fill initial board data with 0
  boardArray = Array(boardSize**2).fill(0);
  let screenWidth = this.getScreenWidth()
  if(screenWidth< 500){
    boxSize = '40px';
  }
  console.log('screenWidth',screenWidth)
  //set up column width
  boardColWidth = Array(boardSize).fill(boxSize)
  console.log("boardColWidth", boardColWidth)
  // this.createBoard();
  // this.placeShip();

  let shipCount = shipInfo.length;
  let currentShipPosition=[];
  let currentShipHitCondition=[];
  let loopBreaker = 1000;
  //loop untill all ships are placed
  battleShipRemains = shipInfo.map(v=>v[4]).reduce((a,b)=>a+b)
  battleShipTotal = battleShipRemains;
  while(shipCount > 0){
    //start with shipInfo[0]
    let shipNamePosition = shipInfo.length - shipCount
    //0: kinds of ships, 1: name of ships, 2:length of ships, 3: # of ships
    let noOfShip = shipInfo[shipNamePosition][3]
    //loop until # of ships are placed
    while(noOfShip>0){
      // set up random position and direction
      // let shipDirection = 1
      let shipDirection = Math.floor(Math.random()*2)
      let firstShipPosition = Math.floor(Math.random()*boardSize**2)
      // console.log("firstShipPosition ", firstShipPosition, shipDirection)
      // x: thens' digit, y = units' digit
      let x = Math.trunc(firstShipPosition/boardSize)%boardSize; 
      let y = firstShipPosition % boardSize;
      // console.log("loopBreaker:", loopBreaker)
      if(loopBreaker<0){
        noOfShip--
        shipCount--
        break;
      }
      // if 1st position of ship + ship size is less than board size w/direction & digit match (0, x), (1, y) 
      if((shipDirection === 0 && x + shipInfo[shipNamePosition][2]<boardSize)||(shipDirection === 1 && y + shipInfo[shipNamePosition][2]<boardSize)){
        // direction : 0 = ten, 1 = one
        let digit = shipDirection ===0 ? boardSize**1:boardSize**0
        // check if any of ship positions are empty
        let checkPositionCount = 0;
        for(let i = 0;i<shipInfo[shipNamePosition][2];i++){
          // check left,right,up,down position
          let xBefore = x-1 <0 ? x : x-1
          let xAfter = x+1 >= boardSize ? x : x+1
          let yBefore = y-1 < 0 ? y : y-1
          let yAfter = y+1 >= boardSize ? y : y+1
          if((boardArray[x*boardSize+y+i*digit]===0)&&(boardArray[(xBefore)*boardSize+y+i*digit]===0)&&(boardArray[(xAfter)*boardSize+y+i*digit]===0)&&(boardArray[x*boardSize+(yAfter)+i*digit]===0)&&(boardArray[x*boardSize+(yBefore)+i*digit]===0)){
          // if(boardArray[x*boardSize+y+i*digit]===0){
            checkPositionCount++
          } 
        }
        // place ship info if checkPositionCoun = size of ship
        if(checkPositionCount === shipInfo[shipNamePosition][2]){
          for(let i = 0; i<shipInfo[shipNamePosition][2];i++){
            //x*boardSize+y : start of array, i*digit: next position adder
            boardArray[x*boardSize+y+i*digit]=shipInfo[shipNamePosition][0]*10
            //collect a ship position
            currentShipPosition.push(x*boardSize+y+i*digit)
            currentShipHitCondition.push(1)
          }
          noOfShip--;
          // add a ship postion to ship position array
          shipPosition.push(currentShipPosition);
          shipHitCondition.push(currentShipHitCondition);
          // reset current ship position array
          currentShipPosition=[];
          currentShipHitCondition=[];
          loopBreaker--;
        }
      }
    }
    shipCount--;
  }

  this.setState({boardArray:boardArray, shipPosition:shipPosition, shipHitCondition:shipHitCondition, boardColWidth:boardColWidth, battleShipRemains:battleShipRemains, battleShipTotal:battleShipTotal, boxSize:boxSize})
  // console.log("shipInfo",shipInfo)
  // console.log("boardArray", boardArray)
  // console.log("shipPosition",shipPosition)
  // console.log("shipHitCondition", shipHitCondition)
  // console.log("boardColWidth",boardColWidth)
}

reset=()=>{
  window.location.reload()  
}



createBoard=()=>{
  let {boardArray, boardSize}=this.state;
  boardArray=Array(boardSize**2).fill(0)
  this.setState=({boardArray:boardArray})
}

placeShip=()=>{
  let {boardSize, boardArray, shipInfo, shipPosition}=this.state;
  let shipCount = shipInfo.length;
  let currentShipPosition=[];
  let loopBreaker = 100;
  boardArray = Array(boardSize**2).fill(0);
  // this.createBoard();
  while(shipCount > 0){
    let shipNamePosition = shipInfo.length - shipCount
    let noOfShip = shipInfo[shipNamePosition][3]
    while(noOfShip>0){
      let firstShipPosition = Math.floor(Math.random()*boardSize**2)
      let shipDirection = Math.floor(Math.random()*2)
      let x = Math.trunc(firstShipPosition/boardSize)%boardSize; 
      let y = firstShipPosition % boardSize;
      // console.log("   ")
      // console.log("1  firstShipPosition: ", firstShipPosition)
      // console.log("loopBreaker:", loopBreaker)
      if(loopBreaker<0){
        noOfShip--
        shipCount--
        break;
      }
      // console.log("ship size: shipname", shipInfo[shipNamePosition][2], shipInfo[shipNamePosition][1])
      // console.log("shipDirection:", shipDirection)
      // console.log("x,y : ", x, y)
      // console.log("x0+ship size", x + shipInfo[shipNamePosition][2])
      // console.log("y1+ship size", y + shipInfo[shipNamePosition][2])
      if((shipDirection === 0 && x + shipInfo[shipNamePosition][2]<boardSize)||(shipDirection === 1 && y + shipInfo[shipNamePosition][2]<boardSize)){
        // console.log("  x, y :after ", x, y)
        let digit = shipDirection ===0 ? boardSize**1:boardSize**0
        // console.log("digit",digit)
        // console.log("shipInfo[shipNamePosition][2]",shipInfo[shipNamePosition][2])
        let checkPositionCount = 0;
        for(let i = 0;i<shipInfo[shipNamePosition][2];i++){
          // console.log("ship pos:", x*boardSize+y+i*digit, boardArray[x*boardSize+y+i*digit])
          if(boardArray[x*boardSize+y+i*digit]===0){
            checkPositionCount++
          } else {
            loopBreaker--;
            break;
          }
          // console.log("checkPositionCount", checkPositionCount)
          if(loopBreaker<0){
            break;
          }
        }
        if(checkPositionCount === shipInfo[shipNamePosition][2]){
          for(let i = 0; i<shipInfo[shipNamePosition][2];i++){
            boardArray[x*boardSize+y+i*digit]=shipInfo[shipNamePosition][0]*10;
            currentShipPosition.push(x*boardSize+y+i*digit)
          }
          noOfShip--;
          shipPosition.push(currentShipPosition);
          currentShipPosition=[];
          loopBreaker--;
        }
      }
    }
    shipCount--;
    loopBreaker--;
    if(loopBreaker<0){
      break;
    }

  }

  this.setState({boardArray:boardArray, shipPosition:shipPosition})
  console.log(boardArray)
}


fireClick = e =>{
  let cellId = parseInt(e.target.id);
  let {boardArray, boardSize, torpedoCount, shipInfo, shipPosition, shipHitCondition, shipHitMessage, winStatus, battleShipRemains, clickedCellArray}=this.state
  console.log(" ")
  console.log(this.state)

  var x = document.getElementById(cellId);
  console.log("x: ",x)
 
  // if torpedo count >0, ones' digit of cell === 0, and win is not declared
  if(torpedoCount>0 && boardArray[cellId]%boardSize===0 && winStatus==="" ){
    // increase one
    boardArray[cellId]++;
    torpedoCount--;
    // ship hit message reset
    shipHitMessage="";
    // ships are in the cell
    if(boardArray[cellId]>1){
      //get x, y position by cell Id on ship postion array
      let pos = this.getIndexOfHit(shipPosition,cellId);
      // ship hit condition to from 1 to 0
      shipHitCondition[pos[0]][pos[1]]=0;
      // calculate individual ship block remains
      let shipRemain = shipHitCondition[pos[0]].reduce((a,b)=> a+b)
      // calculate total ship block remains
      let totalShipRemain = shipHitCondition.reduce((a,b)=> a.concat(b)).reduce((a,b)=>a+b)
      if(totalShipRemain===0){
        winStatus = "You won the game";
        //make zero for ship remain count
        for(let i=0; i<shipInfo.length;i++){
          shipInfo[i][4]=0
        }
        //reset total battle ship remain to zero
        battleShipRemains = 0;
      } else if(torpedoCount===0){
        // torpedo count is zero, game lost
        winStatus = "You lost the game";
      } else if(shipRemain===0){
        //ship block to zero, then make ship hit message.
        //boardArray[cellId] = cel value 11, 21, 31, 41, 51.
        //divde by 10, then value = 1, 2, 3,4,5 then search value in shipInfo to check ship's name
          shipHitMessage = `${shipInfo[Math.trunc(boardArray[cellId]/boardSize)-1][1]} has been destroyed` ;
          // reduce ship remain count
          shipInfo[Math.trunc(boardArray[cellId]/boardSize)-1][4]--;
          // calculate total ship remain from shipInfo array
          battleShipRemains = shipInfo.map(v=>v[4]).reduce((a,b)=>a+b);
      }
    } else {
      if(torpedoCount===0){
        winStatus = "You lost the game";
        // change background color
        x.style.backgroundColor = 'gray';
      }

    }
    if(boardArray[cellId]>1){
      // change color if ship has been hit
      x.style.backgroundColor = 'red';
    } else {
      // chnage color if torpedo missed
      x.style.backgroundColor = 'gray';
    }
    clickedCellArray.push(x);
    console.log("clickedCellArray", clickedCellArray)
    console.log("clickedCellArray id", clickedCellArray[0].id)
  }

  this.setState({boardArray:boardArray, torpedoCount:torpedoCount, shipPosition:shipPosition, shipHitCondition:shipHitCondition, shipHitMessage:shipHitMessage, winStatus:winStatus, battleShipRemains:battleShipRemains, clickedCellArray:clickedCellArray})
}

// return [x, y] from array & number
getIndexOfHit = (arr, k) =>{
    if (!arr){
        return [];
    }
    for(let i=0; i<arr.length; i++){
        let index = arr[i].indexOf(k);
        if (index > -1){
            return [i, index];
        }
    }
    return [];
}

  render(){
    console.log('render state', this.state)
    let grids = this.state.boardArray.map((v, i)=>{
      return (
        <Board id = {i} fireClick={this.fireClick} boardValue={this.state.boardArray[i]} boxSize={this.state.boxSize} />
        )
    })

    let gridStyle={
      display: 'grid',
      margin: 'auto',
      justifyContent: 'center',
      gridTemplateColumns: this.state.boardColWidth.join(' ')
    }
    return(
      <div>
        <Header boardInfo={this.state} />
        <div style={gridStyle}>
          {grids}
        </div>
        <GameInfo boardInfo={this.state} reset={this.reset}/>
      </div>
      )
  }
}

export default App;
