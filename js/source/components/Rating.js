/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React,{Component} from 'react';
import {PropTypes} from 'prop-types';

class Rating extends Component{
	
	constructor(props){
		super(props);
		this.state={
			rating:props.defaultValue,
			tmpRating:props.defaultValue,
		}
	}
	

	getValue(){
		return this.state.rating;
	}
	
	setTemp(rating){
		this.setState({
			tmpRating:rating
		})
	}
	
	setRating(rating){
		this.setState({
			tmpRating:rating,
			rating:rating,
		})
	}
	
	reset(){
		this.setTemp(this.state.rating);
	}
	
	/*生命周期函数:响应组件外部的变化*/
	
	UNSAFE_componentWillReceiveProps(nextProps){
		this.setRating(nextProps.defaultValue);
	}
	
	render(){
		const stars=[];
		for(let i=1;i<=this.props.max;i++){
			stars.push(<span 
				className={
					i<=this.state.tmpRating?'RatingON':null
				}
				key={i}
				onClick={!this.props.readonly?this.setRating.bind(this,i):undefined}
				onMouseOver={!this.props.readonly?this.setTemp.bind(this,i):undefined}
				>
				&#9734;
			</span>)
		}
		
		return (
			<div className={classNames({'Rating':true,'RatingReadonly':this.props.readonly})}
				onMouseOut={this.reset.bind(this)}	
			>
			{stars}
			{this.props.readonly||!this.props.id?null:<input type="hidden" id={this.props.id} value={this.state.rating}/>}
			</div>
		)
	}
	
	
}

Rating.propTypes={
	defaultValue:PropTypes.number,
	readonly:PropTypes.bool,
	max:PropTypes.number,
}
	
Rating.defaultProps={
	defaultValue:0,
	max:5,
}

export default Rating
