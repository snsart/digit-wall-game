import React from 'react';
import ReactDOM from 'react-dom';

import Piece from './components/Piece';


ReactDOM.render(
	<div style={{padding:'20px'}}>
		<h1>Component discoverer</h1>
		
		<h2>Piece</h2>
		
		<Piece num={5} editable={false}></Piece>
		<Piece num={5} editable={true}></Piece>	
		<Piece></Piece>
		
	</div>,
	document.getElementById("pad")
);