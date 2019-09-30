/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Piece from './Piece';
import Button from './Button';

class Map extends Component{
	
	constructor(props){
		super(props);
		this.state={
			data:props.defaultData,
			colorable:false,
		}
	}
	
	
	/*--------------生命周期函数-----------------*/
	
	componentWillReceiveProps(nextProps){
		this.setState({data:nextProps.data});
	}
	
	//在render()函数执行完毕，且更新的组件同步到DOM后立即调用
	componentDidUpdate(){
		this._getPieces();
	}
	
	//在新节点插入DOM结构之后触发
	componentDidMount(){
		this._getPieces();
	}
	
	
	hasComplete(){
		let [pieces,piecesWithNum,blackPieces]=this._getPieces();
		
		let white=this._whiteSpaceComplete(piecesWithNum,pieces);
		let black=this._blackSpaceComplete(blackPieces,pieces);
		let existSquare=this._existBlacePieceSquare(blackPieces,pieces);
		
		if(white&&black&&!existSquare){
			console.log("完成");
			return true;
		}else{
			console.log("未完成");
			return false;
		}
	}
	
	
	_whiteSpaceComplete(piecesWithNum,pieces){
		for(let i=0;i<piecesWithNum.length;i++){
			let piece=piecesWithNum[i];
			let value=piece.getValue();
			let finded=[piece];
			this._addConnectPiecesNumberBy(piece,pieces,finded);
			if(finded.length!=value){
				return false;
			}
		}
		return true;
	}
	
	
	_blackSpaceComplete(blackPieces,pieces){
		if(blackPieces.length>0){
			let piece=blackPieces[0];
			let finded=[piece];
			this._addConnectPiecesNumberBy(piece,pieces,finded);
			if(finded.length!=blackPieces.length){
				return false;
			}
		}
		return true;
	}
	
	_existBlacePieceSquare(blackPieces,pieces){
		for(let i=0;i<blackPieces.length;i++){
			let piece=blackPieces[i];
			if(this._isBlackPieceSquare(piece,pieces)){
				return true;
			}
		}
		return false;
	}
	
	_isBlackPieceSquare(piece,pieces){
		if(piece.getColor()!=0){
			return false;
		}
		let row=piece.props.row,col=piece.props.col;
		let totalRow=pieces.length,totalCol=pieces[0].length;
		
		let right=col+1<totalCol?pieces[row][col+1]:null;
		let bottom=row+1<totalRow?pieces[row+1][col]:null;
		let rightBottom=col+1<totalCol&&row+1<totalRow?pieces[row+1][col+1]:null;
		
		if(right&&right.getColor()==0&&bottom&&bottom.getColor()==0&&rightBottom&&rightBottom.getColor()==0){
			return true;
		}
		return false;
	}
	
	
	_addConnectPiecesNumberBy(piece,pieces,finded){
		if(piece==null){
			return;
		}
		let row=piece.props.row,col=piece.props.col;
		let totalRow=pieces.length,totalCol=pieces[0].length;
		
		let left=col-1>=0?pieces[row][col-1]:null;
		if(left!=null&&left.getColor()==piece.getColor()){
			if(finded.indexOf(left)==-1){
				finded.push(left);
				this._addConnectPiecesNumberBy(left,pieces,finded);
			}
		}
		
		let right=col+1<totalCol?pieces[row][col+1]:null;
		if(right!=null&&right.getColor()==piece.getColor()){
			if(finded.indexOf(right)==-1){
				finded.push(right);
				this._addConnectPiecesNumberBy(right,pieces,finded);
			}
		}
		
		let top=row-1>=0?pieces[row-1][col]:null;
		if(top!=null&&top.getColor()==piece.getColor()){
			if(finded.indexOf(top)==-1){
				finded.push(top);
				this._addConnectPiecesNumberBy(top,pieces,finded);
			}
		}
		
		let bottom=row+1<totalRow?pieces[row+1][col]:null;
		if(bottom!=null&&bottom.getColor()==piece.getColor()){
			if(finded.indexOf(bottom)==-1){
				finded.push(bottom);
				this._addConnectPiecesNumberBy(bottom,pieces,finded);
			}
		}
	}
	
	_getPieces(){
		let pieces=[],piecesWithNum=[],blackPieces=[];
		let row=this.state.data.length;
		let col=this.state.data[0].length;
		for(let i=0;i<row;i++){
			let innerPieces=[];
			for(let j=0;j<col;j++){
				let piece=this.refs["p"+i+"_"+j];
				if(piece.getValue()>0){
					piecesWithNum.push(piece);
				}
				if(piece.getColor()==0){
					blackPieces.push(piece);
				}
				innerPieces.push(piece);
			}
			pieces.push(innerPieces);
		}
		return [pieces,piecesWithNum,blackPieces];
	}
	
	_onMousedownHandler(){
		this.setState({
			colorable:true
		})
	}
	_onMouseoutHandler(e){
		if(e.target.className=="Map"){
			this.setState({
				colorable:false
			})	
		}
	}
	
	_onMouseupHandler(){
		this.setState({
			colorable:false
		})
	}

	render(){	
		return (
			<div className={classNames({"Map":true})} onMouseOut={this._onMouseoutHandler.bind(this)}>
				<table
					onMouseDown={this._onMousedownHandler.bind(this)}
					onMouseUp={this._onMouseupHandler.bind(this)}>
					<tbody>
					{
						this.state.data.map((item,row)=>{
							return(<tr key={row}> 
								{item.map((num,coll)=>{
									return <td key={coll}>
										<Piece  ref={"p"+row+"_"+coll} colorable={this.state.colorable} num={num} row={row} col={coll} key={coll}></Piece>
									</td>
								})}
							</tr>)
						},this)
					}
					</tbody>
				</table>
			</div>
		)
	}
	
}

Map.propTypes={
	defaultData:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

export default Map;
