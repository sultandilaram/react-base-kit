import React from 'react';
interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: 'top' | 'bottom' | 'left' | 'right';
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
interface DropdownProps {
    label: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    dropDownClassName?: string;
    onHover?: boolean;
}
export declare function Dropdown(props: DropdownProps): JSX.Element;
export {};
