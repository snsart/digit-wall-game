/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Piece from './Piece';
import {InputNumber,Slider} from 'antd';
import '../../css/components/AddGame.css';

class AddGame extends Component{
	
	constructor(props){
		super(props);
		this.state={
			inputValue: this.props.data.length,
			data:this.props.data
		}
	}
	
	getValue(){
		return this.state.data;
	}
	
	_onChange(value){
	    this.setState({
	    	inputValue: value,
	      	data:Array.from({length:value},()=>Array.from({length:value},x=>0))
	    });
  	};
  	
  	_changeData(row,col,value){
  		let data;
  		let changeRow=[...this.state.data[row]];
  		changeRow[col]=value;
  		data=[...this.state.data];
  		data[row]=changeRow;
  		
  		this.setState({
	      	data:data
	   });
  	}

	render(){
		const { inputValue,data } = this.state;
		return (
			<div className={classNames({"AddGame":true})}>
				<table>
					<tbody>
					{
						this.state.data.map((item,row)=>{
							return(<tr key={row}> 
								{item.map((num,coll)=>{
									return <td key={coll}>
										<InputNumber className="inputNumber" ref={"p"+row+"_"+coll} num={num} row={row} col={coll} key={coll} 
											size="large" 
											min={0} 
											max={50} 
											defaultValue={data[row][coll]}
											onChange={this._changeData.bind(this,row,coll)}
											/>
									</td>
								})}
							</tr>)
						},this)
					}
					</tbody>
				</table>
				<div className="slider">
					<Slider
			            min={3}
			            max={10}
			            onChange={this._onChange.bind(this)}
			            value={typeof inputValue === 'number' ? inputValue: 0}
		          	/>
				</div>
			</div>
		)
	}
	
}

AddGame.propTypes={
	data:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
}

AddGame.defaultProps={
	data:Array.from({length:5},()=>Array.from({length:5},x=>0))
}

export default AddGame;
