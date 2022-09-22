import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route as RouteType } from "types";

interface Props {
  title?: string;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  routes: RouteType[];
}
export default function Wrapper(props: Props) {

  React.useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <BrowserRouter>
      <div className="wrapper">
        {props.sidebar}
        <main>
          {props.header}
          <Routes>
            {props.routes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
          {props.footer}
        </main>
      </div>
    </BrowserRouter>
  )
}