/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Map from './Map';
import Button from './Button';

class Game extends Component{
	
	constructor(props){
		super(props);
		this.state={
			currentData:[	
					[0,0,0,1,0],
					[0,0,0,0,0],
					[0,2,0,0,0],
					[0,0,0,2,0],
					[0,0,3,0,0],],
			colorable:false,
		}
	}
	
	_commitHandler(){
		this.refs.map.hasComplete();
	}

	render(){	
		return (
			<div className={classNames({"Game":true})}>
				<Map ref="map" defaultData={this.state.currentData}></Map>
				<Button onClick={this._commitHandler.bind(this)}>提交</Button>
				
			</div>
		)
	}
	
}

Game.propTypes={
	
}

export default Game;
