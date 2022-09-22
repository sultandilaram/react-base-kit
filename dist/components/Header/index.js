import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
export function Header(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "header h-header bg-bg-dark w100 py-5 px1 box-shadow d-flex items-center content-space-between " + props.className
  }, /*#__PURE__*/React.createElement("div", {
    className: "h100 d-flex items-center"
  }, props.logo ? /*#__PURE__*/React.createElement("img", {
    className: "h100",
    src: props.logo,
    alt: props.title
  }) : null, props.title ? /*#__PURE__*/React.createElement("h3", null, props.title) : null), props.children ? /*#__PURE__*/React.createElement("div", {
    className: "h100 d-flex items-center"
  }, props.children, props.extra || null) : null));
}
;
export function NavItem(props) {
  return /*#__PURE__*/React.createElement(NavLink, {
    to: props.path,
    className: "nav-item h100 clickable d-flex items-center font-light capitalize " + (props.disabled ? "disabled " : "") + props.className
  }, props.label);
}
export function NavDropdown(props) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "nav-item h100 relative clickable d-flex items-center font-light capitalize " + (props.disabled ? "disabled " : "") + props.className,
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, props.label, /*#__PURE__*/React.createElement("div", {
    className: "dropdown " + (show ? "show " : "") + props.dropDownClassName
  }, props.children));
}