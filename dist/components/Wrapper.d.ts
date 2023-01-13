import React from "react";
interface WrapperProps {
    title?: string;
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare function Wrapper(props: WrapperProps): JSX.Element;
export {};
