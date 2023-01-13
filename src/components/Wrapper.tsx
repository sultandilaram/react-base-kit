import React from "react";

interface WrapperProps {
  title?: string;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
export function Wrapper(props: WrapperProps) {
  React.useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="wrapper">
      {props.sidebar}
      <main>
        {props.header}
        {props.children}
        {props.footer}
      </main>
    </div>
  );
}
