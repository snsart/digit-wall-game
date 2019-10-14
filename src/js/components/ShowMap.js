/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Piece from './Piece';
import Button from './Button';
import '../../css/components/ShowMap.css';

class ShowMap extends Component{
	
	constructor(props){
		super(props);
		this.state={
			data:props.data,
			colorable:false,
		}
	}
	
	
	/*--------------生命周期函数-----------------*/
	
	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			data:nextProps.data,
		});
	}
	

	render(){	
		return (
			<div className={classNames("ShowMap",this.props.className)}>
				<table>
					<tbody>
					{
						this.state.data.map((item,row)=>{
							return(<tr key={row}> 
								{item.map((num,coll)=>{
									return <td key={coll}>
										<Piece  ref={"p"+row+"_"+coll} clickable={false} colorable={this.state.colorable} num={num} key={coll}></Piece>
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

ShowMap.propTypes={
	data:PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

export default ShowMap;
