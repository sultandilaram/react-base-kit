import React from "react";
import { Route as RouteType } from "types";
interface Props {
    title?: string;
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    routes: RouteType[];
}
export default function Wrapper(props: Props): JSX.Element;
export {};
