import React from "react";
interface HeaderProps {
    logo?: any;
    title?: string;
    className?: string;
    children?: React.ReactNode;
    extra?: React.ReactNode;
}
export declare function Header(props: HeaderProps): JSX.Element;
interface NavItemProps {
    label: string;
    path: string;
    disabled?: boolean;
    className?: string;
}
export declare function NavItem(props: NavItemProps): JSX.Element;
interface NavDropdownProps {
    label: string;
    className?: string;
    dropDownClassName?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}
export declare function NavDropdown(props: NavDropdownProps): JSX.Element;
export {};
