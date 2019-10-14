/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import '../../css/components/Piece.css';

class Piece extends Component{
	
	constructor(props){
		super(props);
		this.state={
			num:props.num,
			editable:props.editable,
			colorable:props.colorable,
			color:1,
			whiteFlag:false,
			clickable:props.clickable,
		}
	}
	
	componentDidMount() {
        //document.addEventListener('contextmenu', this._handleContextMenu);
    };
    
    componentWillReceiveProps(nextProps){
    	let color=nextProps.num!=0?1:this.state.color
		this.setState({
			num:nextProps.num,
			colorable:nextProps.colorable,
		});
	}
	

	getValue(){
		return this.state.num;
	}
	
	getColor(){
		return this.state.color;
	}
	
	reset(){
		this.setState({
			editable:this.props.editable,
			color:1,
			whiteFlag:false
		})
	}
	
	_onMousedownHandler(e){
		if(!this.state.clickable){
			return;
		}
		//e.button==0说明点击的是左键,e.button==2说明点击的是右键
		if(this.state.num==0&&e.button==0){
			this._switchColor();
		}
	}
	
	_onMouseOverHandler(e){
		if(!this.state.clickable){
			return;
		}
		if(this.state.num==0&&this.state.colorable){
			this._switchColor();
		}
	}
	
	_switchColor(){
		let color=this.state.color==0?1:0;
		if(color==0){
			this.setState({
				whiteFlag:false
			})
		}
		this.setState({
			color:color
		})
		
	}
	
	_handleContextMenu(event){
		if(!this.state.clickable){
			return;
		}
		this.setState({ visible:false });
		event.cancelBubble = true;
    	event.returnValue = false;
    	event.preventDefault();
    	let flag;
    	
    	if(this.state.color==1){
    		flag=!this.state.whiteFlag;
    	}else{
    		flag=1;
    	}
    	if(flag){
    		this.setState({
				color:1
			})
    	}
    	
    	this.setState({
			whiteFlag:flag
		})
    	
		return false;
	}
	
	render(){	
		return (
			<div className={classNames({'Piece':true,'black':this.state.color==0})} 
				onMouseDown={this._onMousedownHandler.bind(this)}
				onMouseOver={this._onMouseOverHandler.bind(this)} 
				onContextMenu={this._handleContextMenu.bind(this)}
			>
				{this._renderPieceContent()}
			</div>
		)
	}
	
	_renderPieceContent(){
		let content=this.state.num==0?null:this.state.num;
		if(this.state.editable){
			return <input type="text" defaultValue={content} maxLength="2" />;
		}else{
			if(this.state.whiteFlag&&this.state.num==0){
				return <span className="blackPot"></span>
			}
			return content;
		}	
	}
	
	
}

Piece.propTypes={
	num:PropTypes.number,
	editable:PropTypes.bool,
	colorable:PropTypes.bool,
	clickable:PropTypes.bool
	
}
	
Piece.defaultProps={
	num:0,
	editable:false,
	clickable:true
}

export default Piece;
