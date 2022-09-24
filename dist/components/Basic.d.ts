import React from 'react';
interface TooltipProps {
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    children: React.ReactNode;
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
