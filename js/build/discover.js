'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Piece = require('./components/Piece');

var _Piece2 = _interopRequireDefault(_Piece);

var _Map = require('./components/Map');

var _Map2 = _interopRequireDefault(_Map);

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
	_react2.default.createElement(_Piece2.default, null),
	_react2.default.createElement(
		'h2',
		null,
		'Map'
	),
	_react2.default.createElement(_Map2.default, { defaultData: [[0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 2, 0, 0, 0], [0, 0, 0, 2, 0], [0, 0, 3, 0, 0]] })
), document.getElementById("pad"));