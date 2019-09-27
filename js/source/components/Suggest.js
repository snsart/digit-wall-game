/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';

class Suggest extends Component{
	constructor(props){
		super(props);
		this.state={
			value:props.defaultValue,
		}
	}
	
	getValue(){
		return this.state.value;
	}
	
	render(){
		const randomid=Math.random().toString(16).substring(2);
		const cssclasses=classNames('Suggest',this.props.className);
		return (
			<div className={cssclasses}>
				<input list={randomid} defaultValue={this.props.defaultValue} onChange={e=>this.setState({value:e.target.value})} id={this.props.id}/>
				<datalist id={randomid}>
					{
						this.props.options.map((item,idx)=>{
							return <option value={item} key={idx}/>
						})
						
					}
				</datalist>
			</div>
		)
	}
}


Suggest.propTypes={
	options:PropTypes.arrayOf(PropTypes.string),
};

export default Suggest
