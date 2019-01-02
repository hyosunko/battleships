(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var r=o(0),a=o.n(r),n=o(7),i=o.n(n),s=(o(14),o(1)),l=o(2),p=o(4),h=o(3),c=o(5),d=(o(16),function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"title-header"},"Battleship Game",a.a.createElement("p",null,this.props.boardInfo.shipHitMessage,this.props.boardInfo.winStatus))}}]),e}(r.Component)),f=function(t){function e(){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t={height:this.props.boxSize,width:this.props.boxSize};return a.a.createElement("div",{style:t,className:"cell",onClick:this.props.fireClick,id:this.props.id})}}]),e}(r.Component),u=function(t){function e(){var t,o;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(p.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).reset=function(t){t.preventDefault(),o.props.reset()},o}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"footer"},a.a.createElement("div",null,a.a.createElement("p",null,"Torpedo Remains : ",this.props.boardInfo.torpedoCount),a.a.createElement("form",{className:"form-button",onSubmit:this.reset},a.a.createElement("button",{className:"button1",type:"submit"},"Reset"))),a.a.createElement("div",{className:"game-info"},"Ship Remains : ",this.props.boardInfo.battleShipRemains,"/",this.props.boardInfo.battleShipTotal,a.a.createElement("br",null),this.props.boardInfo.shipInfo[0][1],"(",this.props.boardInfo.shipInfo[0][2],"Blocks) : ",this.props.boardInfo.shipInfo[0][4],"/",this.props.boardInfo.shipInfo[0][3]," ",a.a.createElement("br",null),this.props.boardInfo.shipInfo[1][1],"(",this.props.boardInfo.shipInfo[1][2],"Blocks) : ",this.props.boardInfo.shipInfo[1][4],"/",this.props.boardInfo.shipInfo[1][3],a.a.createElement("br",null),this.props.boardInfo.shipInfo[2][1],"(",this.props.boardInfo.shipInfo[2][2],"Blocks) : ",this.props.boardInfo.shipInfo[2][4],"/",this.props.boardInfo.shipInfo[2][3],a.a.createElement("br",null),this.props.boardInfo.shipInfo[3][1],"(",this.props.boardInfo.shipInfo[3][2],"Blocks) : ",this.props.boardInfo.shipInfo[3][4],"/",this.props.boardInfo.shipInfo[3][3],a.a.createElement("br",null),this.props.boardInfo.shipInfo[4][1],"(",this.props.boardInfo.shipInfo[4][2],"Blocks) : ",this.props.boardInfo.shipInfo[4][4],"/",this.props.boardInfo.shipInfo[4][3],a.a.createElement("br",null)))}}]),e}(r.Component),b=function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(p.a)(this,Object(h.a)(e).call(this,t))).getScreenWidth=function(){var t=document.body.parentNode,e=document.body;return window.opera?e.clientWidth:"CSS1Compat"==document.compatMode?t.clientWidth:e.clientWidth},o.reset=function(){window.location.reload()},o.createBoard=function(){var t=o.state,e=t.boardArray,r=t.boardSize;e=Array(Math.pow(r,2)).fill(0),o.setState={boardArray:e}},o.placeShip=function(){var t=o.state,e=t.boardSize,r=t.boardArray,a=t.shipInfo,n=t.shipPosition,i=a.length,s=[],l=100;for(r=Array(Math.pow(e,2)).fill(0);i>0;){for(var p=a.length-i,h=a[p][3];h>0;){var c=Math.floor(Math.random()*Math.pow(e,2)),d=Math.floor(2*Math.random()),f=Math.trunc(c/e)%e,u=c%e;if(l<0){h--,i--;break}if(0===d&&f+a[p][2]<e||1===d&&u+a[p][2]<e){for(var b=0===d?Math.pow(e,1):Math.pow(e,0),m=0,I=0;I<a[p][2];I++){if(0!==r[f*e+u+I*b]){l--;break}if(m++,l<0)break}if(m===a[p][2]){for(var y=0;y<a[p][2];y++)r[f*e+u+y*b]=10*a[p][0],s.push(f*e+u+y*b);h--,n.push(s),s=[],l--}}}if(i--,--l<0)break}o.setState({boardArray:r,shipPosition:n}),console.log(r)},o.fireClick=function(t){var e=parseInt(t.target.id),r=o.state,a=r.boardArray,n=r.boardSize,i=r.torpedoCount,s=r.shipInfo,l=r.shipPosition,p=r.shipHitCondition,h=r.shipHitMessage,c=r.winStatus,d=r.battleShipRemains,f=r.clickedCellArray;console.log(" "),console.log(o.state);var u=document.getElementById(e);if(console.log("x: ",u),i>0&&a[e]%n===0&&""===c){if(a[e]++,i--,h="",a[e]>1){var b=o.getIndexOfHit(l,e);p[b[0]][b[1]]=0;var m=p[b[0]].reduce(function(t,e){return t+e});if(0===p.reduce(function(t,e){return t.concat(e)}).reduce(function(t,e){return t+e})){c="You won the game";for(var I=0;I<s.length;I++)s[I][4]=0;d=0}else 0===i?c="You lost the game":0===m&&(h="".concat(s[Math.trunc(a[e]/n)-1][1]," has been destroyed"),s[Math.trunc(a[e]/n)-1][4]--,d=s.map(function(t){return t[4]}).reduce(function(t,e){return t+e}))}else 0===i&&(c="You lost the game",u.style.backgroundColor="gray");a[e]>1?u.style.backgroundColor="red":u.style.backgroundColor="gray",f.push(u),console.log("clickedCellArray",f),console.log("clickedCellArray id",f[0].id)}o.setState({boardArray:a,torpedoCount:i,shipPosition:l,shipHitCondition:p,shipHitMessage:h,winStatus:c,battleShipRemains:d,clickedCellArray:f})},o.getIndexOfHit=function(t,e){if(!t)return[];for(var o=0;o<t.length;o++){var r=t[o].indexOf(e);if(r>-1)return[o,r]}return[]},o.state={boardSize:10,boardArray:[],torpedoCount:50,shipInfo:[[1,"Carrier",5,1,1],[2,"Battleship",4,2,2],[3,"Destroyer",3,2,2],[4,"Submarine",3,2,2],[5,"Patrol Boat",2,2,2]],shipPosition:[],shipHitCondition:[],boardColWidth:[],shipHitMessage:"",winStatus:"",battleShipTotal:0,battleShipRemains:0,clickedCellArray:[],boxSize:"50px"},o}return Object(c.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this.state,e=t.boardSize,o=t.boardArray,r=(t.torpedoCount,t.shipInfo),a=t.shipPosition,n=t.shipHitCondition,i=t.boardColWidth,s=t.battleShipRemains,l=t.battleShipTotal,p=t.boxSize;o=Array(Math.pow(e,2)).fill(0);var h=this.getScreenWidth();h<500&&(p="40px"),console.log("screenWidth",h),i=Array(e).fill(p),console.log("boardColWidth",i);var c=r.length,d=[],f=[],u=1e3;for(l=s=r.map(function(t){return t[4]}).reduce(function(t,e){return t+e});c>0;){for(var b=r.length-c,m=r[b][3];m>0;){var I=Math.floor(2*Math.random()),y=Math.floor(Math.random()*Math.pow(e,2)),v=Math.trunc(y/e)%e,g=y%e;if(u<0){m--,c--;break}if(0===I&&v+r[b][2]<e||1===I&&g+r[b][2]<e){for(var S=0===I?Math.pow(e,1):Math.pow(e,0),C=0,k=0;k<r[b][2];k++){var M=v-1<0?v:v-1,w=v+1>=e?v:v+1,E=g-1<0?g:g-1,O=g+1>=e?g:g+1;0===o[v*e+g+k*S]&&0===o[M*e+g+k*S]&&0===o[w*e+g+k*S]&&0===o[v*e+O+k*S]&&0===o[v*e+E+k*S]&&C++}if(C===r[b][2]){for(var j=0;j<r[b][2];j++)o[v*e+g+j*S]=10*r[b][0],d.push(v*e+g+j*S),f.push(1);m--,a.push(d),n.push(f),d=[],f=[],u--}}}c--}this.setState({boardArray:o,shipPosition:a,shipHitCondition:n,boardColWidth:i,battleShipRemains:s,battleShipTotal:l,boxSize:p})}},{key:"render",value:function(){var t=this;console.log("render state",this.state);var e=this.state.boardArray.map(function(e,o){return a.a.createElement(f,{id:o,fireClick:t.fireClick,boardValue:t.state.boardArray[o],boxSize:t.state.boxSize})}),o={display:"grid",margin:"auto",justifyContent:"center",gridTemplateColumns:this.state.boardColWidth.join(" ")};return a.a.createElement("div",null,a.a.createElement(d,{boardInfo:this.state}),a.a.createElement("div",{style:o},e),a.a.createElement(u,{boardInfo:this.state,reset:this.reset}))}}]),e}(r.Component);i.a.render(a.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.8aeccec4.chunk.js.map