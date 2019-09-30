import React from 'react';
import ReactDOM from 'react-dom';

import Piece from './components/Piece';
import Map from './components/Map';


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
		
	</div>,
	document.getElementById("pad")
);