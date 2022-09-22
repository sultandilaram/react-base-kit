import ReactDOM from "react-dom/client";
import { Buffer } from "buffer";
import { Wrapper } from "./components";
import { BaseProvider } from "contexts"; /// Styles

import "./styles/index.scss"; /// DEPENDENCIES

window.Buffer = window.Buffer || Buffer; /// RENDER

function Home() {
  return /*#__PURE__*/React.createElement("section", {
    className: "Home"
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
    title: "React Base Kit" // sidebar={<Sidebar />}
    // header={<Header />}
    // footer={<Footer />}

  })));
}

ReactDOM.createRoot(document.getElementById("root")).render( /*#__PURE__*/React.createElement(App, null));