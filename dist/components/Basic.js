function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export function Tooltip(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "tooltip " + (props.position || "bottom") + " " + props.className
  }), props.children);
}
export function Dropdown(props) {
  const [show, setShow] = React.useState(false);

  const toggle = e => {
    if (!props.onHover && e.target === e.currentTarget) {
      setShow(!show);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, show && !props.onHover && /*#__PURE__*/React.createElement("div", {
    className: "fixed top0 left0 vh100 vw100",
    onClick: toggle
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative " + props.className,
    onMouseEnter: () => props.onHover && setShow(true),
    onMouseLeave: () => props.onHover && setShow(false),
    onClick: toggle
  }, props.label, /*#__PURE__*/React.createElement("div", {
    className: "dropdown " + (props.position || "bottom") + " " + (show ? "show " : "") + props.dropDownClassName
  }, props.children)));
}