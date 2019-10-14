/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Piece from './Piece';
import Button from './Button';
import ShowMap from './ShowMap';
import '../../css/components/SelectMapsList.css';

class SelectMapsList extends Component{
	
	constructor(props){
		super(props);
		this.state={
			data:props.data,
			selectedIndex:0
		}
	}
	
	
	/*--------------生命周期函数-----------------*/
	
	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			data:nextProps.data,
		});
	}
	
	getSelectedIndex(){
		return this.state.selectedIndex;
	}
	
	_selectedMapHandler(id){
		this.setState({
			selectedIndex:id
		});
	}
	

	render(){	
		return (
			<div className={classNames({"SelectMapsList":true})}>
				{
					this.state.data.map((item,id)=>{
						let selected=id==this.state.selectedIndex?true:false;
						return( 
							<div onMouseDown={this._selectedMapHandler.bind(this,id)} key={id}>
							 <ShowMap 
							 	className={classNames({"selected":selected})}
							 	ref={"map"+id}
							 	data={item}
							 	key={id}
							 >
							 </ShowMap>
							 </div>
						)
					},this)
				}
			</div>
		)
	}
	
}

SelectMapsList.propTypes={
	data:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))).isRequired,
}

export default SelectMapsList;
