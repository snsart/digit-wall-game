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

var Rating = function (_Component) {
	_inherits(Rating, _Component);

	function Rating(props) {
		_classCallCheck(this, Rating);

		var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

		_this.state = {
			rating: props.defaultValue,
			tmpRating: props.defaultValue
		};
		return _this;
	}

	_createClass(Rating, [{
		key: 'getValue',
		value: function getValue() {
			return this.state.rating;
		}
	}, {
		key: 'setTemp',
		value: function setTemp(rating) {
			this.setState({
				tmpRating: rating
			});
		}
	}, {
		key: 'setRating',
		value: function setRating(rating) {
			this.setState({
				tmpRating: rating,
				rating: rating
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.setTemp(this.state.rating);
		}

		/*生命周期函数:响应组件外部的变化*/

	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			this.setRating(nextProps.defaultValue);
		}
	}, {
		key: 'render',
		value: function render() {
			var stars = [];
			for (var i = 1; i <= this.props.max; i++) {
				stars.push(_react2.default.createElement(
					'span',
					{
						className: i <= this.state.tmpRating ? 'RatingON' : null,
						key: i,
						onClick: !this.props.readonly ? this.setRating.bind(this, i) : undefined,
						onMouseOver: !this.props.readonly ? this.setTemp.bind(this, i) : undefined
					},
					'\u2606'
				));
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)({ 'Rating': true, 'RatingReadonly': this.props.readonly }),
					onMouseOut: this.reset.bind(this)
				},
				stars,
				this.props.readonly || !this.props.id ? null : _react2.default.createElement('input', { type: 'hidden', id: this.props.id, value: this.state.rating })
			);
		}
	}]);

	return Rating;
}(_react.Component);

Rating.propTypes = {
	defaultValue: _propTypes.PropTypes.number,
	readonly: _propTypes.PropTypes.bool,
	max: _propTypes.PropTypes.number
};

Rating.defaultProps = {
	defaultValue: 0,
	max: 5
};

exports.default = Rating;