/*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
npm install prop-types -S*/

import classNames from 'classnames';
import React from 'react';
import {PropTypes} from 'prop-types';


function Button(props){
	const cssclasses=classNames('Button',props.className);
	return props.href?<a {...props} className={cssclasses}/>:<button {...props} className={cssclasses} />;
}

Button.propTypes={
	href:PropTypes.string,
};

export default Button
