import React from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { FaBars, FaTimes } from "react-icons/fa";

import "./style.scss"

interface HeaderProps {
  logo?: any;
  title?: string;
  className?: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
}
export function Header(props: HeaderProps) {

  const [navMenuShow, setNavMenuShow] = React.useState(false);
  const navMenuTransition = useTransition(navMenuShow, {
    from: { opacity: 0, marginTop: "-100%" },
    enter: { opacity: 1, marginTop: "0" },
    leave: { opacity: 0, marginTop: "-100%" },
  });

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

        {/* Desktop Header Nav */}
        {props.children ? (
          <div className="nav-menu h100 d-flex items-center sm-d-none">
            {props.children}
            {props.extra || null}
          </div>
        ) : null}

        <FaBars
          className="section-title d-none sm-d-block"
          onClick={() => setNavMenuShow(true)}
        />

        {/* Mobile Header Nav */}
        {props.children ? navMenuTransition((style, item) => item && (
          <animated.div style={style} className="nav-menu d-none sm-d-flex">

            <FaTimes
              className="section-title nav-close"
              onClick={() => setNavMenuShow(false)}
            />

            {props.children}
            {props.extra || null}
          </animated.div>
        )) : null}
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
    <NavLink to={props.path} className={"nav-item clickable " + (props.disabled ? "disabled " : "") + props.className} >
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
      className={"nav-item relative " + (props.disabled ? "disabled " : "") + props.className}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {props.label}
      <div className={"dropdown " + (show ? "show " : "") + props.dropDownClassName} >{props.children}</div>
    </div>
  );
}