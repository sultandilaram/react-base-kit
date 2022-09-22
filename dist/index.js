import ReactDOM from "react-dom/client";
import { Buffer } from "buffer";
import { Header, NavDropdown, NavItem, Wrapper } from "./components";
import { BaseProvider } from "contexts"; /// Styles

import "./styles/index.scss"; /// DEPENDENCIES

window.Buffer = window.Buffer || Buffer; /// RENDER

function Home() {
  return /*#__PURE__*/React.createElement("section", {
    className: "Home",
    style: {
      height: '1000px'
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Home"));
} /// Config


const ROUTES = [{
  path: '/',
  element: /*#__PURE__*/React.createElement(Home, null)
}];
const CONFIG = {
  environment: "local",
  api: {
    local: "http://localhost:8000",
    dev: "http://123.123.12.1",
    prod: "https://example.com"
  },
  loginMethod: async () => "token"
};

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(BaseProvider, {
    config: CONFIG
  }, /*#__PURE__*/React.createElement(Wrapper, {
    routes: ROUTES,
    title: "React Base Kit",
    header: /*#__PURE__*/React.createElement(Header, {
      title: "React Base"
    }, /*#__PURE__*/React.createElement(NavItem, {
      path: "/",
      label: "Home"
    }), /*#__PURE__*/React.createElement(NavItem, {
      path: "/link",
      label: "Link"
    }), /*#__PURE__*/React.createElement(NavItem, {
      path: "/disabled",
      label: "disabled",
      disabled: true
    }), /*#__PURE__*/React.createElement(NavDropdown, {
      label: "Dropdown"
    }, /*#__PURE__*/React.createElement(NavItem, {
      path: "/dropdown",
      label: "Dropdown Link"
    }), /*#__PURE__*/React.createElement(NavItem, {
      path: "/dropdown",
      label: "Dropdown Link"
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary"
    }, "Button")) // sidebar={<Sidebar />}
    // footer={<Footer />}

  })));
}

ReactDOM.createRoot(document.getElementById("root")).render( /*#__PURE__*/React.createElement(App, null));