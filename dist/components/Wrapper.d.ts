import React from "react";
import { Route as RouteType } from "types";
interface WrapperProps {
    title?: string;
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    routes: RouteType[];
}
export declare function Wrapper(props: WrapperProps): JSX.Element;
export {};
