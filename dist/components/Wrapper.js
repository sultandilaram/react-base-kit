import React from "react";
export function Wrapper(props) {
  React.useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, props.sidebar, /*#__PURE__*/React.createElement("main", null, props.header, props.children, props.footer));
}