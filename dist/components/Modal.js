function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTransition, animated } from 'react-spring';
export function Modal(props) {
  const state = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn " + props.btnClass,
    onClick: () => state[1](true)
  }, props.buttonText), /*#__PURE__*/React.createElement(ModalWrapper, {
    showState: state
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    showState: state,
    title: props.title
  }, props.header), /*#__PURE__*/React.createElement(ModalBody, null, props.children), props.footer ? /*#__PURE__*/React.createElement(ModalFooter, null, props.footer) : null));
}
export function ModalWrapper(props) {
  const modalTransition = useTransition(props.showState[0], {
    from: {
      opacity: 0,
      marginTop: "-10%"
    },
    enter: {
      opacity: 1,
      marginTop: "0"
    },
    leave: {
      opacity: 0,
      marginTop: "-10%"
    }
  });

  const dismissHandler = e => {
    if (e.target === e.currentTarget) {
      props.showState[1](false);
    }
  };

  return modalTransition((style, item) => item && /*#__PURE__*/React.createElement(animated.div, _extends({
    style: style,
    className: "modal-wrapper fixed top0 left0 vh100 vw100 mask-light children-center z-modal " + props.className,
    onClick: dismissHandler
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "modal relative w100 max-w500px b1 rounded box-shadow bg-bg-dark overflow-hidden"
  }, props.children)));
}
export function ModalHeader(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "p-5 d-flex content-between items-center bb1 " + props.className
  }, props), /*#__PURE__*/React.createElement("div", null, props.title ? /*#__PURE__*/React.createElement("h3", null, props.title) : null, props.children), /*#__PURE__*/React.createElement(FaTimes, {
    className: "modal-close clickable",
    onClick: () => props.showState[1](false)
  }));
}
export function ModalBody(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "p-5 bg-bg " + props.className
  }, props), props.children);
}
export function ModalFooter(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "p-5 d-flex content-end items-center bt1 " + props.className
  }, props), props.children);
}