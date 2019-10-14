/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/
//<Map ref="map" defaultData={this.state.currentData}></Map>
import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Map from './Map';
import Button from './Button';
import Dialog from './Dialog';
import AddGame from './AddGame';
import SelectMapsList from './SelectMapsList';

import '../../css/components/Game.css';

class Game extends Component{
	
	constructor(props){
		super(props);
		
		let data=JSON.parse(localStorage.getItem('data'));
		let initData=[
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
				]
		];
		if(data==null){
			data=initData;
			this._commitToStorage(data);
		}
		console.log(data);
		
		this.state={
			gamesList:data,
			currentDataIndex:1,
			colorable:false,
			dialog:null
		}
	}
	
	_commitHandler(){
		let complete=this.refs.map.hasComplete();
		if(complete){
			this._addNewDialog("complete");
		}else{
			this._addNewDialog("fuil");
		}
	}
	
	_editGameHandler(){
		this._addNewDialog("editGame");
	}
	
	_editGameAction(type){
		if(type=="confirm"){
			let data=this.refs.addGame.getValue();
			let gamesList=[...this.state.gamesList]
			gamesList.splice(this.state.currentDataIndex,1,data);
			this.setState({
				gamesList:gamesList,
			})
			this._closeDialog();
			this._commitToStorage(gamesList);
			this.refs.map.reset();
		}else{
			this._closeDialog();
			this.refs.map.reset();
		}
	}
	
	_addGameHandler(){
		this._addNewDialog("addGame");
	}
	
	_addGameAction(type){
		if(type=="confirm"){
			let data=this.refs.addGame.getValue();
			let gamesList=[...this.state.gamesList,data];
			this.setState({
				gamesList:gamesList,
				currentDataIndex:this.state.currentDataIndex+1
			})
			this._closeDialog();
			this._commitToStorage(gamesList);
			this.refs.map.reset();
		}else{
			this._closeDialog();
			this.refs.map.reset();
		}
	}
	
	_selectGameHandler(){
		this._addNewDialog("selectGame");
	}
	
	_selectGameAction(type){
		if(type=="confirm"){
			let index=this.refs.mapList.getSelectedIndex();
			
			this.setState({
				currentDataIndex:index
			})
			this._closeDialog();
			this.refs.map.reset();
		}else{
			this._closeDialog();
			this.refs.map.reset();
		}
	}
	
	_addNewDialog(type){
		this.setState({
			dialog:{
				type:type
			}
		})
	}
	
	_closeDialog(){
		this.setState({
			dialog:null
		})
	}
	
	_commitToStorage(data){
		localStorage.setItem('data',JSON.stringify(data));
	}
	
	
	render(){	
		let index=this.state.currentDataIndex;
		let data=this.state.gamesList[index];
		return (
			<div className={classNames({"Game":true})}>
				<Map ref="map" defaultData={data}></Map>
				<div className="buttons">
					<Button className="left" onClick={this._commitHandler.bind(this)}>提交</Button>
					<Button className="right" onClick={this._editGameHandler.bind(this)}>编辑游戏</Button>
					<Button className="right" onClick={this._addGameHandler.bind(this)}>添加游戏</Button>
					<Button className="right" onClick={this._selectGameHandler.bind(this)}>选择游戏</Button>
				</div>
				{this._renderDialog()}
			</div>
		)
	}
	
	_renderDialog(){
		if(!this.state.dialog){
			return null;
		}
		switch(this.state.dialog.type){
			case 'complete':
				return this._renderCompleteDialog();
			case 'fuil':
				return this._renderFuilDialog();
			case 'editGame':
				return this._renderEditGameDialog();
			case 'addGame':
				return this._renderAddGameDialog();
			case 'selectGame':
				return this._renderSelectGameDialog();
			default:
				throw Error('Unexpected dialog type ${this.state.dialog.type}');
		}
	}
	
	_renderCompleteDialog(){
		return(<Dialog
				modal={true}
				header="恭喜获胜"
				confirmLabel="确定"
				hasCancel={false}
				onAction={this._closeDialog.bind(this)}
			>
			恭喜你获得胜利
			</Dialog>
		)
	}
	_renderFuilDialog(){
		return(<Dialog
				modal={true}
				header="还未完成哦，再想想~"
				confirmLabel="确定"
				hasCancel={false}
				onAction={this._closeDialog.bind(this)}
			>
			继续努力
			</Dialog>
		)
	}
	
	_renderEditGameDialog(){
		let index=this.state.currentDataIndex;
		let data=this.state.gamesList[index];
		return(<Dialog
				modal={true}
				header="编辑游戏"
				confirmLabel="保存"
				hasCancel={true}
				onAction={this._editGameAction.bind(this)}
			>
			<AddGame ref="addGame" data={data}></AddGame>
			</Dialog>
		)
	}
	
	_renderAddGameDialog(){
		return(<Dialog
				modal={true}
				header="添加游戏"
				confirmLabel="添加"
				hasCancel={true}
				onAction={this._addGameAction.bind(this)}
			>
			<AddGame ref="addGame"></AddGame>
			</Dialog>
		)
	}
	
	_renderSelectGameDialog(){
		return(<Dialog
				modal={true}
				header="选择游戏"
				confirmLabel="确定"
				hasCancel={true}
				onAction={this._selectGameAction.bind(this)}
			>
			<SelectMapsList ref="mapList" data={this.state.gamesList}></SelectMapsList>
			</Dialog>
		)
	}
}

Game.propTypes={
	gamesList:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)))
}

export default Game;
