function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export function Tabs(props) {
  const [activeTab, setActiveTab] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "d-flex flex-col gap0 items-end " + (props.className || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex gap0 bg-bg-dark"
  }, props.children.map((tab, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: `clickable b1 py-5 px-10 ${index === activeTab ? "bg-primary b-primary" : "hover-bg-bg"}`,
    onClick: () => setActiveTab(index)
  }, tab.name))), /*#__PURE__*/React.createElement("div", {
    className: "w100 p-5"
  }, props.children[activeTab].content));
}