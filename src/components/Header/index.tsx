import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss"

interface HeaderProps {
  logo?: any;
  title?: string;
  className?: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
}
export function Header(props: HeaderProps) {
  return (
    <>
      <header className={"header h-header bg-bg-dark w100 py-5 px1 box-shadow d-flex items-center content-space-between " + props.className}>

        {/* Header Brand */}
        <div className="h100 d-flex items-center">
          {/* {
            props.sidebar ? (
              sidebarShow
                ? <FaTimes className="clickable d-none sm-d-block" onClick={() => toggleSidebar(false)} />
                : <FaBars className="clickable d-none sm-d-block" onClick={() => toggleSidebar(true)} />
            ) : null
          } */}
          {props.logo ? <img className="h100" src={props.logo} alt={props.title} /> : null}
          {props.title ? <h3>{props.title}</h3> : null}
        </div>

        {/* Header Nav */}
        {props.children ? (
          <div className="h100 d-flex items-center">
            {props.children}
            {props.extra || null}
          </div>
        ) : null}
      </header>
    </>
  );
}

interface NavItemProps {
  label: string;
  path: string;
  disabled?: boolean;
  className?: string;
};
export function NavItem(props: NavItemProps) {
  return (
    <NavLink to={props.path} className={"nav-item h100 clickable d-flex items-center font-light capitalize " + (props.disabled ? "disabled " : "") + props.className} >
      {props.label}
    </NavLink>
  );
}

interface NavDropdownProps {
  label: string;
  className?: string;
  dropDownClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}
export function NavDropdown(props: NavDropdownProps) {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className={"nav-item h100 relative clickable d-flex items-center font-light capitalize " + (props.disabled ? "disabled " : "") + props.className}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {props.label}
      <div className={"dropdown " + (show ? "show " : "") + props.dropDownClassName} >{props.children}</div>
    </div>
  );
}