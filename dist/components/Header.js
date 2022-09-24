import React from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { FaBars, FaTimes } from "react-icons/fa";
export function Header(props) {
  const [navMenuShow, setNavMenuShow] = React.useState(false);
  const navMenuTransition = useTransition(navMenuShow, {
    from: {
      opacity: 0,
      marginTop: "-100%"
    },
    enter: {
      opacity: 1,
      marginTop: "0"
    },
    leave: {
      opacity: 0,
      marginTop: "-100%"
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "header h-header bg-bg-dark w100 py-5 px1 box-shadow d-flex items-center content-space-between " + props.className
  }, /*#__PURE__*/React.createElement("div", {
    className: "h100 d-flex items-center"
  }, props.logo ? /*#__PURE__*/React.createElement("img", {
    className: "h100",
    src: props.logo,
    alt: props.title
  }) : null, props.title ? /*#__PURE__*/React.createElement("h3", null, props.title) : null), props.children ? /*#__PURE__*/React.createElement("div", {
    className: "nav-menu h100 d-flex items-center sm-d-none"
  }, props.children, props.extra || null) : null, /*#__PURE__*/React.createElement(FaBars, {
    className: "section-title d-none sm-d-block",
    onClick: () => setNavMenuShow(true)
  }), props.children ? navMenuTransition((style, item) => item && /*#__PURE__*/React.createElement(animated.div, {
    style: style,
    className: "nav-menu d-none sm-d-flex"
  }, /*#__PURE__*/React.createElement(FaTimes, {
    className: "section-title nav-close",
    onClick: () => setNavMenuShow(false)
  }), props.children, props.extra || null)) : null));
}
;
export function NavItem(props) {
  return /*#__PURE__*/React.createElement(NavLink, {
    to: props.path,
    className: "nav-item clickable " + (props.disabled ? "disabled " : "") + props.className
  }, props.label);
}
export function NavDropdown(props) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "nav-item relative " + (props.disabled ? "disabled " : "") + props.className,
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, props.label, /*#__PURE__*/React.createElement("div", {
    className: "dropdown " + (show ? "show " : "") + props.dropDownClassName
  }, props.children));
}