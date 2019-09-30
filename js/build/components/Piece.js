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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               npm install prop-types -S*/

var Piece = function (_Component) {
	_inherits(Piece, _Component);

	function Piece(props) {
		_classCallCheck(this, Piece);

		var _this = _possibleConstructorReturn(this, (Piece.__proto__ || Object.getPrototypeOf(Piece)).call(this, props));

		_this.state = {
			num: props.num,
			editable: props.editable,
			colorable: props.colorable,
			color: 1,
			whiteFlag: false
		};
		return _this;
	}

	_createClass(Piece, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//document.addEventListener('contextmenu', this._handleContextMenu);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({ colorable: nextProps.colorable });
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.state.num;
		}
	}, {
		key: 'getColor',
		value: function getColor() {
			return this.state.color;
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.setState({
				num: props.num,
				editable: props.editable,
				color: 1,
				whiteFlag: false
			});
		}
	}, {
		key: '_onMousedownHandler',
		value: function _onMousedownHandler(e) {
			//e.button==0说明点击的是左键,e.button==2说明点击的是右键
			if (this.state.num == 0 && e.button == 0) {
				this._switchColor();
			}
		}
	}, {
		key: '_onMouseOverHandler',
		value: function _onMouseOverHandler(e) {
			if (this.state.num == 0 && this.state.colorable) {
				this._switchColor();
			}
		}
	}, {
		key: '_switchColor',
		value: function _switchColor() {
			var color = this.state.color == 0 ? 1 : 0;
			if (color == 0) {
				this.setState({
					whiteFlag: false
				});
			}
			this.setState({
				color: color
			});
		}
	}, {
		key: '_handleContextMenu',
		value: function _handleContextMenu(event) {
			this.setState({ visible: false });
			event.cancelBubble = true;
			event.returnValue = false;
			event.preventDefault();
			var flag = void 0;

			if (this.state.color == 1) {
				flag = !this.state.whiteFlag;
			} else {
				flag = 1;
			}
			if (flag) {
				this.setState({
					color: 1
				});
			}

			this.setState({
				whiteFlag: flag
			});

			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)({ 'Piece': true, 'black': this.state.color == 0 }),
					onMouseDown: this._onMousedownHandler.bind(this),
					onMouseOver: this._onMouseOverHandler.bind(this),
					onContextMenu: this._handleContextMenu.bind(this)
				},
				this._renderPieceContent()
			);
		}
	}, {
		key: '_renderPieceContent',
		value: function _renderPieceContent() {
			var content = this.state.num == 0 ? null : this.state.num;
			if (this.state.editable) {
				return _react2.default.createElement('input', { type: 'text', defaultValue: content, maxLength: '2' });
			} else {
				if (this.state.whiteFlag && this.state.num == 0) {
					return _react2.default.createElement('span', { className: 'blackPot' });
				}
				return content;
			}
		}
	}]);

	return Piece;
}(_react.Component);

Piece.propTypes = {
	num: _propTypes.PropTypes.number,
	editable: _propTypes.PropTypes.bool,
	colorable: _propTypes.PropTypes.bool

};

Piece.defaultProps = {
	num: 0,
	editable: false
};

exports.default = Piece;