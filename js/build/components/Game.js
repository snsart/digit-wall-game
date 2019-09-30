'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               npm install prop-types -S*/

var Game = function (_Component) {
	_inherits(Game, _Component);

	function Game(props) {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

		_this.state = {
			currentData: [[0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 2, 0, 0, 0], [0, 0, 0, 2, 0], [0, 0, 3, 0, 0]],
			colorable: false
		};
		return _this;
	}

	_createClass(Game, [{
		key: '_commitHandler',
		value: function _commitHandler() {
			this.refs.map.hasComplete();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)({ "Game": true }) },
				_react2.default.createElement(_Map2.default, { ref: 'map', defaultData: this.state.currentData }),
				_react2.default.createElement(
					_Button2.default,
					{ onClick: this._commitHandler.bind(this) },
					'\u63D0\u4EA4'
				)
			);
		}
	}]);

	return Game;
}(_react.Component);

Game.propTypes = {};

exports.default = Game;