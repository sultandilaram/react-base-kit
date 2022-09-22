import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Wrapper(props) {
  React.useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, props.sidebar, /*#__PURE__*/React.createElement("main", null, props.header, /*#__PURE__*/React.createElement(Routes, null, props.routes.map((item, index) => /*#__PURE__*/React.createElement(Route, {
    key: index,
    path: item.path,
    element: item.element
  }))), props.footer)));
}