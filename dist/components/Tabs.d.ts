import React from 'react';
interface TabsProps {
    children: TabContent[];
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
interface TabContent {
    name: string;
    content: React.ReactNode;
}
export {};
