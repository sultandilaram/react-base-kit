function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export function Card(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "card b1 rounded box-shadow bg-bg-dark " + props.className
  }), props.children);
}
export function CardHeader(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "p-5 d-flex content-between items-center bb1 " + props.className
  }), props.children);
}
export function CardBody(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "p-5 " + props.className
  }), props.children);
}
export function CardFooter(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "p-5 d-flex content-end items-center bt1 " + props.className
  }), props.children);
}