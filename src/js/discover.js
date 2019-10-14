import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';

import Piece from './components/Piece';
import Map from './components/Map';
import Game from './components/Game';
import AddGame from './components/AddGame';
import ShowMap from './components/ShowMap';
import SelectMapsList from './components/SelectMapsList';

import '../css/app.css';

//异步加载学习

/*function getComponent(){
	return import(/*webpackChunkName:"lodash"*/ /*'lodash').then(({default:_})=>{
		var element=document.createElement("div");
		element.innerHTML=_.join(["jin","hailiang"],"--");
		return element;
	})
}
document.addEventListener("click",()=>{
	getComponent().then(element=>{
		document.body.appendChild(element);
	})
})*/


ReactDOM.render(
	<div style={{padding:'20px'}}>
		<h1>Component discoverer</h1>
		
		<h2>Piece</h2>
		
		<Piece num={5} editable={false}></Piece>
		<Piece num={5} editable={true}></Piece>	
		<Piece></Piece>
		
		<h2>Map</h2>
		<Map defaultData={[	
					[0,0,0,1,0],
					[0,0,0,0,0],
					[0,2,0,0,0],
					[0,0,0,2,0],
					[0,0,3,0,0],
		]}></Map>
		
		<h2>Game</h2>
		<Game></Game>
		
		<h2>AddGame</h2>
		<AddGame></AddGame>
		
		<h2>ShowMap</h2>
		<ShowMap data={[	
					[0,0,0,1,0],
					[0,0,0,0,0],
					[0,2,0,0,0],
					[0,0,0,2,0],
					[0,0,3,0,0],
		]}></ShowMap>
		
		<h2>SelectMapsList</h2>
		<SelectMapsList data={
			[
				[	
					[0,0,0,1,0],
					[0,0,0,0,0],
					[0,2,0,0,0],
					[0,0,0,2,0],
					[0,0,3,0,0],
				],
				[	
					[0,0,3,0,0],
					[0,0,0,4,0],
					[0,1,0,0,0],
					[0,0,0,0,0],
					[1,0,0,0,0],
				],
				[	
					[0,0,0,0,0],
					[0,0,0,4,0],
					[0,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,3,0],
				]
		 ]
		}></SelectMapsList>
		
	</div>,
	document.getElementById("pad")
);