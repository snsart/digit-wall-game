'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
                                                                                                                                                                                                                                                                  npm install prop-types -S*/

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
	var cssclasses = (0, _classnames2.default)('Button', props.className);
	return props.href ? _react2.default.createElement('a', _extends({}, props, { className: cssclasses })) : _react2.default.createElement('button', _extends({}, props, { className: cssclasses }));
}

Button.propTypes = {
	href: _propTypes.PropTypes.string
};

exports.default = Button;