'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Piece = require('./components/Piece');

var _Piece2 = _interopRequireDefault(_Piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	'div',
	{ style: { padding: '20px' } },
	_react2.default.createElement(
		'h1',
		null,
		'Component discoverer'
	),
	_react2.default.createElement(
		'h2',
		null,
		'Piece'
	),
	_react2.default.createElement(_Piece2.default, { num: 5, editable: false }),
	_react2.default.createElement(_Piece2.default, { num: 5, editable: true }),
	_react2.default.createElement(_Piece2.default, null)
), document.getElementById("pad"));