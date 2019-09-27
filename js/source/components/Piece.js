/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';

class Piece extends Component{
	
	constructor(props){
		super(props);
		this.state={
			num:props.num,
			editable:props.editable,
			color:1,
			whiteFlag:false
		}
	}
	
	componentDidMount() {
        //document.addEventListener('contextmenu', this._handleContextMenu);
    };
	

	getValue(){
		return this.state.num;
	}
	
	getColor(){
		return this.state.color;
	}
	
	_onClickHandler(){
		if(this.state.num==0){
			this._switchColor();
		}
	}
	
	_switchColor(){
		let color=this.state.color==0?1:0;
		this.setState({
			color:color
		})
	}
	
	_handleContextMenu(event){
		this.setState({ visible:false });
		event.cancelBubble = true;
    	event.returnValue = false;
    	event.preventDefault();
    	let flag=!this.state.whiteFlag;
    	console.log(flag);
    	
    	this.setState({
			whiteFlag:flag
		})
    	
		return false;
	}
	
	render(){	
		return (
			<div className={classNames({'Piece':true,'black':this.state.color==0})} 
				onClick={this._onClickHandler.bind(this)} 
				onContextMenu={this._handleContextMenu.bind(this)}
			>
				{this._renderPieceContent()}
			</div>
		)
	}
	
	_renderPieceContent(){
		let content=this.state.num==0?null:this.state.num;
		if(this.state.editable){
			return <input type="text" defaultValue={content} maxLength="2"/>;
		}else{
			return content;
		}
		if(this.state.whiteFlag){
			this.setState({
				color:1
			})
			return <span className="blackPot"></span>
		}
	}
	
	
}

Piece.propTypes={
	num:PropTypes.number,
	editable:PropTypes.bool,
}
	
Piece.defaultProps={
	num:0,
	editable:false,
}

export default Piece;
