'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Piece = require('./Piece');

var _Piece2 = _interopRequireDefault(_Piece);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               npm install prop-types -S*/

var Map = function (_Component) {
	_inherits(Map, _Component);

	function Map(props) {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

		_this.state = {
			data: props.defaultData,
			colorable: false
		};
		return _this;
	}

	/*--------------生命周期函数-----------------*/

	_createClass(Map, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({ data: nextProps.data });
		}

		//在render()函数执行完毕，且更新的组件同步到DOM后立即调用

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this._getPieces();
		}

		//在新节点插入DOM结构之后触发

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._getPieces();
		}
	}, {
		key: 'hasComplete',
		value: function hasComplete() {
			var _getPieces2 = this._getPieces(),
			    _getPieces3 = _slicedToArray(_getPieces2, 3),
			    pieces = _getPieces3[0],
			    piecesWithNum = _getPieces3[1],
			    blackPieces = _getPieces3[2];

			var white = this._whiteSpaceComplete(piecesWithNum, pieces);
			var black = this._blackSpaceComplete(blackPieces, pieces);
			var existSquare = this._existBlacePieceSquare(blackPieces, pieces);

			if (white && black && !existSquare) {
				console.log("完成");
				return true;
			} else {
				console.log("未完成");
				return false;
			}
		}
	}, {
		key: '_whiteSpaceComplete',
		value: function _whiteSpaceComplete(piecesWithNum, pieces) {
			for (var i = 0; i < piecesWithNum.length; i++) {
				var piece = piecesWithNum[i];
				var value = piece.getValue();
				var finded = [piece];
				this._addConnectPiecesNumberBy(piece, pieces, finded);
				if (finded.length != value) {
					return false;
				}
			}
			return true;
		}
	}, {
		key: '_blackSpaceComplete',
		value: function _blackSpaceComplete(blackPieces, pieces) {
			if (blackPieces.length > 0) {
				var piece = blackPieces[0];
				var finded = [piece];
				this._addConnectPiecesNumberBy(piece, pieces, finded);
				if (finded.length != blackPieces.length) {
					return false;
				}
			}
			return true;
		}
	}, {
		key: '_existBlacePieceSquare',
		value: function _existBlacePieceSquare(blackPieces, pieces) {
			for (var i = 0; i < blackPieces.length; i++) {
				var piece = blackPieces[i];
				if (this._isBlackPieceSquare(piece, pieces)) {
					return true;
				}
			}
			return false;
		}
	}, {
		key: '_isBlackPieceSquare',
		value: function _isBlackPieceSquare(piece, pieces) {
			if (piece.getColor() != 0) {
				return false;
			}
			var row = piece.props.row,
			    col = piece.props.col;
			var totalRow = pieces.length,
			    totalCol = pieces[0].length;

			var right = col + 1 < totalCol ? pieces[row][col + 1] : null;
			var bottom = row + 1 < totalRow ? pieces[row + 1][col] : null;
			var rightBottom = col + 1 < totalCol && row + 1 < totalRow ? pieces[row + 1][col + 1] : null;

			if (right && right.getColor() == 0 && bottom && bottom.getColor() == 0 && rightBottom && rightBottom.getColor() == 0) {
				return true;
			}
			return false;
		}
	}, {
		key: '_addConnectPiecesNumberBy',
		value: function _addConnectPiecesNumberBy(piece, pieces, finded) {
			if (piece == null) {
				return;
			}
			var row = piece.props.row,
			    col = piece.props.col;
			var totalRow = pieces.length,
			    totalCol = pieces[0].length;

			var left = col - 1 >= 0 ? pieces[row][col - 1] : null;
			if (left != null && left.getColor() == piece.getColor()) {
				if (finded.indexOf(left) == -1) {
					finded.push(left);
					this._addConnectPiecesNumberBy(left, pieces, finded);
				}
			}

			var right = col + 1 < totalCol ? pieces[row][col + 1] : null;
			if (right != null && right.getColor() == piece.getColor()) {
				if (finded.indexOf(right) == -1) {
					finded.push(right);
					this._addConnectPiecesNumberBy(right, pieces, finded);
				}
			}

			var top = row - 1 >= 0 ? pieces[row - 1][col] : null;
			if (top != null && top.getColor() == piece.getColor()) {
				if (finded.indexOf(top) == -1) {
					finded.push(top);
					this._addConnectPiecesNumberBy(top, pieces, finded);
				}
			}

			var bottom = row + 1 < totalRow ? pieces[row + 1][col] : null;
			if (bottom != null && bottom.getColor() == piece.getColor()) {
				if (finded.indexOf(bottom) == -1) {
					finded.push(bottom);
					this._addConnectPiecesNumberBy(bottom, pieces, finded);
				}
			}
		}
	}, {
		key: '_getPieces',
		value: function _getPieces() {
			var pieces = [],
			    piecesWithNum = [],
			    blackPieces = [];
			var row = this.state.data.length;
			var col = this.state.data[0].length;
			for (var i = 0; i < row; i++) {
				var innerPieces = [];
				for (var j = 0; j < col; j++) {
					var piece = this.refs["p" + i + "_" + j];
					if (piece.getValue() > 0) {
						piecesWithNum.push(piece);
					}
					if (piece.getColor() == 0) {
						blackPieces.push(piece);
					}
					innerPieces.push(piece);
				}
				pieces.push(innerPieces);
			}
			return [pieces, piecesWithNum, blackPieces];
		}
	}, {
		key: '_onMousedownHandler',
		value: function _onMousedownHandler() {
			this.setState({
				colorable: true
			});
		}
	}, {
		key: '_onMouseoutHandler',
		value: function _onMouseoutHandler(e) {
			if (e.target.className == "Map") {
				this.setState({
					colorable: false
				});
			}
		}
	}, {
		key: '_onMouseupHandler',
		value: function _onMouseupHandler() {
			this.setState({
				colorable: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)({ "Map": true }), onMouseOut: this._onMouseoutHandler.bind(this) },
				_react2.default.createElement(
					'table',
					{
						onMouseDown: this._onMousedownHandler.bind(this),
						onMouseUp: this._onMouseupHandler.bind(this) },
					_react2.default.createElement(
						'tbody',
						null,
						this.state.data.map(function (item, row) {
							return _react2.default.createElement(
								'tr',
								{ key: row },
								item.map(function (num, coll) {
									return _react2.default.createElement(
										'td',
										{ key: coll },
										_react2.default.createElement(_Piece2.default, { ref: "p" + row + "_" + coll, colorable: _this2.state.colorable, num: num, row: row, col: coll, key: coll })
									);
								})
							);
						}, this)
					)
				)
			);
		}
	}]);

	return Map;
}(_react.Component);

Map.propTypes = {
	defaultData: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.arrayOf(_propTypes.PropTypes.number)).isRequired
};

exports.default = Map;