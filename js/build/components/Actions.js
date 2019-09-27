'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = function Actions(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'Actions' },
		_react2.default.createElement(
			'span',
			{ tabIndex: '0', className: 'ActionsInfo', title: 'More info',
				onClick: props.onAction.bind(null, 'info')
			},
			'\u2731'
		),
		_react2.default.createElement(
			'span',
			{ tabIndex: '0', className: 'ActionsEdit', title: 'Edit',
				onClick: props.onAction.bind(null, 'edit')
			},
			'\u2710'
		),
		_react2.default.createElement(
			'span',
			{ tabIndex: '0', className: 'ActionsDelete', title: 'Delete',
				onClick: props.onAction.bind(null, 'delete')
			},
			'X'
		)
	);
}; /*React.PropTypes 已经从React v15.5迁移了，所以现在用prop-types库
   npm install prop-types -S*/

Actions.propTypes = {
	onAction: _propTypes.PropTypes.func
};

Actions.defaultProps = {
	onAction: function onAction() {}
};

exports.default = Actions;